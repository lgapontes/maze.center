var alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),
	sizes			= require('../model/enum').getSizes(),
	random			= require('../services/random'),
	BuildingFactory	= require('../model/factory').getBuildingFactory(),
	assert			= require("assert");
	
describe("Building Factory", function(){
	
	it("Test Creating Places",function(){		
		
		var expectedPlaces = {
			place0: { 
				position: { y: 0, x: 0 },		     
				neighbors: [ 0 ], // Check only the length
				type: 0,
				size: { height: 250, width: 500 },
				alignment: -1,
				number: 0    
			},
			place1: {
				position: { y: 0, x: 0 },     
				neighbors: [ 0 ], // Check only the length
				type: 0,
				size: { height: 500, width: 250 },
				alignment: 1,
				number: 1		
			},
			place2: {
				position: { y: 0, x: 0 },
				neighbors: [], // Check only the length     
				type: 0,
				size: { height: 250, width: 250 },
				alignment: 0,
				number: 2     
			}
		};
		
		var expectedNeighbor = {
			neighbor0: undefined,
			neighbor1: {
				neighbor: { parent: 0, next: 1 },
				axis: 0,
				door: { width: 234, height: 16, alignment: 1 }
			},
			neighbor2: {
				neighbor: { parent: 1, next: 2 },
				axis: 1,
				door: { width: 234, height: 16, alignment: 0 }
			}
		};
		
		var buildingFactory = new BuildingFactory(1);
		var actualPlaces = {};
		var actualNeighbor = {};
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
		
		var place0 = buildingFactory.getPlace(0);
		
		actualPlaces.place0 = place0;
		actualNeighbor.neighbor0 = undefined;
		
		buildingFactory.newRoom(1)
			.setSize(sizes.squareH2)
			.setAlignment(alignments.right)
			.addNeighbor(2,axis.east,alignments.top)
			.create();
		
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0,1);		
		
		actualPlaces.place1 = place1;
		actualNeighbor.neighbor1 = neighbor1;
		
		buildingFactory.newRoom(2)
			.setAlignment(alignments.top)			
			.create();
			
		var place2 = buildingFactory.getPlace(2);
		var neighbor2 = buildingFactory.getNeighbor(1,2);
		
		actualPlaces.place2 = place2;
		actualNeighbor.neighbor2 = neighbor2;
		
		var places = buildingFactory.creationCompleted();		
		
		assert.ok( comparePlace(places,expectedPlaces) );
		assert.ok( comparePlace(actualPlaces,expectedPlaces) );
		assert.ok( compareNeighbors(actualNeighbor,expectedNeighbor) );
	});
	
	it("Test Drop Place with 1 neighbor",function(){		
		
		var expectedPlaces = {
			place0: { 
				position: { y: 0, x: 0 },		     
				neighbors: [ 0 ], // Check only the length
				type: 0,
				size: { height: 250, width: 500 },
				alignment: -1,
				number: 0    
			},
			place1: {
				position: { y: 0, x: 0 },     
				neighbors: [], // Check only the length
				type: 0,
				size: { height: 500, width: 250 },
				alignment: 1,
				number: 1		
			}
		};
		
		var expectedNeighbor = {
			neighbor0: undefined,
			neighbor1: {
				neighbor: { parent: 0, next: 1 },
				axis: 0,
				door: { width: 234, height: 16, alignment: 1 }
			}
		};
		
		var buildingFactory = new BuildingFactory(1);
		var actualPlaces = {};
		var actualNeighbor = {};
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.create();
		
		var place0 = buildingFactory.getPlace(0);
		
		actualPlaces.place0 = place0;
		actualNeighbor.neighbor0 = undefined;
		
		buildingFactory.newRoom(1)
			.setSize(sizes.squareH2)
			.setAlignment(alignments.right)
			.addNeighbor(2,axis.east,alignments.top)
			.create();
		
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0,1);		
		
		actualPlaces.place1 = place1;
		actualNeighbor.neighbor1 = neighbor1;
		
		buildingFactory.newRoom(2)
			.setAlignment(alignments.top)			
			.create();
		
		var place2 = buildingFactory.getPlace(2);		
		
		/* Drop */
		buildingFactory.dropPlace(place2.number);
		
		place2 = buildingFactory.getPlace(2);
		var neighbor2 = buildingFactory.getNeighbor(1,2);		
		
		var places = buildingFactory.creationCompleted();		
		
		assert.strictEqual(place2,undefined);
		assert.strictEqual(neighbor2,undefined);				
		
		assert.ok( comparePlace(places,expectedPlaces) );
		assert.ok( comparePlace(actualPlaces,expectedPlaces) );
		assert.ok( compareNeighbors(actualNeighbor,expectedNeighbor) );
	});
	
	it("Test Drop Place with 2 neighbor",function(){		
		
		var expectedPlaces = {
			place0: { 
				position: { y: 0, x: 0 },		     
				neighbors: [ 0 ], // Check only the length
				type: 0,
				size: { height: 250, width: 500 },
				alignment: -1,
				number: 0    
			},
			place1: {
				position: { y: 0, x: 0 },     
				neighbors: [], // Check only the length
				type: 0,
				size: { height: 500, width: 250 },
				alignment: 1,
				number: 1		
			}
		};
		
		var expectedNeighbor = {
			neighbor0: undefined,
			neighbor1: {
				neighbor: { parent: 0, next: 1 },
				axis: 0,
				door: { width: 234, height: 16, alignment: 1 }
			}
		};
		
		var buildingFactory = new BuildingFactory(1);
		var actualPlaces = {};
		var actualNeighbor = {};
		
		buildingFactory.newRoom(0)	
			.setSize(sizes.squareW2)
			.addNeighbor(1,axis.north,alignments.right)
			.addNeighbor(2,axis.east,alignments.top)
			.create();
		
		var place0 = buildingFactory.getPlace(0);
		
		actualPlaces.place0 = place0;
		actualNeighbor.neighbor0 = undefined;
		
		buildingFactory.newRoom(1)
			.setSize(sizes.squareH2)
			.setAlignment(alignments.right)
			.addNeighbor(2,axis.east,alignments.top)
			.create();
		
		var place1 = buildingFactory.getPlace(1);
		var neighbor1 = buildingFactory.getNeighbor(0,1);		
		
		actualPlaces.place1 = place1;
		actualNeighbor.neighbor1 = neighbor1;
		
		buildingFactory.newRoom(2)
			.addNeighbor(3,axis.south,alignments.left)
			.setAlignment(alignments.top)
			.create();
		
		var place2 = buildingFactory.getPlace(2);
		
		/* Drop */
		buildingFactory.dropPlace(place2.number);
		
		place2 = buildingFactory.getPlace(2);
		var neighbor2 = buildingFactory.getNeighbor(1,2);		
		
		var places = buildingFactory.creationCompleted();		
		
		assert.strictEqual(place2,undefined);
		assert.strictEqual(neighbor2,undefined);				
		
		assert.ok( comparePlace(places,expectedPlaces) );
		assert.ok( comparePlace(actualPlaces,expectedPlaces) );
		assert.ok( compareNeighbors(actualNeighbor,expectedNeighbor) );
	});
	
});

