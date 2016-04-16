var logger  		= require('../infrastructure/logger').get(),
	mongoose		= require('../infrastructure/db').get(),
	Room 			= require('../model/building').getRoom(),
	Tower 			= require('../model/building').getTower(),
	alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),
	thickness		= require('../model/enum').getThickness(),
	sizes			= require('../model/enum').getSizes(),
	BuildingFactory	= require('../model/factory').getBuildingFactory();
	
exports.get = function(request, response) {
	var level = request.params.level;	
	var buildingFactory = new BuildingFactory();
	
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
		.create();
		
	buildingFactory.newRoom(6)
		.setAlignment(alignments.top)
		.addNeighbor(7,axis.west,alignments.center)
		.create();
	
	buildingFactory.newRoom(7)
		.setAlignment(alignments.bottom)
		.create();
		
	var places = buildingFactory.finish();
	
	var building = {
		places: places,
		axis: axis,
		alignments: alignments,
		thickness: thickness
	};
	
	/* Return */
	response.send(building);
};