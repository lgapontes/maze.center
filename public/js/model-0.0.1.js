/* Variables */
var radiusArcNumber = 20;
var fontArcNumber = "bold 22px Courier New";

/* Libraries */
function extend(base, sub) {
  // Avoid instantiating the base class just to setup inheritance
  // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
  // for a polyfill
  // Also, do a recursive merge of two prototypes, so we don't overwrite 
  // the existing prototype, but still maintain the inheritance chain
  // Thanks to @ccnokes
  var origProto = sub.prototype;
  sub.prototype = Object.create(base.prototype);
  for (var key in origProto)  {
     sub.prototype[key] = origProto[key];
  }
  // Remember the constructor property was set wrong, let's fix it
  sub.prototype.constructor = sub;
  // In ECMAScript5+ (all modern browsers), you can make the constructor property
  // non-enumerable if you define it like this instead
  Object.defineProperty(sub.prototype, 'constructor', { 
    enumerable: false, 
    value: sub 
  });
};

function Zone(_x,_y,_width,_height) {
	this.x = _x;
	this.y = _y;
	this.width = _width;
	this.height = _height;
};

Zone.prototype = {
	rect: function() {
		ctx.rect(
			this.x,
			this.y,
			this.width,
			this.height				
		);
		ctx.closePath();
		ctx.fill();
	},
	max: function() {
		return {
			x: this.x + this.width,
			y: this.y + this.height
		};
	},
	min: function() {
		return {
			x: this.x,
			y: this.y
		};
	}
};

function Door(obj,_place) {
	this.zone = undefined;	
	this.place = _place;
	for (var prop in obj) this[prop] = obj[prop];
};

Door.prototype = {
	
	calcAlignmentX: function() {
		var x = undefined;
		if (this.alignment === alignments.center) {
			x = this.place.position.x + this.place.size.width/2 - this.width/2;
		} else if (this.alignment === alignments.right) {
			x = this.place.position.x + this.place.size.width - this.width - thickness;
		} else if (this.alignment === alignments.left) {
			x = this.place.position.x + thickness;
		}
		return x;
	},
	
	calcAlignmentY: function() {
		var y = undefined;
		if (this.alignment === alignments.center) {
			y = this.place.position.y + this.place.size.height/2 - this.width/2;
		} else if (this.alignment === alignments.top) {
			y = this.place.position.y + thickness;
		} else if (this.alignment === alignments.bottom) {
			y = this.place.position.y + this.place.size.height - this.width - thickness;
		}
		return y;
	},
	
	drawNorth: function() {		
		if (this.place.type === types.room) {
			this.zone = new Zone(
				this.calcAlignmentX(),
				this.place.position.y - this.height/2 + 1,
				this.width,
				this.height
			);			
		} else { // Tower			
			this.zone = new Zone(
				this.place.position.x - this.width/2,
				this.place.position.y - this.height/2 - this.place.radius,
				this.width,
				this.height*4
			);			
		}
	},
	drawEast: function() {
		if (this.place.type === types.room) {
			this.zone = new Zone(
				this.place.position.x + this.place.size.width - this.height/2 - 1,
				this.calcAlignmentY(),
				this.height, 
				this.width
			);			
		} else { // Tower			
			this.zone = new Zone(
				this.place.position.x + this.place.radius - this.height/2 - thickness*4,
				this.place.position.y - this.width/2,
				this.height*4,
				this.width
			);			
		}
	},
	drawSouth: function() {
		if (this.place.type === types.room) {
			this.zone = new Zone(
				this.calcAlignmentX(),
				this.place.position.y + this.place.size.height - this.height/2 - 1,
				this.width, 
				this.height
			);						
		} else { // Tower			
			this.zone = new Zone(
				this.place.position.x - this.width/2,
				this.place.position.y + this.place.radius - thickness*4,
				this.width, 
				this.height*4
			);						
		}
	},
	drawWest: function() {
		if (this.place.type === types.room) {
			this.zone = new Zone(
				this.place.position.x - this.height/2 + 1,
				this.calcAlignmentY(),
				this.height, 
				this.width
			);						
		} else { // Tower			
			this.zone = new Zone(
				this.place.position.x - this.place.radius - thickness*4,
				this.place.position.y - this.width/2,
				this.height*4, 
				this.width
			);						
		}
	},
	
	setPosition: function (_axis) {
		if (_axis === axis.north) {
			this.drawNorth();
		} else if (_axis === axis.east) {			
			this.drawEast();
		} else if (_axis === axis.south) {
			this.drawSouth();
		} else if (_axis === axis.west) {
			this.drawWest();
		}
	},
	
	draw: function() {		
		ctx.beginPath();
		ctx.fillStyle = floorColor;
		this.zone.rect();
	}
	
};

