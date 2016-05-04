var alignments		= require('../model/enum').getAlignments(),
	axis			= require('../model/enum').getAxis(),
	sizes			= require('../model/enum').getSizes(),
	types			= require('../model/enum').getTypes();

/* Returns a random number between min (inclusive) and max (exclusive) */
function getRandomInt(min, max) {
    return parseInt( Math.random() * (max - min) + min );
};

function getPorperties(obj) {
	var properties = [];
    for(var prop in obj) {
        properties.push(prop);
    }	
	return properties;
};

function random(obj) {
	var properties = getPorperties(obj);
	var max = getRandomInt(0,properties.length);
    return obj[properties[getRandomInt(0,properties.length)]];
};

function d10() {
	return getRandomInt(1,11);
};

function d100() {
	return getRandomInt(1,101);
};

exports.randomSizes = function() {
	return random(sizes);
};

exports.randomAlignments = function(_previousAxis) {
	return random(alignments);
};

// Deprecated
exports.randomAxis = function(_axis) {

	/* For now, do not use the south axis */
	var limited_axis = {
		north: axis.north,
		east: axis.east,		
		west: axis.west
	};
	
	var temp = random(limited_axis);
	
	if (_axis) {
		var parent_neighbor = ( _axis + 2 ) % 4;
		while (parent_neighbor === temp) {
			temp = random(limited_axis);
		}
	}
	
	return temp;
};

// Deprecated
exports.randomTypes = function() {
	var result = d10();
	if (result > 1) {
		return types.room;
	} else {
		return types.tower;
	}
};

exports.randomizeAxis = function(_avoidedAxis) {
	
	var temp = random(axis);
	
	if (_avoidedAxis !== 'undefined') {
		
		if (Object.prototype.toString.call(_avoidedAxis) === '[object Array]') {
			
			var count = _avoidedAxis.length;
			
			while ( count > 0 ) {
				
				/* Reset count */
				count = 0;

				/* Verifies that is avoided */
				for (var i=0; i<_avoidedAxis.length; i++) {
					if ( temp === _avoidedAxis[i] ) {
						count = count + 1;
					}
				}
				
				/* If one of prevented, search for another */
				if (count > 0) {
					temp = random(axis);
				}
				
			}
			
		} else {
			
			/* Verifies that is not the parent axis */
			var parent_neighbor = ( _avoidedAxis + 2 ) % 4;
			while (parent_neighbor === temp) {
				temp = random(axis);
			}
		}		
		
	}
	
	return temp;
};

exports.randomizeTypes = function() {
	var result = d100();
	if (result > 3) {
		return types.room;
	} else {
		return types.tower;
	}
};