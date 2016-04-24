/* Tile */
function Tile(_img, _start_x, _start_y, _width, _height) {
	this.img = _img;
	this.start_x = _start_x;
	this.start_y = _start_y;
	this.width = _width;
	this.height = _height;
};

Tile.prototype = {
	draw: function(_x,_y) {
		ctx.drawImage(
			this.img,
			this.start_x,
			this.start_y,
			this.width,
			this.height,
			_x,
			_y,
			this.width,
			this.height
		);										
	}
};

/* Sprite */
function Sprite(_img, _start_x, _start_y, _width, _height, _qtde, _delay) {	
	Tile.call(this, _img, _start_x, _start_y, _width, _height);
	this.qtde = _qtde;
	this.countQtde = 0;
	this.delay = _delay;
	this.countDelay = 0;	
};

Tile.prototype = {
	draw: function(_x,_y) {
		if (this.countDelay < this.delay) {
			this.countDelay = this.countDelay + 1;
			this.drawTile(_x,_y);
		} else {
			this.countDelay = 0;						
			this.drawTile(_x,_y);			
			this.countQtde = this.countQtde + 1;
			this.countQtde = this.countQtde % this.qtde;
		}
		
	},
	drawTile: function(_x,_y) {
		ctx.drawImage(
			this.img,
			this.start_x + (this.countQtde * this.width),
			this.start_y,
			this.width,
			this.height,
			_x,
			_y,
			this.width,
			this.height
		);
	}
};

extend(Tile, Sprite);