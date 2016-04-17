/* Variables */
var wallColor = '#322b21';
var floorColor = '#FFFFFF';
var clearColor = '#FFFFFF';
var finishColor = '#EEEEEE';
var numberColor = '#050505';

/* General functions */
function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
};

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
	/*
	    
		Point 0      Point 1
	      |             |
	      V             V
		  ***************
		 *              *
		*<- Point 2     *
		*               *
		*     BIG       *
		*    JONNY      *
		*               *<- Point 3
		*              *
		***************<- Point 5
	   /|\
		| Point 4
		
	*/
	this.bigJohnnyCorners = [
		new Point(  6,  0 ), // Point 0
		new Point( 60,  0 ), // Point 1
		new Point(  0,  6 ), // Point 2
		new Point( 59, 54 ), // Point 3
		new Point(  0, 61 ), // Point 4
		new Point( 54, 59 )  // Point 5
	],
	
	this.circleZone = new CircleZone(0,0,0);
	this.rectZone = new RectZone(0,0,0,0);	
};

Headsman.prototype = {
	updateCorners: function(_x,_y) {
		for (var i=0;i<this.bigJohnnyCorners.length;i++) {
			this.bigJohnnyCorners[i].update(_x,_y);
		}
		
		/* Area of Big Jonny */
		this.rectZone = new RectZone(
			_x,
			_x + bigJonny.width,
			_y,
			_y + bigJonny.height
		);
		
		if (DEBUG) {
			console.log(this.bigJohnnyCorners);
		}
	},
	
	checkCollision: function() {
		for (var i=0;i<this.bigJohnnyCorners.length;i++) {			
			var point = this.bigJohnnyCorners[i];
		
			var collision = false;
			var p = ctx.getImageData(point.x, point.y, 1, 1).data; 
			var hex = "#" + ("000000" + rgbToHex(p[0], p[1], p[2])).slice(-6);
			
			if (hex === wallColor) {
				collision = true;
			}
			
			if (DEBUG && collision) {				
				console.log('Collision -> Point('+i+') x=' + point.x + ' y=' + point.y);
				console.log('Color(' + p[0] + ',' + p[1] + ',' + p[2] + '): ' + hex);
			}
		}
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