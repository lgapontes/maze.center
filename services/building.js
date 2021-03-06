var logger  		= require('../infrastructure/logger').get(),
	mongoose		= require('../infrastructure/db').get(),
	Room 			= require('../model/building').getRoom(),
	Tower 			= require('../model/building').getTower(),
	alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),
	thickness		= require('../model/enum').getThickness(),
	sizes			= require('../model/enum').getSizes(),
	types			= require('../model/enum').getTypes(),
	BuildingFactory	= require('../model/factory').getBuildingFactory(),
	properties 		= require('../infrastructure/properties').get(),
	ObjectId 		= require('mongoose').Types.ObjectId,
	random			= require('./random'),
	trycatch 		= require('trycatch'),
	compatibility 	= require('../infrastructure/compatibility'),
	Protocol		= require('../public/shared/protocol').get();

trycatch.configure({
  colors: {
    // 'none' or falsy values will omit 
    'node': 'none',
    'node_modules': true,
    'default': 'red'
  }
});
	
var settings = {
	port: properties.get('server.port'),
	host: properties.get('server.host'),
	domain: properties.get('server.domain'),
	version: properties.get('maze.version'),
	
	// TODO: get by properties
	types: types,		
	axis: axis,
	alignments: alignments,
	thickness: thickness
};
	
function catchError(_protocol,_error,_response) {
	logger.error(_error);	
	_response.send(_protocol);
};
	
exports.getSavedMap = function(request, response, next) {
	
	trycatch(function() {
		
		var externalCode = request.params.externalCode;
		
		mongoose.connection.collections['mapCollection'].find({externalCode: externalCode}).toArray(function(error,maps){
			if (error) {
				var protocol = new Protocol(settings);
				protocol.setMessage(0);
				catchError(protocol, error, response);
			} else {
				if (maps.length !== 1) {
					var protocol = new Protocol(settings);
					protocol.setMessage(1);
					var error = 'Map not found: ' + externalCode;
					catchError(protocol, error, response);
				} else {
					var map = maps[0];
					var query = { map: new ObjectId(map._id) };
				
					mongoose.connection.collections['placeCollection'].find(query).toArray(function(error, places) {
						if (error) {
							var protocol = new Protocol(settings);
							protocol.setMessage(0);
							catchError(protocol, error, response);
						} else {							
					
							/* print(places); */
							
							var protocol = new Protocol(settings);
					
							protocol.setObject({
								places: places,
								map: map
							});
							
							/* Check compatibility of browsers */
							compatibility.check(request,function(_compatible){
								if (!_compatible) {
									protocol.setMessage(4);
								}				
							});
					
							/* Return */
							response.send(protocol);
						}
					}); 
					
				}
			}
		});
		
	}, function(err) {
		protocol.setMessage(2);
		catchError(protocol, err, response);
	});	
	
};

exports.getRamdomMap = function(request, response, next) {	
	
	trycatch(function() {
		
		var level = parseInt(request.params.level) || 1;	
		
		/* Create factory */
		var buildingFactory = new BuildingFactory(level);
		var previousAxis = random.randomAxis();
		
		
		/* Create first place */
		buildingFactory.newRoom(0)
			.addNeighbor(1,previousAxis,random.randomAxis(previousAxis))
			.create();
			
		/* Create places by level */
		for (var i=0;i<level;i++) {
			var type = random.randomTypes();
					
			if (type === types.tower) {
				/* Create tower */

				previousAxis = random.randomAxis(previousAxis);
			
				buildingFactory.newTower(i+1)
					.addNeighbor(i+2,previousAxis)
					.create();
					
			} else {
				/* Create Room */
				
				var tempPreviousAxis = random.randomAxis(previousAxis);
				
				buildingFactory.newRoom(i+1)
					.setSize(random.randomSizes())
					.setAlignment(random.randomAlignments(previousAxis))
					.addNeighbor(i+2,tempPreviousAxis,random.randomAlignments(tempPreviousAxis))
					.create();
					
				previousAxis = tempPreviousAxis;
				
			}
		}
		
		/* Create finish */
		buildingFactory.newTower(level+1)
			.setFinish()
			.create();
		
		/* Create places and map */
		var places = buildingFactory.creationCompleted();
		var map = buildingFactory.getMap();
		
		/* Save it */
		buildingFactory.save();		
		
		var protocol = new Protocol(settings);
		
		protocol.setObject({
			places: places,
			map: map
		});
		
		/* Check compatibility of browsers */
		compatibility.check(request,function(_compatible){
			if (!_compatible) {
				protocol.setMessage(4);
			}
				
		});
		
		/* Return */
		response.send(protocol);
		
	}, function(err) {
		var protocol = new Protocol(settings);
		protocol.setMessage(2);
		catchError(protocol, err, response);
	});
	
};

