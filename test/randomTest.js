var alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),
	sizes			= require('../model/enum').getSizes(),
	random			= require('../services/random'),	
	assert			= require("assert");
	
	
describe("Randomize Functions", function(){
	
	it("Test Randomize Axis 1",function(){		
		var expected0 = true;
		var value = random.randomizeAxis();		
		var actual0 = containsObject(axis,value);				
		assert.strictEqual(actual0,expected0);				
	});
	
	it("Test Randomize Axis 2",function(){		
		var expected0 = false;
		var actual0 = false;
		
		for (var i=0; i<1000; i++) {
			var value = random.randomizeAxis(axis.north);
			if (value === axis.south) {				
				actual0 = true;
				break;
			}
		}
				
		assert.strictEqual(actual0,expected0);				
	});
	
	it("Test Randomize Axis 3",function(){		
		var expected0 = false;
		var actual0 = false;
		
		var avoidedAxis = [
			axis.north,
			axis.east,
			axis.south
		];
		
		for (var i=0; i<1000; i++) {
			var value = random.randomizeAxis(avoidedAxis);
			if ( (contains(avoidedAxis,value)) || (value !== axis.west) ) {
				actual0 = true;
				break;
			}
		}
				
		assert.strictEqual(actual0,expected0);				
	});
	
});

/* Helper functions */

function contains(_array,_element) {			
	for (var i=0; i<_array.length; i++) {				
		if (_array[i] === _element) {			
			return true;
		}
	}	
	return false;
};

function containsObject(_array,_element, _DEBUG) {
	
	var DEBUG = false;
	if (_DEBUG) {
		DEBUG = _DEBUG;
	}
	
	var array = getPorperties(_array);
	
	if (DEBUG) {
		console.log('_array');
		console.log(_array);
		console.log('array');
		console.log(array);
		console.log('array.length');
		console.log(array.length);
		console.log('_element');
		console.log(_element);
	}
	
	for (var i=0; i<array.length; i++) {
		
		if (DEBUG) {
			console.log('array[i]');
			console.log(array[i]);
			console.log('(array[i] === _element)');
			console.log((array[i] === _element));
		}
		
		if (array[i] === _element) {			
			return true;
		}
	}
	
	return false;
};

function containsObjectArray(_arrayBase,_array) {
	
	var arrayBase = getPorperties(_arrayBase);
	var array = getPorperties(_array);
	
	for (var i=0; i<arrayBase.length; i++) {
		for (var j=0; j<array.length; j++) {
			if (arrayBase[i] === array[j]) {
				return true;
			}
		}
	}
	return false;
};

function getPorperties(obj) {
	var properties = [];
    for(var prop in obj) {		
        properties.push(obj[prop]);
    }	
	return properties;
};