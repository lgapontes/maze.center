var logger  		= require('../infrastructure/logger').get(),	
	alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),	
	sizes			= require('../model/enum').getSizes(),
	types			= require('../model/enum').getTypes(),
	BuildingFactory	= require('../model/factory').getBuildingFactory(),
	Simulator		= require("../model/simulator").getSimulator(),
	random			= require('./random'),
	trycatch 		= require('trycatch');
	
function createAxesAvoided(_previousAxis) {	
	var axesAvoided = [];
	var parent_neighbor = ( _previousAxis + 2 ) % 4;
	axesAvoided.push( parent_neighbor );
	return axesAvoided;
}
	
exports.ramdomizeMap = function(_level,callback) {	
	
	trycatch(function() {
		
		// Reproduzir o caso http://127.0.0.1/?code=M1462408854L9ZdM1U em testes
		
		/* Create factory */
		var buildingFactory = new BuildingFactory(_level);		
		var numerology = _level + 3;
		var countNum = 0;
		
		var previousAxis = random.randomizeAxis();
		var axesAvoided = createAxesAvoided(previousAxis);
		
		/* Create simulator */
		var simulator = new Simulator();
		
		/* Create first place */
		buildingFactory.newRoom(0)
			.setSize(sizes.squareWH2)
			.addNeighbor(1,previousAxis,random.randomizeAlignments(previousAxis))
			.create();
		
		/* Get place and add in simulator */
		simulator.add( buildingFactory.getPlace(0) , undefined );
		
		/* Create places by numerology */
		while (countNum < numerology) {
			
			/* Create default result */
			var result = {};
			result.canAdd = false;
			
			/* Create cleared list of axes avoided */
			var othersAxes = [];
			
			while ( !result.canAdd ) {
				
				var type = random.randomizeTypes();
						
				if (type === types.tower) {
					/* Create tower */

					previousAxis = random.randomizeAxis(axesAvoided);
					axesAvoided = createAxesAvoided(previousAxis);
				
					buildingFactory.newTower(countNum+1)
						.addNeighbor(countNum+2,previousAxis)
						.create();
						
				} else {
					/* Create Room */
									
					var tempPreviousAxis = random.randomizeAxis(axesAvoided);				
					
					buildingFactory.newRoom(countNum+1)
						.setSize(random.randomizeSizes())
						.setAlignment(random.randomizeAlignments(previousAxis))
						.addNeighbor(countNum+2,tempPreviousAxis,random.randomizeAlignments(tempPreviousAxis))
						.create();
						
					previousAxis = tempPreviousAxis;
					axesAvoided = createAxesAvoided(previousAxis);
					
				}
				
				/* Check if the place can be added */
				var place = buildingFactory.getPlace( countNum+1 );
				var neighbor = buildingFactory.getNeighbor( countNum , countNum+1 );
			
				/* Simulator */			
				result = simulator.add(place,neighbor);
				
				/* If you can not be added, delete it and change the axis with parent */
				if ( !result.canAdd ) {
					
					/* Set axes avoided */
					othersAxes.push(neighbor.axis);
					axesAvoided = createAxesAvoided(previousAxis);
					othersAxes.forEach(function(entry){
						axesAvoided.push(entry);
					});
					
					/* Create new axis */
					previousAxis = random.randomizeAxis(axesAvoided);
					
					/* Drop place */
					buildingFactory.dropPlace( countNum+1 );
										
					/* Add new neighbor in parent */
					buildingFactory.addNeighborInPlace(
						countNum,
						countNum+1,
						previousAxis,
						random.randomizeAlignments(previousAxis)
					);
				}
				
			}
				
			countNum = countNum + 1;
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