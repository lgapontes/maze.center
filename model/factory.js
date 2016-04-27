var Room 			= require('./building').getRoom(),
	Tower 			= require('./building').getTower(),
	Map 			= require('./building').getMap(),
	alignments		= require('./enum').getAlignments(),
	axis			= require('./enum').getAxis(),
	sizes			= require('./enum').getSizes(),
	thickness		= require('./enum').getThickness(),
	doorThickness	= require('./enum').getDoorThickness(),
	logger   		= require('../infrastructure/logger').get(),
	moment  		= require('moment-timezone'),
	properties 		= require('../infrastructure/properties').get(),
	randomstring 	= require("randomstring"),
	Simulator		= require("./simulator").getSimulator();

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
	
	this.simulator = new Simulator();
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
				width: sizes.square.width,
				height: sizes.square.height	
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

		/* Alignment restriction based on the axis */
		var config = [
			{ axis: axis.north, obj: [ alignments.center, alignments.left, alignments.right ] },
			{ axis: axis.east,  obj: [ alignments.center, alignments.top, alignments.bottom ] },
			{ axis: axis.south, obj: [ alignments.center, alignments.left, alignments.right ] },
			{ axis: axis.west,  obj: [ alignments.center, alignments.top, alignments.bottom ] }
		];
		config.forEach(function(entry1){
			if (entry1.axis === _axis) {
				var found = false;
				entry1.obj.forEach(function(entry2){
					if (entry2 === temp_alignment) {
						found = true;
					}
				});
				if (!found) {
					temp_alignment = alignments.center;
				}
			}
		});
	
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
		
		/* Get  neighbor */
		var neighbor = undefined;
		for(var i=0;i<this.neighbors.length;i++) {
			var entry = this.neighbors[i];
			if (entry.neighbor.parent === this.place.number) {
				neighbor = entry;
				break;
			}
		}
		
		/* Simulator */
		var result = this.simulator.add(this.place,neighbor);
		
		if (result.canAdd) {
			this.places.push(this.place);
		}
		
		this.place = undefined;
		
		return result;
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