/* Helper functions */

function compareNeighbors(_n1,_n2) {

	var n1;
	var n2;

	if (Object.prototype.toString.call(_n1) === '[object Array]') {
		n1 = _n1;
	} else {
		n1 = getPorperties(_n1);
	}
	
	if (Object.prototype.toString.call(_n2) === '[object Array]') {
		n2 = _n2;
	} else {
		n2 = getPorperties(_n2);
	}
	
	var equals = true;
	
	var i = 0;
	
	n1.forEach(function(neighbors1){
		
		var neighbors2 = n2[i];
		
		if ( ( neighbors1 === undefined ) && ( neighbors2 === undefined ) ) {
			// It is equal
		} else {
			
			if (
				( ( neighbors1 === undefined ) && ( neighbors2 !== undefined ) ) ||
				( ( neighbors1 !== undefined ) && ( neighbors2 === undefined ) )
			) {
				equals = false;
			} else {
				
				if (
					neighbors1.neighbor.parent === neighbors2.neighbor.parent &&
					neighbors1.neighbor.next === neighbors2.neighbor.next &&
					neighbors1.axis === neighbors2.axis &&
					neighbors1.door.width === neighbors2.door.width &&
					neighbors1.door.height === neighbors2.door.height &&
					neighbors1.door.alignment === neighbors2.door.alignment
				) {
					// It is equal
				} else {
					equals = false;
				}
				
			}
			
		}
		
		i = i + 1;
	});
	
	return equals;
};

function comparePlace(_p1,_p2) {
	var p1 = getPorperties(_p1);
	var p2 = getPorperties(_p2);
	
	var equals = true;
	
	p1.forEach(function(place1){
		p2.forEach(function(place2){
			
			if ( place1.number === place2.number ) {
				
								if (
					place1.position.x === place2.position.x &&
					place1.position.y === place2.position.y
				) {
					
					if ( place1.neighbors.length === place2.neighbors.length ) {
						
						if (place1.type === place2.type) {
							
							if (
								place1.size.height === place2.size.height &&
								place1.size.width === place2.size.width
							) {
								
								if ( place1.alignment === place2.alignment ) {
									
									// It is equal
									
								} else {
									equals = false;
								}
								
							} else {
								equals = false;								
							}
							
						} else {
							equals = false;
						}
						
					} else {
						equals = false;						
					}
					
				} else {
					equals = false;
				}
				
			}
			
		});
	});
	
	return equals;
};

function getPorperties(obj) {
	var properties = [];
    for(var prop in obj) {		
        properties.push(obj[prop]);
    }	
	return properties;
};