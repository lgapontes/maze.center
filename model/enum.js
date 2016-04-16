/* Sizes */
var sizes = {
	smallSquare: {
		width: 150,
		height: 150		
	},
	smallVerticalCorridor: {
		width: 64,
		height: 150		
	}
};

/* Alignments */
var alignments = {
	center: -1,
	top: 0,
	right: 1,
	bottom: 2,
	left: 3
};

var axis = {
	north: 0,
	east: 1,
	south: 2,
	west: 3
};

exports.getAlignments = function() {
    return alignments;
};

exports.getSizes = function() {
    return sizes;
};

exports.getAxis = function() {
    return axis;
};

exports.getThickness = function() {
    return 2;
};