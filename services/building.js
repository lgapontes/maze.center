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
	maker 			= require('./maker'),
	Protocol		= require('../public/shared/protocol').get();

trycatch.configure({
  colors: {
    // 'none' or falsy values will omit 
    'node': true,
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

exports.getRamdomizeMap = function(request, response, next) {	
	
	trycatch(function() {
		
		var level = parseInt(request.params.level) || 1;
		
		var value = maker.ramdomizeMap(level,function(_error,_places,_map){
			if (_error) {
				throw new Error("Error in maker: " + _error)
			} else {
				
				var protocol = new Protocol(settings);
		
				protocol.setObject({
					places: _places,
					map: _map
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
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.lest)
			.create();
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)
			.create();
		/* Places - END */
		
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
