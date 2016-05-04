var logger  		= require('../infrastructure/logger').get(),	
	alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),	
	sizes			= require('../model/enum').getSizes(),
	types			= require('../model/enum').getTypes(),
	BuildingFactory	= require('../model/factory').getBuildingFactory(),
	Simulator		= require("../model/simulator").getSimulator(),
	random			= require('./random'),
	trycatch 		= require('trycatch');
	
exports.ramdomizeMap = function(_level,callback) {	
	
	trycatch(function() {
		
		// Proximo passo, aplicar as regras do simulator
		
		/* Create factory */
		var buildingFactory = new BuildingFactory(_level);
		var previousAxis = random.randomizeAxis();		
		var numerology = _level + 3;
		
		/* Create first place */
		buildingFactory.newRoom(0)
			.setSize(sizes.squareWH2)
			.addNeighbor(1,previousAxis,random.randomizeAlignments(previousAxis))
			.create();
		
		/* Create places by numerology */
		for (var i=0;i<numerology;i++) {
			
			var type = random.randomizeTypes();
					
			if (type === types.tower) {
				/* Create tower */

				previousAxis = random.randomizeAxis(previousAxis);
			
				buildingFactory.newTower(i+1)
					.addNeighbor(i+2,previousAxis)
					.create();
					
			} else {
				/* Create Room */
				
				var tempPreviousAxis = random.randomizeAxis(previousAxis);
				
				buildingFactory.newRoom(i+1)
					.setSize(random.randomizeSizes())
					.setAlignment(random.randomizeAlignments(previousAxis))
					.addNeighbor(i+2,tempPreviousAxis,random.randomizeAlignments(tempPreviousAxis))
					.create();
					
				previousAxis = tempPreviousAxis;
				
			}
		}
		
		/* Create finish */
		buildingFactory.newTower(numerology+1)
			.setFinish()
			.create();
		
		/* Create places and map */
		var places = buildingFactory.creationCompleted();
		var map = buildingFactory.getMap();		
		
		/* Save it */
		buildingFactory.save();
		
		callback(undefined,places,map);
		
	}, function(err) {
		logger.error(err);
		callback(error);		
	});
	
};