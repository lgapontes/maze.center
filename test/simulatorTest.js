var Room 			= require('../model/building').getRoom(),
	Tower 			= require('../model/building').getTower(),
	Map 			= require('../model/building').getMap(),
	alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),
	sizes			= require('../model/enum').getSizes(),
	thickness		= require('../model/enum').getThickness(),
	doorThickness	= require('../model/enum').getDoorThickness(),	
	Simulator		= require("../model/simulator").getSimulator(),
	BuildingFactory	= require('../model/factory').getBuildingFactory(),
	assert			= require("assert");
	
	
describe("Simulator Test", function(){
	
	it("Room Simulation 1",function(){		
		/* Create simulator */
		var simulator = new Simulator();
		var buildingFactory = new BuildingFactory(1);
		
		var expected0 = true;
		
		buildingFactory.newRoom(0)
			.setAlignment(alignments.left)
			.create();
			
		var place = buildingFactory.getPlace(0);
		var neighbor = undefined;
		
		/* Simulator */
		var actual0 = simulator.add(place,neighbor);
		
		assert.strictEqual(actual0.canAdd,expected0);				
	});
	
	it("Room Simulation 2",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)
			.setAlignment(alignments.left)
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
		var neighbor0 = buildingFactory.getNeighbor(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(1);
		
		/* Simulator */
		var actual0 = simulator.add(place0,neighbor0);
		var actual1 = simulator.add(place1,neighbor1);
		
		printBlockSet(actual0.blockSet);
		printBlockSet(actual1.blockSet);
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
});

function printBlockSet(_blockSet) {
	_blockSet.blocks.forEach(function(block){
		console.log();
		console.log('Block for place ' + block.placeNumber);
		console.log(block);
		console.log();
	});
};