function Neighbor(obj,_place) {
	for (var prop in obj) {
		if (prop === 'door') {
			this[prop] = new Door(obj[prop],_place);
		} else {
			this[prop] = obj[prop];
		}
	}
};

Neighbor.prototype = {
	drawNeighbor: function(_parent) {
		this.door.setPosition(this.axis);
		_parent.setPositionWith(this,this.door);
		this.next.draw(this.axis);		
	},
	drawDoor: function(_parent) {		
		this.door.draw();
		
		/* Finished? */
		if (this.next.type === types.tower && this.next.finish) {
			this.next.drawFinish();
		}
	}
};

function Place(obj) {
	this.painted = false;
	for (var prop in obj) {
		if (prop === 'neighbors') {
			this[prop] = [];
			for(var i=0;i<obj[prop].length;i++) {
				this[prop].push(new Neighbor(obj[prop][i],this));
			}
		} else {
			this[prop] = obj[prop];
		}
	}
};

Place.prototype = {
	
	draw: function() {
		if (!this.painted) this.drawMe();
		this.painted = true;
	},
	
	drawMe: function() {
		// Abstract
	},
	
	setPositionWith: function(_neighbor,_door) {
		if (_neighbor.axis === axis.north) {
			this.setNorth(_neighbor,_door);
		}
		if (_neighbor.axis === axis.east) {
			this.setEast(_neighbor,_door);
		}
		if (_neighbor.axis === axis.south) {
			this.setSouth(_neighbor,_door);
		}		
		if (_neighbor.axis === axis.west) {
			this.setWest(_neighbor,_door);
		}
	},
	
	setNorth: function(_neighbor,_door) {
		// Abstract
	},
	setEast: function(_neighbor,_door) {
		// Abstract
	},
	setSouth: function(_neighbor,_door) {
		// Abstract
	},
	setWest: function(_neighbor,_door) {
		// Abstract
	}
	
};

function Room(obj) {	
	Place.call(this, obj);
};

