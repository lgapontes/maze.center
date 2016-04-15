var Room 		= require('../model/building').getRoom(),
	Tower 		= require('../model/building').getTower(),
	alignments	= require('../model/enum').getAlignments(),
	sizes		= require('../model/enum').getSizes();

function PlaceFactory() {
	this.place = undefined;
};

PlaceFactory.prototype = {
	createRoom: function(_number) {
		this.place = new Room({
			number: _number,
			position: {
				x: 0,
				y: 0
			},
			size: {
				width: sizes.smallSquare.width,
				height: sizes.smallSquare.height	
			},
			alignment: alignments.none
		});
		return this;
	},
	save: function(callback) {
		this.place.save(callback);
	}
};

exports.getPlaceFactory = function() {
	return new PlaceFactory();
}