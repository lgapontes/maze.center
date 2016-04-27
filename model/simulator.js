var properties 	= require('../infrastructure/properties').get(),
	axis		= require('./enum').getAxis(),
	alignments	= require('./enum').getAlignments(),
	types		= require('./enum').getTypes(),
	block 		= parseInt(properties.get('graphics.block'));

var staticFirstBlockPosition = {
	x: 1000,
	y: 1000
};
	
function Link(_parent, _axis) {
	this.parent = _parent;
	this.next = undefined;
	this.axis = _axis;
};
	
/*
 *               
 *                   linkable.north
 *			        _______|______
 *			       |              |
 *			       |              |
 *	linkable.west -|    Block     |- linkable.east
 *			       |              |
 *			       |______________|
 *                         |
 *                   linkable.south
 *
 */

function Block(_number,_x,_y) {
	this.placeNumber = _number;
	this.x = _x;
	this.y = _y;
	this.linkable = {
		north: false,
		east: false,
		south: false,
		west: false
	};
	this.links = [];
};

Block.prototype = {
	checkCollision: function(_block) {
		if ( (this.x === _block.x) && (this.y === _block.y) ) {
			return true;
		}
		return false;
	},
	isParentBlock: function(_neighbor) {
		if (_neighbor.neighbor.parent === this.placeNumber) {
			return true;
		}
		return false;
	}
};
	
function BlockSet(_place,_neighbor,_parentBlock) {
	this.blocks = this.getBlocks(_place,_neighbor,_parentBlock);
};