Room.prototype = {
	drawMe: function() {		
	
		// Draw neighbors
		for(var i=0;i<this.neighbors.length;i++) {
			this.neighbors[i].drawNeighbor(this);
		}
	
		// Wall
		ctx.beginPath();		
		ctx.fillStyle = wallColor;
		ctx.rect(this.position.x, this.position.y, this.size.width, this.size.height);
		ctx.closePath();
		ctx.fill();
		
		// Floor
		ctx.beginPath();
		ctx.fillStyle = floorColor;
		ctx.rect(this.position.x + thickness, this.position.y + thickness, this.size.width - 2*thickness, this.size.height - 2*thickness);
		ctx.closePath();
		ctx.fill();
		
		// Draw doors
		for(var i=0;i<this.neighbors.length;i++) {
			this.neighbors[i].drawDoor(this);
		}
		
		if (DEBUG.active) {
			this.drawRoomNumber();
			
			if (!DEBUG.painted) {
				console.log('Place ' + this.number + ' painted');
			}			
		}
	},
	
	drawRoomNumber: function() {
		// Room Arc Number
		ctx.beginPath();
		ctx.arc(
			this.position.x + this.size.width/2,
			this.position.y + this.size.height/2,
			radiusArcNumber,
			0,
			2*Math.PI
		);
		ctx.fillStyle = numberColor;
		ctx.closePath();
		ctx.fill();
		
		// Room Number
		ctx.beginPath();
		ctx.font = fontArcNumber;
		ctx.fillStyle = floorColor;
		ctx.textAlign = "center";
		ctx.closePath();
		ctx.fillText(
			this.number,
			this.position.x + this.size.width/2,
			this.position.y + this.size.height/2+6
		);
	},
	
    setNorth: function(_neighbor,_door) {
		if (_neighbor.next instanceof Tower) {
			_neighbor.next.position.x = _door.zone.min().x + _door.zone.width/2;
			_neighbor.next.position.y = this.position.y - _neighbor.next.radius + thickness*4;
		} else { // Room
			if (_neighbor.next.alignment === alignments.right) {
				_neighbor.next.position.x = _door.zone.min().x - thickness;
				_neighbor.next.position.y = this.position.y - _neighbor.next.size.height + thickness;
			} else if (_neighbor.next.alignment === alignments.left) {
				_neighbor.next.position.x = _door.zone.max().x + thickness - _neighbor.next.size.width;
				_neighbor.next.position.y = this.position.y - _neighbor.next.size.height + thickness;
			} else { // center
				_neighbor.next.position.x = _door.zone.x + _door.zone.width/2 - _neighbor.next.size.width/2;				
				_neighbor.next.position.y = this.position.y - _neighbor.next.size.height + thickness;
			}
		}
	},
	setEast: function(_neighbor,_door) {
		if (_neighbor.next instanceof Tower) {									
			_neighbor.next.position.x = this.position.x + this.size.width + _neighbor.next.radius/2 + thickness*4;
			_neighbor.next.position.y = _door.zone.min().y + _door.zone.height/2;
		} else { // Room									
			if (_neighbor.next.alignment === alignments.top) {
				_neighbor.next.position.x = this.position.x + this.size.width - thickness;
				_neighbor.next.position.y = _door.zone.max().y - _neighbor.next.size.height + thickness;
			} else if (_neighbor.next.alignment === alignments.bottom) {
				_neighbor.next.position.x = this.position.x + this.size.width - thickness;
				_neighbor.next.position.y = _door.zone.min().y - thickness;
			} else { // center
				_neighbor.next.position.x = this.position.x + this.size.width - thickness;
				_neighbor.next.position.y = _door.zone.min().y + _door.zone.height/2 - _neighbor.next.size.height/2;
			}
		}
	},
	setSouth: function(_neighbor,_door) {
		if (_neighbor.next instanceof Tower) {			
			_neighbor.next.position.x = _door.zone.min().x + _door.zone.width/2;
			_neighbor.next.position.y = this.position.y + this.size.height + _neighbor.next.radius - thickness*4;			
		} else { // Room
			if (_neighbor.next.alignment === alignments.right) {
				_neighbor.next.position.x = _door.zone.min().x - thickness;
				_neighbor.next.position.y = this.position.y + this.size.height - thickness;
			} else if (_neighbor.next.alignment === alignments.left) {
				_neighbor.next.position.x = _door.zone.max().x + thickness - _neighbor.next.size.width;
				_neighbor.next.position.y = this.position.y + this.size.height - thickness;
			} else { // center
				_neighbor.next.position.x = _door.zone.x + _door.zone.width/2 - _neighbor.next.size.width/2;				
				_neighbor.next.position.y = this.position.y + this.size.height - thickness;
			}
		}
	},
	setWest: function(_neighbor,_door) {
		if (_neighbor.next instanceof Tower) {						
			_neighbor.next.position.x = this.position.x - _neighbor.next.radius/2 - thickness*4;
			_neighbor.next.position.y = _door.zone.min().y + _door.zone.height/2;
		} else { // Room
			if (_neighbor.next.alignment === alignments.top) {
				_neighbor.next.position.x = this.position.x - _neighbor.next.size.width + thickness;
				_neighbor.next.position.y = _door.zone.max().y - _neighbor.next.size.height + thickness;
			} else if (_neighbor.next.alignment === alignments.bottom) {
				_neighbor.next.position.x = this.position.x - _neighbor.next.size.width + thickness;
				_neighbor.next.position.y = _door.zone.min().y - thickness;
			} else { // center
				_neighbor.next.position.x = this.position.x - _neighbor.next.size.width + thickness;
				_neighbor.next.position.y = _door.zone.min().y + _door.zone.height/2 - _neighbor.next.size.height/2;
			}
		}
	}
};

function Tower(obj) {
	Place.call(this, obj);
};

