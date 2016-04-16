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
		.addNeighbor(1,axis.north,alignments.left)
		.addNeighbor(2,axis.south,alignments.right)
		.addNeighbor(3,axis.east,alignments.top)
		.addNeighbor(4,axis.west,alignments.bottom)
		.create();
	buildingFactory.newRoom(1)
		.setSize(sizes.smallVerticalCorridor)
		.setAlignment(alignments.right)
		.create();
	buildingFactory.newRoom(2).create();
	buildingFactory.newRoom(3).create();
	buildingFactory.newRoom(4).create();
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