BlockSet.prototype = {
	checkCollision: function(_blockSet) {
		for (var i=0; i<this.blocks.length; i++) {
			for (var j=0; j<_blockSet.length; j++) {
				if ( this.blocks[i].checkCollision( _blockSet[j] ) ) {
					return true;
				}
			}
		}
		return false;
	},
	
	getIndexParentBlock: function(_neighbor) {
		for (var i=0; i<this.blocks.length; i++) {
			if ( this.blocks[i].isParentBlock(_neighbor) ) {
				return i;
			}
		}
		return -1;
	},
	
	/* private */
	getBlocks: function(_place,_neighbor,_parentBlock) {
		
		var blocks = this.getBlocksBySize(_place,_neighbor,_parentBlock);
		
		/*
		 *	To be linkable, the statements below must be true:
		 *	- The alignment of this place do not be 'center';
		 *	- The door between parent and this place must have alignment 'center';
		 *	- The linkable axis must be different from the axis of the door between parent and this place
		 *
		*/
		blocks.forEach(function(block){
			if (
					(_place.alignment !== alignments.center) &&
					(_neighbor.door.alignment === alignments.center)
				) {
					if (_neighbor.axis === axis.north) {
						block.linkable.east = true;
						block.linkable.south = true;
						block.linkable.west = true;
					} else if (_neighbor.axis === axis.east) {
						block.linkable.north = true;
						block.linkable.south = true;
						block.linkable.west = true;
					} else if (_neighbor.axis === axis.south) {
						block.linkable.north = true;
						block.linkable.east = true;
						block.linkable.west = true;
					} else if (_neighbor.axis === axis.west) {
						block.linkable.north = true;
						block.linkable.east = true;
						block.linkable.south = true;
					}					
			}
		});
		
		return blocks;
		
	},
	
	/* private */
	getBlocksBySize: function(_place,_neighbor,_parentBlock) {
		
		var numberOfWidthBlocks = 0;
		var numberOfHeightBlocks = 0;
		
		if (_place.type === types.room) {
			/* Room */
			numberOfWidthBlocks = parseInt( _place.size.width / block );
			numberOfHeightBlocks  = parseInt( _place.size.height / block );
		} else {
			/* Tower */
		}
		
		var blocks = [];
		
		/* Data to new blocks */
		var parentLink = this.getParentLink(_parentBlock,_neighbor);
		var nextPosition = this.calculateNextBlockPosition(_parentBlock,parentLink);
		var firstBlockPosition = this.calculateFirstBlockPosition(
			_place,
			_neighbor,
			nextPosition,
			numberOfWidthBlocks,
			numberOfHeightBlocks
		);
		
		for (var w=0;w<numberOfWidthBlocks;w++) {
			for (var h=0;h<numberOfHeightBlocks;h++) {
				
				var block;
				
				if (_parentBlock === undefined) {
					block = new Block(
						_place.number,
						staticFirstBlockPosition.x,
						staticFirstBlockPosition.y
					);
				} else {
					block = new Block(
						_place.number,
						firstBlockPosition.x + w,
						firstBlockPosition.y + h
					);
				}
				
				blocks.push(block);
			}
		}
		
		return blocks;
	},
	
	/* private */
	getParentLink: function(_parentBlock,_neighbor) {
		var link = undefined;
		
		if (_parentBlock) {
			for(var i=0; i<_parentBlock.links.length; i++) {
				if (_parentBlock.links[i].axis === _neighbor.axis) {
					link = new Link(_parentBlock, _parentBlock.links[i].axis);
				}
			}
		}
		
		return link;
	},
	
	/* private */
	calculateNextBlockPosition: function(_parentBlock, _parentLink) {		
		var x = staticFirstBlockPosition.x;
		var y = staticFirstBlockPosition.y
		
		if (_parentBlock) {
			/* Link next location */
			var parent_x = _parentBlock.x;
			var parent_Y = _parentBlock.y;
			if (_parentLink.axis === axis.north) {
				x = parent_x;
				y = parent_y - 1;
			} else if (_parentLink.axis === axis.east) {
				x = parent_x + 1;
				y = parent_y;
			} else if (_parentLink.axis === axis.south) {
				x = parent_x;
				y = parent_y + 1;
			} else if (_parentLink.axis === axis.west) {
				x = parent_x - 1;
				y = parent_y
			}
		}
		
		return {
			x: x,
			y: y
		};
	},
	
	/* private */
	calculateFirstBlockPosition: function(_place,_neighbor,_nextPosition,_numberOfWidthBlocks,_numberOfHeightBlocks) {
		
		var x;
		var y;
		
		if (_neighbor) {
			
			if (_neighbor.axis === axis.north) {
				if (_place.alignments === alignments.left) {
					x = _nextPosition.x - _numberOfWidthBlocks;
					y = _nextPosition.y - _numberOfHeightBlocks;
				} else if (_place.alignments === alignments.right) {
					x = _nextPosition.x;
					y = _nextPosition.y - _numberOfHeightBlocks;
				} else {
					x = _nextPosition.x - parseInt( _numberOfWidthBlocks / 2 );
					y = _nextPosition.y - _numberOfHeightBlocks;
				}
			} else if (_neighbor.axis === axis.east) {
				if (_place.alignments === alignments.top) {
					x = _nextPosition.x;
					y = _nextPosition.y - _numberOfHeightBlocks;
				} else if (_place.alignments === alignments.bottom) {
					x = _nextPosition.x;
					y = _nextPosition.y;
				} else {
					x = _nextPosition.x;
					y = _nextPosition.y - parseInt( _numberOfHeightBlocks / 2 );
				}
				
			} else if (_neighbor.axis === axis.south) {
				if (_place.alignments === alignments.left) {
					x = _nextPosition.x - _numberOfWidthBlocks;
					y = _nextPosition.y;
				} else if (_place.alignments === alignments.right) {
					x = _nextPosition.x;
					y = _nextPosition.y;
				} else {
					x = _nextPosition.x - parseInt( _numberOfWidthBlocks / 2 );
					y = _nextPosition.y;
				}
			} else if (_neighbor.axis === axis.west) {
				if (_place.alignments === alignments.top) {
					x = _nextPosition.x - _numberOfWidthBlocks;
					y = _nextPosition.y - _numberOfHeightBlocks;
				} else if (_place.alignments === alignments.bottom) {
					x = _nextPosition.x - _numberOfWidthBlocks;
					y = _nextPosition.y;
				} else {
					x = _nextPosition.x - _numberOfWidthBlocks;
					y = _nextPosition.y - parseInt( _numberOfHeightBlocks / 2 );
				}
			}
			
		} else {
			x = _nextPosition.x;
			y = _nextPosition.y;
		}		
		
		return {
			x: x,
			y: y
		};
		
	}
};

function Result(_canAdd,_blockSet) {
	this.canAdd = _canAdd;
	this.blockSet = _blockSet;
};

function Simulator() {
	this.blockSets = [];
};

Simulator.prototype = {
	
	add: function(_place, _neighbor) {		
		var parentBlock = this.getParentBlock(_neighbor);
		var blockSet = new BlockSet(_place,_neighbor,parentBlock);		
		/* Checks collisions */
		if ( ! this.checkCollision(blockSet) ) {			
			this.blockSets.push(blockSet);
			return new Result(true,blockSet);
		}
		
		return new Result(false,undefined);
	},
	
	/* private */
	checkCollision: function(_blockSet) {
		for (var i=0; i<this.blockSets.length; i++) {
			if ( this.blockSets[i].checkCollision(_blockSet) ) {
				return true;
			}
		}
		return false;
	},
	
	/* private */
	getParentBlock: function(_neighbor) {
		for (var i=0; i<this.blockSets.length; i++) {
			var index = this.blockSets[i].getIndexParentBlock(_neighbor);
			if (index > -1) {
				return this.blockSets[i].blocks[index];
			}
		}
		return undefined;
	}
};

exports.getSimulator = function() {
	return Simulator;
};

exports.getBlock = function() {
	return Block;
};