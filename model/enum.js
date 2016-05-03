var properties = require('../infrastructure/properties').get();

/* Block */
var block = parseInt(properties.get('graphics.block'));

/* Defines */
var thickness = parseInt(properties.get('graphics.thickness'));
var version = properties.get('maze.version');

/* Types */
var types = {
	room: 0,
	tower: 1
};

/* Sizes */
var sizes = {
	square: {
		width: block,
		height: block
	},
	squareW2: {
		width: block * 2,
		height: block
	},
	squareH2: {
		width: block,
		height: block * 2
	},
	squareWH2: {
		width: block * 2,
		height: block * 2
	},
	squareW3: {
		width: block * 3,
		height: block
	},
	squareH3: {
		width: block,
		height: block * 3
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

exports.getVersion = function() {
    return version;
};

exports.getBlock = function() {
    return block;
};