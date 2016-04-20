/* Defines */
var thickness = 6;
var doorThickness = 100 + thickness;

/* Types */
var types = {
	room: 0,
	tower: 1
};

/* Sizes */
var sizes = {
	smallSquare: {
		width: 150,
		height: 150		
	},
	
	bigSquare: {
		width: 300,
		height: 300		
	},
	
	bigVerticalCorridor: {
		width: doorThickness + thickness*2,
		height: 300		
	},
	bigHorizontalCorridor: {
		width: 300,
		height: doorThickness + thickness*2,
	},
	
	smallVerticalCorridor: {
		width: doorThickness + thickness*2,
		height: 150		
	},
	smallHorizontalCorridor: {
		width: 150,
		height: doorThickness + thickness*2,
	},
	
	tinyVerticalCorridor: {
		width: doorThickness + thickness*2,
		height: (doorThickness * 2) + thickness*3
	},
	
	tinyHorizontalCorridor: {
		width: (doorThickness * 2) + thickness*3,
		height: doorThickness + thickness*2		
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

exports.getTypes = function() {
    return types;
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
    return thickness;
};

exports.getDoorThickness = function() {
    return doorThickness;
};