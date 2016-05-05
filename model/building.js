var mongoose 		= require("mongoose"),
	extend 			= require('mongoose-schema-extend'),
	types			= require('./enum').getTypes(),
	block			= require('./enum').getBlock();
	
var Schema = mongoose.Schema;

/* Map */
var MapSchema = new Schema({
	level: Number,
	externalCode: { type: String, index: true }
}, { collection : 'mapCollection' });

/* Place */
var PlaceSchema = new Schema({
	map: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Map',
		index: true
	},
	number: Number,
	position: {
		x: Number,
		y: Number
	},	
	neighbors: [{
		next: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Place',
			index: true
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
		default: block
	},
	finish: Boolean
});

/* Model */
var Map = mongoose.model('Map', MapSchema, 'mapCollection');
var Room = mongoose.model('Room', RoomSchema, 'placeCollection');
var Tower = mongoose.model('Tower', TowerSchema, 'placeCollection');

/* Clear all data */
//mongoose.connection.collections['placeCollection'].drop();
//mongoose.connection.collections['mapCollection'].drop();

exports.getMap = function() {
    return Map;
};

exports.getRoom = function() {
    return Room;
};

exports.getTower = function() {
    return Tower;
};