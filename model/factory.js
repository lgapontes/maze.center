var Room 			= require('./building').getRoom(),
	Tower 			= require('./building').getTower(),
	Map 			= require('../model/building').getMap(),
	alignments		= require('./enum').getAlignments(),
	axis			= require('./enum').getAxis(),
	sizes			= require('./enum').getSizes(),
	thickness		= require('./enum').getThickness(),
	doorThickness	= require('./enum').getDoorThickness(),
	logger   		= require('../infrastructure/logger').get(),
	moment  		= require('moment-timezone'),
	properties 		= require('../infrastructure/properties').get(),
	randomstring 	= require("randomstring");

var timezone = properties.get('logger.timezone');

function generateExternalCode() {
	return 'M' + moment.tz(timezone).unix() + randomstring.generate(7);
}
	
function BuildingFactory(_level) {
	this.map = new Map({
		level: _level,
		externalCode: generateExternalCode()
	});
	this.places = [];
	this.neighbors = [];
	this.place = undefined;
	this.done = false;
};

BuildingFactory.prototype = {	
	newRoom: function(_number) {
		this.place = new Room({
			map: this.map._id,
			number: _number,
			position: {
				x: 0,
				y: 0
			},
			neighbors: [],
			size: {
				width: sizes.smallSquare.width,
				height: sizes.smallSquare.height	
			},
			alignment: alignments.center
		});
		return this;
	},
	newTower: function(_number) {
		this.place = new Tower({
			map: this.map._id,
			number: _number,
			position: {
				x: 0,
				y: 0
			},
			neighbors: [],
			finish: false
		});
		return this;
	},
	setSize: function(_size) {
		if (this.place instanceof Room) {
			this.place.size = _size;
		}		
		return this;
	},
	setFinish: function() {
		if (this.place instanceof Tower) {
			this.place.finish = true;
		}
		return this;
	},
	setAlignment: function(_alignment) {
		if (this.place instanceof Room) {
			this.place.alignment = _alignment;
		}		
		return this;
	},
	addNeighbor: function(_nextNumber,_axis,_alignment) {

		var temp_alignment = alignments.center;
		if (typeof _alignment !== "undefined") {
             temp_alignment = _alignment;
        }
	
		this.neighbors.push({
			neighbor: {
				parent: this.place.number,
				next: _nextNumber
			},
			axis: _axis,
			door: {			
				width: doorThickness,
				height: thickness * 2,
				alignment: temp_alignment
			}
		});
		return this;
	},
	create: function() {
		this.places.push(this.place);
		this.place = undefined;
	},
	getPlace: function(_number) {
		for(var i=0;i<this.places.length;i++) {
			if (this.places[i].number === _number) {
				return this.places[i];
			}
		}
	},	
	creationCompleted: function() {		
		for(var i=0;i<this.neighbors.length;i++) {
			var entry = this.neighbors[i];			
			var place = this.getPlace(entry.neighbor.parent);
			var next = this.getPlace(entry.neighbor.next);			
			place.neighbors.push({
				next: next._id,
				axis: entry.axis,
				door: entry.door
			});
		}
		this.done = true;
		return this.places;
	},
	getMap: function() {
		return this.map;
	},
	save: function() {
		if (this.done) {
			this.map.save();
			this.places.forEach(function(entry){
				entry.save();
			});
		} else {
			logger.error('Use the done method before saving.');
		}
	}
};

exports.getBuildingFactory = function() {
	return BuildingFactory;
};