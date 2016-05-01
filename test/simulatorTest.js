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
	
	it("Place Simulation Room SquareW2",function(){
		
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
	
});


/* Methods to support the tests */

function equals(_actual,_expected) {
	
	var countOk = 0;
	
	for (var i=0; i< _expected.length; i++){
		
		var expected = _expected[i];
		var actual = _actual.blocks[i];
		
		if (expected.placeNumber === actual.placeNumber) {
		
			if ( (expected.x === actual.x) && (expected.y === actual.y) ) {
					
				if (expected.links.lenght === actual.links.lenght) {
					
					if (expected.links.length > 0) {
						for (var j=0; j<expected.links.length; j++) {						
							if (
								expected.links[j].parent === actual.links[j].parent.placeNumber &&
								expected.links[j].next === actual.links[j].next.placeNumber &&
								expected.links[j].axis === actual.links[j].axis
							) {									
								countOk = countOk + 1;
							} else {
								return false;
							}
						}
					} else {
						countOk = countOk + 1;
					}
					
				} else {						
					return false;
				}
				
			} else {				
				return false;
			}
		} else {		
			return false;
		}		
	}
	
	if (countOk === _expected.length) {		
		return true;
	}
		
	return false;
};

function printMatrix(_simulator) {
	
	var min = 990;
	var max = 1010;	
		
	for (var y=min; y<= max; y++) {
		var line = '';
		for (var x=min; x<= max; x++) {			
			
			var block = _simulator.getBlockByPosition(x,y);
			
			if (block) {
				if ( block.placeNumber < 10 ) {
					line = line + '0' + block.placeNumber + ' ';
				} else {
					line = line + block.placeNumber + ' ';
				}
			} else {
				line = line + '__ ';
			}
					
		}
		console.log( line );
		line = '';
	}	
}

function printBlockSet(_blockSet) {
	_blockSet.blocks.forEach(function(block){
		console.log();
		console.log('Block for place ' + block.placeNumber);
		console.log(block);
		console.log();
	});
};