/* Variables */
var wallColor = '#322b21';
var floorColor = '#ffffff';
var clearColor = wallColor;
var finishColor = '#eeeeee';
var numberColor = '#050505';
var wonColor = '#9de0a9';
var collisionColor = '#e0ae9d';

/* General functions */
function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
}

/* Color to check collision */
var checkCollisionColor = hexToRgb( wallColor );

/* Big Jonny */
var bigJonny = {
	width: 60,
	height: 60
};

/* Chest */
var chest = {
	width: 98,
	height: 110
};

/* Loader */
var loader = {
	width: 100,
	height: 100
};

function Point(_x,_y) {
	this.x = _x,
	this.y = _y
};

Point.prototype = {
	update: function(_x,_y) {
		this.x = this.x + parseInt(_x);
		this.y = this.y + parseInt(_y);
	}
};

function RectZone(_rectLeft,_rectRight,_rectTop,_rectBottom) {
	this.rectLeft = _rectLeft;
	this.rectRight = _rectRight;
	this.rectTop = _rectTop;
	this.rectBottom = _rectBottom;
};

function CircleZone(_x,_y,_radius) {
	this.centerX = _x;
	this.centerY = _y;
	this.radius = _radius;
};

CircleZone.prototype = {
	contains: function(_rectZone) {		
		dx = this.max(this.centerX - _rectZone.rectLeft, _rectZone.rectRight - this.centerX); 
		dy = this.max(this.centerY - _rectZone.rectTop, _rectZone.rectBottom - this.centerY);		
		return this.radius*this.radius >= dx*dx + dy*dy
	},
	
	max: function(_n1,_n2) {
		if (_n1 >= _n2) return _n1;
		return _n2;
	}
};

function Headsman() {	
	this.bigJonnyPoint = new Point(0,0);	
	this.circleZone = new CircleZone(0,0,0);
	this.rectZone = new RectZone(0,0,0,0);	
};

Headsman.prototype = {
	updateCorners: function(_x,_y) {
		
		/* Update point of Big Jonny */
		this.bigJonnyPoint.update(_x,_y);		
		
		/* Area of Big Jonny */
		this.rectZone = new RectZone(
			_x,
			_x + bigJonny.width,
			_y,
			_y + bigJonny.height
		);
		
	},
	
	checkCollision: function() {
		
		var imageWidth = bigJonny.width;
		var imageHeight = bigJonny.height;
		
		var data = ctx.getImageData(
			this.bigJonnyPoint.x, 
			this.bigJonnyPoint.y, 
			imageWidth, 
			imageHeight
		).data;
		
		/* Iterate over all pixels based on x and y coordinates */
        for(var y = 0; y < imageHeight; y++) {
			  // loop through each column
			  for(var x = 0; x < imageWidth; x++) {
					var red = data[((imageWidth * y) + x) * 4];
					var green = data[((imageWidth * y) + x) * 4 + 1];
					var blue = data[((imageWidth * y) + x) * 4 + 2];
					//var alpha = data[((imageWidth * y) + x) * 4 + 3];
					
					/* Check collision */
					if (
						checkCollisionColor.r === red &&
						checkCollisionColor.g === green &&
						checkCollisionColor.b === blue
					) {
						if (DEBUG) { console.log('Collision!'); }
						return true;
					}
			  }
        }
		
		return false;
	},
	
	setCircleZone: function(_x,_y,_radius) {
		this.circleZone = new CircleZone(
			parseInt(_x),
			parseInt(_y),
			parseInt(_radius)
		);		
	},
	
	johnnyWon: function() {
		var won = false;
		
		if (this.circleZone.contains(this.rectZone)) {
			won = true;
		}
		
		if (DEBUG && won) {	
			console.log('Big Jonny won!');
		}
		
		return won;
	}
};