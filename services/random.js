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

exports.randomizeSizes = function() {
	return random(sizes);
};

exports.randomizeAlignments = function(_axis) {
	
	var temp = random(alignments);
	
	/* Alignment restriction based on the axis */
	var config = [
		{ axis: axis.north, obj: [ alignments.center, alignments.left, alignments.right ] },
		{ axis: axis.east,  obj: [ alignments.center, alignments.top, alignments.bottom ] },
		{ axis: axis.south, obj: [ alignments.center, alignments.left, alignments.right ] },
		{ axis: axis.west,  obj: [ alignments.center, alignments.top, alignments.bottom ] }
	];
	
	var allowed = undefined;
	config.forEach(function(entry){
		if (entry.axis === _axis) {
			allowed = entry.obj;
		}
	});
	
	var stop = false;
			
	while ( !stop ) {		
		
		for (var i=0; i<allowed.length; i++) {
			if ( temp === allowed[i] ) {
				stop = true;
			}
		}
		
		if ( !stop ) {
			temp = random(alignments);
		}
		
	}
	
	return temp;
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