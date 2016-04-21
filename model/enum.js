var properties = require('../infrastructure/properties').get();

/* Defines */
var thickness = parseInt(properties.get('graphics.thickness'));
var doorThickness = parseInt(properties.get('graphics.doorThickness')) + thickness;
var version = properties.get('maze.version');

/* Types */
var types = {
	room: 0,
	tower: 1
};

/* Sizes */
var sizes = {
	smallSquare: {
		width: doorThickness * 2,
		height: doorThickness * 2		
	},
	
	bigSquare: {
		width: doorThickness * 4,
		height: doorThickness * 4
	},
	
	bigVerticalCorridor: {
		width: doorThickness + thickness*2,
		height: doorThickness * 4
	},
	bigHorizontalCorridor: {
		width: doorThickness * 4,
		height: doorThickness + thickness*2,
	},
	
	smallVerticalCorridor: {
		width: doorThickness + thickness*2,
		height: doorThickness * 2
	},
	smallHorizontalCorridor: {
		width: doorThickness * 2,
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

exports.getVersion = function() {
    return version;
};