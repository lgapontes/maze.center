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
	
	it("Simulation places (room)",function(){
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		var actual0 = buildingFactory.newRoom(0)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var actual1 = buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)			
			.create();
		
		console.log(actual0.blockSet);
		console.log(actual1.blockSet);
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);
		
	});
});