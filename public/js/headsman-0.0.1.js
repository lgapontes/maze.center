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

function WinnerZone(_x,_y,_width,_height) {
	this.x = parseInt(_x);
	this.y = parseInt(_y);
	this.width = parseInt(_width);
	this.height = parseInt(_height);
};

WinnerZone.prototype = {
	johnnyWon: function(_minPoing, _maxPoint) {
		if (
			(_minPoing.x >= this.x) &&
			(_minPoing.y >= this.y) &&
			(_maxPoint.x <= this.x + this.width) &&
			(_maxPoint.y <= this.y + this.height)
		) {
			return true;
		}
		return false;
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
	this.minPoint = undefined,
	this.maxPoint = undefined,
	this.winnerZone = new WinnerZone(0,0,0,0);
};

Headsman.prototype = {
	updateCorners: function(_x,_y) {
		for (var i=0;i<this.bigJohnnyCorners.length;i++) {
			this.bigJohnnyCorners[i].update(_x,_y);
		}
		
		/* Set points */
		var min_x = this.bigJohnnyCorners[2].x;
		var min_y = this.bigJohnnyCorners[0].y;
		var max_x = this.bigJohnnyCorners[1].x;
		var max_y = this.bigJohnnyCorners[4].y;
		this.minPoint = new Point(min_x,min_y);
		this.maxPoint = new Point(max_x,max_y);
		
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
	
	setWinnerZone: function(_x,_y,_width,_height) {
		this.winnerZone = new WinnerZone(
			parseInt(_x),
			parseInt(_y),
			parseInt(_width),
			parseInt(_height)			
		);
	},
	
	johnnyWon: function() {
		var won = false;
		
		if (this.winnerZone.johnnyWon(this.minPoint,this.maxPoint)) {
			won = true;			
		}
		
		if (DEBUG && won) {	
			console.log('Big Jonny won!');
			console.log('Min(' + this.minPoint.x + ',' + this.minPoint.y +') Max(' + this.maxPoint.x + ',' + this.maxPoint.y + ')');
		}
		
		return won;
	}
};