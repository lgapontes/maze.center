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
	ObjectId 		= require('mongoose').Types.ObjectId;

exports.getSavedMap = function(request, response) {	
	var externalCode = request.params.externalCode;
	
	mongoose.connection.collections['mapCollection'].find({externalCode: externalCode}).toArray(function(error,maps){
		if (error) {
			logger.error(error);
		} else {
			if (maps.length !== 1) {
				logger.error('Found more than one map with externalCode: ' + externalCode);
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
							thickness: thickness
						};
						
						/* Return */
						response.send(building);
					}
				}); 
				
			}
		}
	});	
	
};

exports.getRamdomMap = function(request, response) {
	var level = request.params.level;
	var buildingFactory = new BuildingFactory(level);	
	
	/* Create places */
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
		thickness: thickness
	};
	
	/* Return */
	response.send(building);
};