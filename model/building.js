var mongoose 	= require("mongoose"),
	extend 		= require('mongoose-schema-extend');	
	
var Schema = mongoose.Schema;

/* Place */
var PlaceSchema = new Schema({
	number: Number,
	position: {
		x: Number,
		y: Number
	},	
	neighbors: [{
		next: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Place'
		},
		axis: Number,		
		door: {			
			width: Number,
			height: Number,
			alignment: Number
		}		
	}]
}, { collection : 'placeCollection' });

/* Room */
var RoomSchema = PlaceSchema.extend({	
	size: {
		width: Number,
		height: Number	
	},
	alignment: Number
});

/* Tower */
var TowerSchema = PlaceSchema.extend({	
	diameter: {
		type: Number,
		default: 64
	},
	start: Boolean,
	finish: Boolean
});

/* Model */
var Room = mongoose.model('Room', RoomSchema, 'placeCollection');
var Tower = mongoose.model('Tower', TowerSchema, 'placeCollection');


/*
Place.prototype = {
	metodo: function() {
		console.log("blz");
	}
};
*/

/* Clear all data */
//mongoose.connection.collections['placeCollection'].drop();

exports.getRoom = function() {
    return Room;
};

exports.getTower = function() {
    return Tower;
};