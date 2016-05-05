var Room 			= require('../model/building').getRoom(),
	Tower 			= require('../model/building').getTower(),
	Map 			= require('../model/building').getMap(),
	alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),
	sizes			= require('../model/enum').getSizes(),
	thickness		= require('../model/enum').getThickness(),	
	Simulator		= require("../model/simulator").getSimulator(),
	BuildingFactory	= require('../model/factory').getBuildingFactory(),
	assert			= require("assert");
	
	
describe("Place Simulations", function(){
	
	it("Place Simulation Room alone",function(){		
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
	
	it("Place Simulation Room North Center",function(){
		
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
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Room South Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)
			.setAlignment(alignments.left)
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Room East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)
			.setAlignment(alignments.left)
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Room West Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)
			.setAlignment(alignments.left)
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Tower North Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Tower South Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Tower East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Tower West Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = true;
		var expected1 = true;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.strictEqual(actual0.canAdd,expected0);
		assert.strictEqual(actual1.canAdd,expected1);		
	});
	
	it("Place Simulation Room North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 0
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 1000,
				y: 999,				
				links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)
			.setAlignment(alignments.left)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room North Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 0
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 1000,
				y: 999,				
				links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room North Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 0
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 1000,
				y: 999,				
				links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room South Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 2
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 1000,
				y: 1001,				
				links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.south,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room South Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 2
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 1000,
				y: 1001,				
				links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.south,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room South Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 2
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 1000,
				y: 1001,				
				links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room East Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 1
			}]
		}];
		
		var expected1 = [			
			{
				placeNumber: 1,
				x: 1001,
				y: 1000,				
				links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);	
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room East Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 1
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 1001,
				y: 1000,				
				links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room West Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 3
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 999,
				y: 1000,				
				links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);			
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room West Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{ 
				parent: 0, 
				next: 1,
				axis: 3
			}]
		}];
		
		var expected1 = [
			{
				placeNumber: 1,
				x: 999,
				y: 1000,				
				links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
			}
		];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);	
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 alone",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)			
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
					
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
	
		assert.ok( equals( actual0.blockSet, expected0) );
	});
	
	it("Place Simulation Room SquareW2 North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 North Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 North Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);	
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 South Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 South Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 South Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);	
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 East Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 East Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 West Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 West Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW2 West Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 North Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 North Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,		
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 South Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.south,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 South Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.south,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 South Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 East Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 East Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 West Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 998,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 West Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 998,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Square SquareW2 West Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 998,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)				
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW2)		
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower North Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower North center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower South Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1002,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1000,
			y: 1002,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower South Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 1002,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1002,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower South center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1002,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1000,
			y: 1002,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1002,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)			
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);		
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower East Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower East Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 1003,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower West Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 998,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 998,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 998,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower West Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 998,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 998,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 998,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 Tower West Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 998,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 998,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 998,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)			
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
			
		buildingFactory.newTower(1)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 alone",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)			
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
					
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
	
		assert.ok( equals( actual0.blockSet, expected0) );
	});
	
	it("Place Simulation Room SquareH2 North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 South Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1002,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.south,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 East Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 East Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 West Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 West Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareH2 West Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareW2 North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareW2 South Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1002,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.south,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareW2 East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareW2 West Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 998,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 999,
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1001,
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Center Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Center Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Left Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Right Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Left Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 North Right Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 0
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 South Center Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 South Center Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 South Left Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 South Right Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 South Left Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareW2 SquareW2 South Right Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 2
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 2
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.south,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Center Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Center Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Top Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Bottom Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Top Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 East Bottom Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 1
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 West Center Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 West Center Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 West Top Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 West Bottom Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.center)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 West Top Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH2 SquareH2 West Bottom Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: [{
					parent: 0,
					next: 1,
					axis: 3
				}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.west,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareWH2 alone",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareWH2)			
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
					
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
	
		assert.ok( equals( actual0.blockSet, expected0) );
	});
	
	it("Place Simulation SquareWH2 SquareW2 North Left",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareWH2)
			.addNeighbor(1,axis.north,alignments.left)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareWH2 SquareH2 North Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1001,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareWH2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareWH2 SquareH2 East Bottom",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 1001,			
			links: [{
				parent: 0,
				next: 1,
				axis: 1
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 1002,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareWH2)
			.addNeighbor(1,axis.east,alignments.bottom)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation Room SquareW3 alone",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1002,
			y: 1000,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW3)			
			.create();
			
		var place0 = buildingFactory.getPlace(0);		
					
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
	
		assert.ok( equals( actual0.blockSet, expected0) );
	});
	
	it("Place Simulation SquareW3 SquareW2 North Right",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1003,
			y: 999,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW3)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.right)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareH3 SquareH3 West Top",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 0,
			x: 1000,
			y: 1002,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 999,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 3
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH3)
			.addNeighbor(1,axis.west,alignments.top)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareH3)
			.setAlignment(alignments.top)
			.create();
			
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
	});
	
	it("Place Simulation SquareWH2 SquareW2 North Left Square East Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 2,
				axis: 1
			}]
		},{
			placeNumber: 0,
			x: 1001,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 999,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		}];
		
		var expected2 = [{
			placeNumber: 2,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 2,
				axis: 1
			}]
		},{
			placeNumber: 2,
			x: 1002,
			y: 1001,			
			links: []
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareWH2)
			.addNeighbor(1,axis.north,alignments.left)
			.addNeighbor(2,axis.east,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareW2)
			.setAlignment(alignments.left)
			.create();
		
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0,1);
		
		buildingFactory.newRoom(2)						
			.setAlignment(alignments.center)
			.create();
			
		var place2 = buildingFactory.getPlace(2);
		var neighbor2 = buildingFactory.getNeighbor(0,2);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		var actual2 = simulator.add(place2,neighbor2);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
		assert.ok( equals( actual2.blockSet, expected2) );
	});
	
	it("Place Simulation SquareW3 SquareWH2 North Center SquareH2 East Bottom Square South Center",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: []
		},{
			placeNumber: 0,
			x: 1001,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			},{
				parent: 0,
				next: 3,
				axis: 2
			}]
		},{
			placeNumber: 0,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 0,
				next: 2,
				axis: 1
			}]
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1002,
			y: 998,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: []
		}];
		
		var expected2 = [{
			placeNumber: 2,
			x: 1003,
			y: 1000,			
			links: [{
				parent: 0,
				next: 2,
				axis: 1
			}]
		},{
			placeNumber: 2,
			x: 1003,
			y: 1001,			
			links: []
		}];
		
		var expected3 = [{
			placeNumber: 3,
			x: 1001,
			y: 1001,			
			links: [{
				parent: 0,
				next: 3,
				axis: 2
			}]
		}];
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW3)
			.addNeighbor(1,axis.north,alignments.center)
			.addNeighbor(2,axis.east,alignments.bottom)
			.addNeighbor(3,axis.south,alignments.center)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)			
			.setSize(sizes.squareWH2)
			.setAlignment(alignments.center)
			.create();
		
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0,1);
		
		buildingFactory.newRoom(2)						
			.setSize(sizes.squareH2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place2 = buildingFactory.getPlace(2);
		var neighbor2 = buildingFactory.getNeighbor(0,2);
		
		buildingFactory.newRoom(3)						
			.setSize(sizes.square)
			.setAlignment(alignments.center)
			.create();
			
		var place3 = buildingFactory.getPlace(3);
		var neighbor3 = buildingFactory.getNeighbor(0,3);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		var actual2 = simulator.add(place2,neighbor2);
		var actual3 = simulator.add(place3,neighbor3);
	
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
		assert.ok( equals( actual2.blockSet, expected2) );
		assert.ok( equals( actual3.blockSet, expected3) );
	});
	
	it("Place Simulation Test Collision 1",function(){
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected = false;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW3)
			.setAlignment(alignments.right)
			.addNeighbor(2,axis.south,alignments.right)
			.create();
		
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0,1);
		
		buildingFactory.newRoom(2)	
			.setSize(sizes.squareH2)
			.setAlignment(alignments.right)
			.addNeighbor(3,axis.west,alignments.bottom)
			.create();
			
		var place2 = buildingFactory.getPlace(2);
		var neighbor2 = buildingFactory.getNeighbor(1,2);
		
		buildingFactory.newRoom(3)
			.setSize(sizes.squareW2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place3 = buildingFactory.getPlace(3);
		var neighbor3 = buildingFactory.getNeighbor(2,3);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		var actual2 = simulator.add(place2,neighbor2);
		var actual3 = simulator.add(place3,neighbor3);
		
		assert.strictEqual(actual3.canAdd, expected);
	});
	
	it("Place Simulation Test Collision 2",function(){
		
		var expected0 = [{
			placeNumber: 0,
			x: 1000,
			y: 1000,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 0,
			x: 1000,
			y: 1001,			
			links: []
		}];
		
		var expected1 = [{
			placeNumber: 1,
			x: 1000,
			y: 999,			
			links: [{
				parent: 0,
				next: 1,
				axis: 0
			}]
		},{
			placeNumber: 1,
			x: 1001,
			y: 999,			
			links: []
		},{
			placeNumber: 1,
			x: 1002,
			y: 999,			
			links: [{
				parent: 1,
				next: 2,
				axis: 2
			}]
		}];
		
		var expected2 = [{
			placeNumber: 2,
			x: 1002,
			y: 1000,			
			links: [{
				parent: 1,
				next: 2,
				axis: 2
			}]
		},{
			placeNumber: 2,
			x: 1002,
			y: 1001,			
			links: [ /* This link was deleted */ ]
		}];
		
		var expected3BlockSet = undefined;
		var expected3CanAdd = false;
		
		/* Create simulator */
		var simulator = new Simulator();
		
		var expected = false;
		
		var buildingFactory = new BuildingFactory(1);
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareH2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
			
		var place0 = buildingFactory.getPlace(0);
			
		buildingFactory.newRoom(1)
			.setSize(sizes.squareW3)
			.setAlignment(alignments.right)
			.addNeighbor(2,axis.south,alignments.right)
			.create();
		
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0,1);
		
		buildingFactory.newRoom(2)	
			.setSize(sizes.squareH2)
			.setAlignment(alignments.right)
			.addNeighbor(3,axis.west,alignments.bottom)
			.create();
			
		var place2 = buildingFactory.getPlace(2);
		var neighbor2 = buildingFactory.getNeighbor(1,2);
		
		buildingFactory.newRoom(3)
			.setSize(sizes.squareW2)
			.setAlignment(alignments.bottom)
			.create();
			
		var place3 = buildingFactory.getPlace(3);
		var neighbor3 = buildingFactory.getNeighbor(2,3);
		
		/* Simulator */
		var actual0 = simulator.add(place0,undefined);
		var actual1 = simulator.add(place1,neighbor1);
		var actual2 = simulator.add(place2,neighbor2);
		var actual3 = simulator.add(place3,neighbor3);		
		
		assert.ok( equals( actual0.blockSet, expected0) );
		assert.ok( equals( actual1.blockSet, expected1) );
		assert.ok( equals( actual2.blockSet, expected2) );		
		assert.strictEqual(actual3.blockSet, expected3BlockSet);
		assert.strictEqual(actual3.canAdd, expected3CanAdd);		
		
	});
	
});