Tower.prototype = {
	drawMe: function() {
	
		/* Draw neighbors */
		for(var i=0;i<this.neighbors.length;i++) {
			this.neighbors[i].drawNeighbor(this);
		}
	
		// Wall
		ctx.beginPath();
		ctx.arc(
			this.position.x,
			this.position.y,
			this.radius,
			0,
			2*Math.PI
		);
		ctx.fillStyle = wallColor;
		ctx.closePath();
		ctx.fill();
		
		/* Floor */
		ctx.beginPath();
		ctx.arc(
			this.position.x,
			this.position.y,
			this.radius - thickness,
			0,
			2*Math.PI
		);
		ctx.fillStyle = floorColor;
		ctx.closePath();
		ctx.fill();
		
		/* Draw doors */
		for(var i=0;i<this.neighbors.length;i++) {
			this.neighbors[i].drawDoor(this);
		}
		
		if (DEBUG.active) {
			this.drawTowerNumber();
			
			if (!DEBUG.painted) {
				console.log('Place ' + this.number + ' painted');
			}			
		}
		
	},
	
	drawFinish: function() {
		/* Floor finish */
		ctx.beginPath();
		ctx.arc(
			this.position.x,
			this.position.y,
			this.radius - thickness*2,
			0,
			2*Math.PI
		);
		ctx.fillStyle = finishColor;
		ctx.closePath();
		ctx.fill();
		
		/* Chest */
		ctx.drawImage(
			chest,
			this.position.x - chest.width/2,
			this.position.y - chest.height/2
		);
		
		/* Add winner zone in headsman */
		headsman.setWinnerZone(
			this.position.x - chest.width/2,
			this.position.y - chest.height/2,
			chest.width,
			chest.height
		);
	},
	
	drawTowerNumber: function() {
		// Tower Arc Number
		ctx.beginPath();
		ctx.arc(
			this.position.x,
			this.position.y,
			radiusArcNumber,
			0,
			2*Math.PI
		);
		ctx.fillStyle = numberColor;
		ctx.closePath();
		ctx.fill();
		
		// Tower Number
		ctx.beginPath();
		ctx.font = fontArcNumber;
		ctx.fillStyle = floorColor;
		ctx.textAlign = "center";
		ctx.closePath();
		ctx.fillText(
			this.number,
			this.position.x,
			this.position.y+6
		);
	},
	
	setNorth: function(_neighbor) {		
		if (_neighbor.next.type === types.tower) {			
			_neighbor.next.position.x = this.position.x;
			_neighbor.next.position.y = this.position.y - _neighbor.next.radius*2 + thickness*7;
		} else {
			_neighbor.next.position.x = this.position.x - _neighbor.next.size.width/2;
			_neighbor.next.position.y = this.position.y - _neighbor.next.size.height - this.radius + thickness*4;
		}
	},
	setEast: function(_neighbor) {
		if (_neighbor.next.type === types.tower) {			
			_neighbor.next.position.x = this.position.x + this.radius*2 - thickness*7;
			_neighbor.next.position.y = this.position.y;
		} else {			
			_neighbor.next.position.x = this.position.x + this.radius - thickness*4;
			_neighbor.next.position.y = this.position.y - _neighbor.next.size.height/2;		
		}
	},
	setSouth: function(_neighbor) {
		if (_neighbor.next.type === types.tower) {			
			_neighbor.next.position.x = this.position.x;
			_neighbor.next.position.y = this.position.y + this.radius*2 - thickness*7;
		} else {
			_neighbor.next.position.x = this.position.x - _neighbor.next.size.width/2;
			_neighbor.next.position.y = this.position.y + this.radius - thickness*4;						
		}
	},
	setWest: function(_neighbor) {
		if (_neighbor.next.type === types.tower) {			
			_neighbor.next.position.x = this.position.x - _neighbor.next.radius*2 + thickness*7;
			_neighbor.next.position.y = this.position.y;
		} else {			
			_neighbor.next.position.x = this.position.x - _neighbor.next.size.width - this.radius + thickness*4;
			_neighbor.next.position.y = this.position.y - _neighbor.next.size.height/2;								
		}
	}
	
};

// Setup the prototype chain the right way
extend(Place, Room);
extend(Place, Tower);

/* Hashmap */
var key = function(obj){  
  return obj._id;
};

function BuildingFactory() {
	this.master_id = undefined;
	this.dict = {};
};

BuildingFactory.prototype = {
	add: function(_place) {
		this.dict[key(_place)] = _place;
		if (_place.number === 0) {
			this.master_id = _place._id;
		}		
	},
	updateNeighbors: function() {
		for (var prop in this.dict) {
			for(var i=0;i<this.dict[prop].neighbors.length;i++) {
				var id_next = this.dict[prop].neighbors[i].next;
				this.dict[prop].neighbors[i].next = this.dict[id_next];
			}
		}
	},
	getMaster: function() {
		return this.dict[this.master_id];
	},	
	preparing: function() {
		for (var prop in this.dict) {
			this.dict[prop].painted = false;
		}
	},	
	draw: function() {
		this.getMaster().draw();
		this.preparing();
		
		if (DEBUG.active && !DEBUG.painted) {
			console.log(this.dict);
			DEBUG.painted = true;
		}
	}
};