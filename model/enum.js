var properties = require('../infrastructure/properties').get();

/* Block */
var block = parseInt(properties.get('graphics.block'));

/* Defines */
var thickness = parseInt(properties.get('graphics.thickness'));
var doorThickness = block;
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