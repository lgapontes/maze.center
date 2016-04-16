var Room 			= require('./building').getRoom(),
	Tower 			= require('./building').getTower(),
	alignments		= require('./enum').getAlignments(),
	axis			= require('./enum').getAxis(),
	sizes			= require('./enum').getSizes(),
	thickness		= require('./enum').getThickness(),
	doorThickness	= require('./enum').getDoorThickness(),
	logger   		= require('../infrastructure/logger').get();

function BuildingFactory() {
	this.places = [];
	this.neighbors = [];
	this.place = undefined;
	this.done = false;
};

BuildingFactory.prototype = {
	newRoom: function(_number) {
		this.place = new Room({
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
	setSize: function(_size) {
		if (this.place instanceof Room) {
			this.place.size = _size;
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
		this.neighbors.push({
			neighbor: {
				parent: this.place.number,
				next: _nextNumber
			},
			axis: _axis,	
			door: {			
				width: doorThickness,
				height: thickness * 2,
				alignment: _alignment
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
	finish: function() {
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
	save: function() {
		if (this.done) {
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