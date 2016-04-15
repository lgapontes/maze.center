/* Sizes */
var sizes = {
	smallSquare: {
		width: 150,
		height: 150		
	}
};

/* Alignments */
var alignments = {
	none: -1,
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