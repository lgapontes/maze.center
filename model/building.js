var mongoose 	= require("mongoose"),
	extend 		= require('mongoose-schema-extend'),
	types		= require('./enum').getTypes();
	
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
	type: {
		type: Number,
		default: types.room
	},
	size: {
		width: Number,
		height: Number	
	},
	alignment: Number
});

/* Tower */
var TowerSchema = PlaceSchema.extend({	
	type: {
		type: Number,
		default: types.tower
	},
	radius: {
		type: Number,
		default: 92
	},
	finish: Boolean
});

/* Model */
var Room = mongoose.model('Room', RoomSchema, 'placeCollection');
var Tower = mongoose.model('Tower', TowerSchema, 'placeCollection');

/* Clear all data */
//mongoose.connection.collections['placeCollection'].drop();

exports.getRoom = function() {
    return Room;
};

exports.getTower = function() {
    return Tower;
};