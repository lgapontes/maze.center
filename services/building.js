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
	random			= require('./random');

var settings = {
	port: properties.get('server.port'),
	host: properties.get('server.host')
};
	
exports.getSavedMap = function(request, response, next) {
	var externalCode = request.params.externalCode;
	
	mongoose.connection.collections['mapCollection'].find({externalCode: externalCode}).toArray(function(error,maps){
		if (error) {
			logger.error(error);
		} else {
			if (maps.length !== 1) {
				logger.error('Map not found: ' + externalCode);
			} else {
				var map = maps[0];
				var query = { map: new ObjectId(map._id) };
			
				mongoose.connection.collections['placeCollection'].find(query).toArray(function(error, places) {
					if (error) {
						logger.error(error);
					} else {
						var building = {
							places: places,
							map: map,
							
							types: types,		
							axis: axis,
							alignments: alignments,
							thickness: thickness,
							
							settings: settings
						};
				
						/* print(places); */
				
						/* Return */
						response.send(building);
					}
				}); 
				
			}
		}
	});	
	
};

exports.getRamdomMap = function(request, response, next) {	
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
	
	var building = {		
		places: places,
		map: map,
		
		types: types,		
		axis: axis,
		alignments: alignments,
		thickness: thickness,
		
		settings: settings
	};
	
	/* Return */
	response.send(building);
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