/* Use only for tests */
exports.getMap = function(request, response, next) {
	
	trycatch(function() {
		
		/* Create factory */
		var buildingFactory = new BuildingFactory(1);	
		
		buildingFactory.newRoom(0)
			.addNeighbor(1,axis.north,alignments.right)
			.addNeighbor(2,axis.south,alignments.left)
			.addNeighbor(3,axis.east,alignments.bottom)
			.addNeighbor(4,axis.west,alignments.top)
			.create();
			
		buildingFactory.newRoom(1)
			.setSize(sizes.smallVerticalCorridor)
			.setAlignment(alignments.right)
			.addNeighbor(8,axis.north,alignments.center)
			.create();
			
		buildingFactory.newRoom(2)
			.setSize(sizes.smallHorizontalCorridor)
			.setAlignment(alignments.right)
			.create();
			
		buildingFactory.newRoom(3)
			.setSize(sizes.tinyVerticalCorridor)
			.setAlignment(alignments.bottom)
			.addNeighbor(2,axis.west,alignments.bottom)
			.addNeighbor(5,axis.east,alignments.top)
			.create();
			
		buildingFactory.newRoom(4)
			.setAlignment(alignments.center)
			.addNeighbor(6,axis.west,alignments.center)
			.create();
			
		buildingFactory.newRoom(5)
			.setAlignment(alignments.center)
			.addNeighbor(10,axis.east,alignments.center)
			.create();
			
		buildingFactory.newRoom(6)
			.setAlignment(alignments.top)
			.addNeighbor(7,axis.west,alignments.center)
			.create();
		
		buildingFactory.newRoom(7)
			.setAlignment(alignments.bottom)
			.addNeighbor(9,axis.south,alignments.right)
			.addNeighbor(11,axis.west,alignments.bottom)
			.create();
			
		buildingFactory.newTower(8)
			.addNeighbor(12,axis.north)
			.addNeighbor(13,axis.east)
			.addNeighbor(14,axis.west)
			.create();
			
		buildingFactory.newTower(9)		
			.create();
			
		buildingFactory.newTower(10)
			.addNeighbor(15,axis.south)
			.addNeighbor(20,axis.east)
			.create();
			
		buildingFactory.newTower(11)
			.addNeighbor(17,axis.west)
			.create();
			
		buildingFactory.newRoom(12)
			.addNeighbor(16,axis.east,alignments.center)
			.addNeighbor(21,axis.north)
			.create();
			
		buildingFactory.newRoom(13)
			.setSize(sizes.smallHorizontalCorridor)
			.create();
		
		buildingFactory.newRoom(14)
			.setSize(sizes.smallHorizontalCorridor)
			.create();
			
		buildingFactory.newRoom(15)
			.setSize(sizes.smallVerticalCorridor)
			.create();
			
		buildingFactory.newRoom(16)
			.setSize(sizes.smallHorizontalCorridor)
			.create();
			
		buildingFactory.newTower(17)
			.addNeighbor(18,axis.north)
			.addNeighbor(19,axis.south)		
			.create();
			
		buildingFactory.newTower(18)		
			.create();
			
		buildingFactory.newTower(19)
			.create();
			
		buildingFactory.newTower(20)		
			.create();
			
		buildingFactory.newTower(21)
			.setFinish()
			.create();
		
		/* Create places and map */
		var places = buildingFactory.creationCompleted();
		var map = buildingFactory.getMap();		
		
		var protocol = new Protocol(settings);
		
		protocol.setObject({
			places: places,
			map: map
		});
		
		/* Check compatibility of browsers */
		compatibility.check(request,function(_compatible){
			if (!_compatible) {
				protocol.setMessage(4);
			}				
		});
		
		/* Return */
		response.send(protocol);
		
	}, function(err) {
		var protocol = new Protocol(settings);
		protocol.setMessage(3);
		catchError(protocol, err, response);
	});

};

function print(places) {
	places.forEach(function(place){
		console.log('Place:');
		console.log(place);
		place.neighbors.forEach(function(entry){
			console.log('Neighbor:');
			console.log(entry);
			console.log('Door:');
			console.log(entry.door);
		});		
		console.log();
	});
};
