var mongoose = require("mongoose");
var Schema = mongoose.Schema;

/* Place */
var PlaceSchema = new Schema({
	number: Number,
	invisible: Boolean,
	unknown: Boolean
});

var Place = mongoose.model('Place',PlaceSchema); 

/*
Place.prototype = {
	metodo: function() {
		console.log("blz");
	}
};
*/

exports.getPlace = function() {
    return Place;
};