/* Methods to support the tests */

function equals(_actual,_expected, _DEBUG) {
	
	var DEBUG = false;
	if (_DEBUG) {
		DEBUG = _DEBUG;
	}
	
	var countOk = 0;
	
	for (var i=0; i< _expected.length; i++){
		
		var expected = _expected[i];
		var actual = _actual.blocks[i];
		
		if (_DEBUG) {
			console.log();
			console.log('SimulatorTest.equals to place: ' + expected.placeNumber);
		}
		
		if (expected.placeNumber === actual.placeNumber) {
			if (DEBUG) console.log('Condition 1 TRUE');
		
			if ( (expected.x === actual.x) && (expected.y === actual.y) ) {
				if (DEBUG) console.log('Condition 2 TRUE');
					
				if (expected.links.lenght === actual.links.lenght) {
					if (DEBUG) console.log('Condition 3 TRUE');
					
					if (expected.links.length > 0) {
						if (DEBUG) console.log('Condition 4 the place has links');						
						
						for (var j=0; j<expected.links.length; j++) {						
							if (
								expected.links[j].parent === actual.links[j].parent.placeNumber &&
								expected.links[j].next === actual.links[j].next.placeNumber &&
								expected.links[j].axis === actual.links[j].axis
							) {
								if (DEBUG) console.log('Condition 5 TRUE');
								countOk = countOk + 1;
							} else {
								if (DEBUG) console.log('Condition 5 FALSE');
								return false;
							}
						}
					} else {
						if (DEBUG) console.log('Condition 4 the place does not have links');
						countOk = countOk + 1;
					}
					
				} else {		
					if (DEBUG) console.log('Condition 3 FALSE');
					return false;
				}
				
			} else {				
				if (DEBUG) console.log('Condition 2 FALSE');
				return false;
			}
		} else {
			if (DEBUG) console.log('Condition 1 FALSE');
			return false;
		}		
	}
	
	var expectedLength = _expected.length;
	_expected.forEach(function(entry){
		if (entry.links.length > 1) {
			expectedLength = expectedLength + (entry.links.length - 1);
		}		
	});
	
	if (countOk === expectedLength) {		
		return true;
	}
		
	return false;
};

function printBlockSet(_blockSet) {
	_blockSet.blocks.forEach(function(block){
		console.log();
		console.log('Block for place ' + block.placeNumber);
		console.log(block);
		console.log();
	});
};