/* Variables */
var wallColor = '#322b21';
var floorColor = '#FFFFFF';
var clearColor = '#FFFFFF';
var finishColor = '#EEEEEE';

/* General functions */
function rgbToHex(r, g, b) {
    if (r > 255 || g > 255 || b > 255)
        throw "Invalid color component";
    return ((r << 16) | (g << 8) | b).toString(16);
};

/* Game objects */
var bigJonny = {
	width: 60,
	height: 60
};

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
		this.x = this.x + _x;
		this.y = this.y + _y;
	}
};

function Headsman() {
	/*
	this.bigJohnnyCorners = [
		new Point(  7,  0 ),
		new Point( 59,  0 ),
		new Point(  0,  7 ),
		new Point( 59, 52 ),
		new Point(  0, 59 ),
		new Point( 52, 59 )
	]*/
	this.bigJohnnyCorners = [
		new Point(  6,  0 ),
		new Point( 60,  0 ),
		new Point(  0,  6 ),
		new Point( 59, 54 ),
		new Point(  0, 61 ),
		new Point( 54, 59 )
	]
};

Headsman.prototype = {
	updateCorners: function(_x,_y) {
		for (var i=0;i<this.bigJohnnyCorners.length;i++) {
			this.bigJohnnyCorners[i].update(_x,_y);
		}
		
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
				console.log('WOW -> Point('+i+') x=' + point.x + ' y=' + point.y + ' (' + p[0] + ',' + p[1] + ',' + p[2] + ') == ' + hex + ' ? ' + wallColor);
			}
		}
	}
};