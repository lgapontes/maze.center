var properties 	= require('../infrastructure/properties').get(),
	axis		= require('./enum').getAxis(),
	alignments	= require('./enum').getAlignments(),
	types		= require('./enum').getTypes();
	
var staticFirstBlockPosition = {
	x: 1000,
	y: 1000
};
	
function Link(_parent, _axis) {
	this.parent = _parent;
	this.next = undefined;
	this.axis = _axis;
};

function Block(_number,_x,_y) {
	this.placeNumber = _number;
	this.x = _x;
	this.y = _y;
	
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
		if (_neighbor && _neighbor.neighbor.parent === this.placeNumber) {
			return true;
		}
		return false;
	}
};
	
function BlockSet(_place,_neighbor,_parentBlock, _DEBUG) {
	this.DEBUG = false;
	if (_DEBUG) {
		this.DEBUG = _DEBUG;
	}
	
	this.blocks = [];
	this.parentBlock = undefined;
	this.placeNumber = undefined;
	
	this.setBlocks(_place,_neighbor,_parentBlock);	
};

BlockSet.prototype = {
	checkCollision: function(_blockSet) {
		for (var i=0; i<this.blocks.length; i++) {
			for (var j=0; j<_blockSet.blocks.length; j++) {
				if ( this.blocks[i].checkCollision( _blockSet.blocks[j] ) ) {
					return true;
				}
			}
		}
		return false;
	},
	
	getMinX: function() {
		var minX = 10000;
		this.blocks.forEach(function(block){			
			if (block.x < minX) {
				minX = block.x;
			}
		});
		return minX;
	},
		
	getMinY: function() {
		var minY = 10000;
		this.blocks.forEach(function(block){
			if (block.y < minY) {
				minY = block.y;
			}
		});
		return minY;
	},
	
	getMaxX: function() {
		var maxX = 0;
		this.blocks.forEach(function(block){
			if (block.x > maxX) {
				maxX = block.x;
			}
		});
		return maxX;
	},
	
	getMaxY: function() {
		var maxY = 0;
		this.blocks.forEach(function(block){
			if (block.y > maxY) {
				maxY = block.y;
			}
		});
		return maxY;
	},
	
	getMedX: function() {
		var minX = this.getMinX();
		var maxX = this.getMaxX();		
		
		return parseInt( (minX + maxX) / 2 );
	},
	
	getMedY: function() {
		var minY = this.getMinY();
		var maxY = this.getMaxY();
		
		return parseInt( (minY + maxY) / 2 );
	},
	
	getIndexParentBlock: function(_neighbor) {
		
		if (_neighbor && _neighbor.neighbor.parent === this.placeNumber) {
		
			var x;
			var y;
			
			if (_neighbor.axis === axis.north) {
				if (_neighbor.door.alignment === alignments.left) {					
					x = this.getMinX();
					y = this.getMinY();
				} else if (_neighbor.door.alignment === alignments.right) {					
					x = this.getMaxX();
					y = this.getMinY();
				} else {					
					/* center */				
					x = this.getMedX();
					y = this.getMinY();
				}
				
			} else if (_neighbor.axis === axis.east) {
				if (_neighbor.door.alignment === alignments.top) {
					x = this.getMaxX();
					y = this.getMinY();
				} else if (_neighbor.door.alignment === alignments.bottom) {
					x = this.getMaxX();
					y = this.getMaxY();
				} else {
					/* center */
					x = this.getMaxX();
					y = this.getMedY();
				}
				
			} else if (_neighbor.axis === axis.south) {
				if (_neighbor.door.alignment === alignments.left) {
					x = this.getMinX();
					y = this.getMaxY();
				} else if (_neighbor.door.alignment === alignments.right) {
					x = this.getMaxX();
					y = this.getMaxY();
				} else {
					/* center */
					x = this.getMedX();
					y = this.getMaxY();
				}
				
			} else if (_neighbor.axis === axis.west) {
				if (_neighbor.door.alignment === alignments.top) {
					x = this.getMinX();
					y = this.getMinY();
				} else if (_neighbor.door.alignment === alignments.bottom) {
					x = this.getMinX();
					y = this.getMaxY();
				} else {
					/* center */
					x = this.getMinX();
					y = this.getMedY();
				}
				
			}
			
			/* Search index */
			for (var i=0; i<this.blocks.length; i++) {			
				if (
					(this.blocks[i].x === x) &&
					(this.blocks[i].y === y)
				) {
					return i
				}
			}
			
		}
		
		return -1;
	},
	
	getBlockByPosition: function(_blocks,_x,_y) {		
		
		for (var i=0; i<_blocks.length; i++) {			
			if (
				(_blocks[i].x === _x) &&
				(_blocks[i].y === _y)
			) {
				return _blocks[i];
			}
		}
	},
	
	/* private */
	/*
	 * Defines the blocks according to the size of the place.
	 */
	setBlocks: function(_place,_neighbor,_parentBlock) {
		
		this.blocks = this.getBlocksBySize(_place,_neighbor,_parentBlock);
		
		this.placeNumber = this.blocks[0].placeNumber;
		
		if (this.DEBUG) {
			console.log();			
			console.log('blocks:');
			console.log(this.blocks);
		}
	},
	
	/* private */
	/*
	 * Defines the blocks according to the size of the place.
	 */
	getBlocksBySize: function(_place,_neighbor,_parentBlock) {
		
		var numberOfWidthBlocks = 0;
		var numberOfHeightBlocks = 0;
		var block = properties.get('graphics.block');
		
		if (_place.type === types.room) {
			/* Room */
			
			numberOfWidthBlocks = parseInt( _place.size.width / block );
			numberOfHeightBlocks = parseInt( _place.size.height / block );
			
			/* According to the alignment, you must add blocks. */
			var adjustments = this.addBlocksByAlignment(_place, _parentBlock, _neighbor, numberOfWidthBlocks, numberOfHeightBlocks);
			numberOfWidthBlocks = adjustments.numberOfWidthBlocks;
			numberOfHeightBlocks = adjustments.numberOfHeightBlocks;
			
		} else {
			/* Tower */
			numberOfWidthBlocks = 2;
			numberOfHeightBlocks  = 2;
			
			if ( (_neighbor.axis === axis.north) || (_neighbor.axis === axis.south) ) {
				numberOfWidthBlocks = numberOfWidthBlocks + 1;
				
				if ( (_parentBlock.numberOfBlocks.numberOfWidthBlocks % 2) === 0 ) {
					numberOfWidthBlocks = numberOfWidthBlocks + 1;
				}
				
			} else if ( (_neighbor.axis === axis.east) || (_neighbor.axis === axis.west) ) {
				numberOfHeightBlocks = numberOfHeightBlocks + 1;
				
				if ( (_parentBlock.numberOfBlocks.numberOfHeightBlocks % 2) === 0 ) {
					numberOfHeightBlocks = numberOfHeightBlocks + 1;
				}
			}
		}
		
		var blocks = [];
		
		/* Get link and add in this block */
		var parentLink = undefined;
		var parentLinkIndex = -1;
		if (_neighbor) {
			parentLink = new Link(_parentBlock,_neighbor.axis);
			parentLinkIndex = _parentBlock.links.length;
			
			/* Add link in parent block */
			_parentBlock.links.push(parentLink);
		}
		
		/*
		 * Get the next block from the link.
		 */
		var nextPosition = this.calculateNextBlockPosition(_parentBlock,parentLink);
		
		/*
		 * Get the position of the first block.
		 */
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
						staticFirstBlockPosition.x + w,
						staticFirstBlockPosition.y + h
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
		
		if (_parentBlock) {			
			/* Get link by position */
			var linkBlock = this.getBlockByPosition(blocks,nextPosition.x,nextPosition.y);
			
			/* Set next block in link */
			_parentBlock.links[ parentLinkIndex ].next = linkBlock;
			
			/* Set the same link in next block */
			linkBlock.links.push(_parentBlock.links[ parentLinkIndex ]);
			
			/* Set parentBlock */
			this.parentBlock = _parentBlock;
		}
		
		if (this.DEBUG) {
			console.log();
			console.log('BlockSet.getBlocksBySize');
			console.log('numberOfWidthBlocks: ' + numberOfWidthBlocks);
			console.log('numberOfHeightBlocks: ' + numberOfHeightBlocks);			
			console.log('this.parentBlock:');
			console.log(this.parentBlock);
			console.log('parentLink:');
			console.log(parentLink);
			console.log('nextPosition:');
			console.log(nextPosition);
			console.log('firstBlockPosition:');
			console.log(firstBlockPosition);			
		}
		
		return blocks;
	},
	
	/* private */
	/*
	 * Depending on the alignment of port or place, you may need to add blocks in the count.	 
	 */
	addBlocksByAlignment: function(_place, _parentBlock, _neighbor, _numberOfWidthBlocks, _numberOfHeightBlocks) {
		var numberOfWidthBlocks = _numberOfWidthBlocks;
		var numberOfHeightBlocks = _numberOfHeightBlocks;
		
		if (this.DEBUG && _parentBlock) {
			console.log();
			console.log('BlockSet.addBlocksByAlignment');
			console.log('_parentBlock.numberOfBlocks.numberOfWidthBlocks: ' + _parentBlock.numberOfBlocks.numberOfWidthBlocks);
			console.log('(_parentBlock.numberOfBlocks.numberOfWidthBlocks % 2): ' + (_parentBlock.numberOfBlocks.numberOfWidthBlocks % 2));
			console.log();
			console.log('_numberOfWidthBlocks: ' + _numberOfWidthBlocks);
			console.log('(_numberOfWidthBlocks % 2): ' + (_numberOfWidthBlocks % 2));			
			console.log();
			console.log('_parentBlock.numberOfBlocks.numberOfHeightBlocks: ' + _parentBlock.numberOfBlocks.numberOfHeightBlocks);
			console.log('(_parentBlock.numberOfBlocks.numberOfHeightBlocks % 2): ' + (_parentBlock.numberOfBlocks.numberOfHeightBlocks % 2));			
			console.log();
			console.log('_numberOfHeightBlocks: ' + _numberOfHeightBlocks);
			console.log('(_numberOfHeightBlocks % 2): ' + (_numberOfHeightBlocks % 2));			
		}
		
		var changed = false;
		
		if (_neighbor) {
			if (_neighbor.door.alignment === alignments.center) {
				
				/*
				 * Rule that checks if the places have a number of odd or even blocks
				 */
				if ( ( (_neighbor.axis === axis.north) || _neighbor.axis === axis.south ) ) {				
					if ( (_parentBlock.numberOfBlocks.numberOfWidthBlocks % 2) !== (_numberOfWidthBlocks % 2) ) {					
						numberOfWidthBlocks = numberOfWidthBlocks + 1;
						changed = true;
					}				
				} else if ( ( (_neighbor.axis === axis.east) || _neighbor.axis === axis.west ) ) {				
					if ( (_parentBlock.numberOfBlocks.numberOfHeightBlocks % 2) !== (_numberOfHeightBlocks % 2) ) {
						numberOfHeightBlocks = numberOfHeightBlocks + 1;
						changed = true;
					}				
				}
				
				/*
				 * Rule that checks the alignment of the place needs size adjustment
				 */
				if ( !changed ) {
					if ( (_place.alignment === alignments.left) || (_place.alignment === alignments.right) ) {
						if (_numberOfWidthBlocks > 1) {
							numberOfWidthBlocks = numberOfWidthBlocks + 1; 
						}
					} else if ( (_place.alignment === alignments.top) || (_place.alignment === alignments.bottom) ) {
						if (_numberOfHeightBlocks > 1) {
							numberOfHeightBlocks = numberOfHeightBlocks + 1;
						}						
					}
				}
			} else if ( (_neighbor.door.alignment === alignments.left) || (_neighbor.door.alignment === alignments.right) ) {
				
				/*
				 * Rule that checks the alignment of the place needs size adjustment
				 */
				if ( !changed ) {
					if (_place.alignment === alignments.center) {
						if (_numberOfWidthBlocks > 1) {
							numberOfWidthBlocks = numberOfWidthBlocks + 1; 
						}
					}
				}
				
			} else if ( (_neighbor.door.alignment === alignments.top) || (_neighbor.door.alignment === alignments.bottom) ) {
				
				/*
				 * Rule that checks the alignment of the place needs size adjustment
				 */
				if ( !changed ) {
					if (_place.alignment === alignments.center) {
						if (_numberOfHeightBlocks > 1) {
							numberOfHeightBlocks = numberOfHeightBlocks + 1;
						}
					}
				}
				
			}
		}
		
		if (this.DEBUG) {
			console.log();
			console.log('BlockSet.addBlocksByAlignment - part 2');			
			console.log('numberOfWidthBlocks: ' + numberOfWidthBlocks);			
			console.log('numberOfHeightBlocks: ' + numberOfHeightBlocks);
		}
		
		return {
			numberOfWidthBlocks: numberOfWidthBlocks,
			numberOfHeightBlocks: numberOfHeightBlocks
		};
	},
	
	/* private */
	calculateNextBlockPosition: function(_parentBlock, _parentLink) {		
		var x = staticFirstBlockPosition.x;
		var y = staticFirstBlockPosition.y
		
		if (_parentBlock && _parentLink) {
			/* Link next location */
			var parent_x = _parentBlock.x;
			var parent_y = _parentBlock.y;
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
				y = parent_y;				
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
		var changed = false;
		
		if (_neighbor) {
			
			if (_neighbor.axis === axis.north) {
				if (_place.alignment === alignments.left) {
					x = _nextPosition.x - _numberOfWidthBlocks + 1;
					y = _nextPosition.y - _numberOfHeightBlocks + 1;					
				} else if (_place.alignment === alignments.right) {
					x = _nextPosition.x;
					y = _nextPosition.y - _numberOfHeightBlocks + 1;
				} else {
					x = _nextPosition.x - parseInt( _numberOfWidthBlocks / 2 );
					y = _nextPosition.y - _numberOfHeightBlocks + 1;
					
					if ( (_numberOfWidthBlocks % 2) === 0 ) {
						x = x + 1;
						changed = true;
					}
					
				}				
			} else if (_neighbor.axis === axis.east) {
				if (_place.alignment === alignments.top) {
					x = _nextPosition.x;
					y = _nextPosition.y - _numberOfHeightBlocks + 1;
				} else if (_place.alignment === alignments.bottom) {
					x = _nextPosition.x;
					y = _nextPosition.y;
				} else {
					x = _nextPosition.x;
					y = _nextPosition.y - parseInt( _numberOfHeightBlocks / 2 );
					
					if ( (_numberOfHeightBlocks % 2) === 0 ) {
						y = y + 1;
						changed = true;
					}
					
				}
				
			} else if (_neighbor.axis === axis.south) {
				if (_place.alignment === alignments.left) {
					x = _nextPosition.x - _numberOfWidthBlocks + 1;
					y = _nextPosition.y;
				} else if (_place.alignment === alignments.right) {
					x = _nextPosition.x;
					y = _nextPosition.y;
				} else {
					x = _nextPosition.x - parseInt( _numberOfWidthBlocks / 2 );
					y = _nextPosition.y;
					
					if ( (_numberOfWidthBlocks % 2) === 0 ) {
						x = x + 1;
						changed = true;
					}
					
				}				
			} else if (_neighbor.axis === axis.west) {
				if (_place.alignment === alignments.top) {
					x = _nextPosition.x - _numberOfWidthBlocks + 1;
					y = _nextPosition.y - _numberOfHeightBlocks + 1;
				} else if (_place.alignment === alignments.bottom) {
					x = _nextPosition.x - _numberOfWidthBlocks + 1;
					y = _nextPosition.y;
				} else {
					x = _nextPosition.x - _numberOfWidthBlocks + 1;
					y = _nextPosition.y - parseInt( _numberOfHeightBlocks / 2 );
					
					if ( (_numberOfHeightBlocks % 2) === 0 ) {
						y = y + 1;
						changed = true;
					}
					
				}
			}
			
			if ( !changed ) {
				if (_neighbor.door.alignment === alignments.center) {	
					if ( (_place.alignment === alignments.left) ) {
						if (_numberOfWidthBlocks > 1) {
							x = x + 1; 
						}
					} else if ( (_place.alignment === alignments.top) ) {
						if (_numberOfHeightBlocks > 1) {
							y = y + 1;
						}						
					}
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
	
	/*
	 * Create a new set of blocks in simulator.
	 * _place: Place to create the Blockset;
	 * _neighbor: Neighbor between parent and the this place.
	 */
	add: function(_place, _neighbor, _DEBUG) {
		
		var DEBUG = false;
		if (_DEBUG) {
			DEBUG = _DEBUG;
		}
		
		var parentBlock = this.getParentBlock(_neighbor,DEBUG);
		
		if (DEBUG) {
			console.log();
			console.log('Simulator.add');			
			console.log('_place:');
			console.log(_place);
			console.log('_neighbor:');
			console.log(_neighbor);			
			console.log('parentBlock:');
			console.log(parentBlock);
		}
		
		var blockSet = new BlockSet(_place,_neighbor,parentBlock, DEBUG);
		
		/* Checks collisions */
		if ( ! this.checkCollision(blockSet) ) {
			
			/* There was no collision */
			this.blockSets.push(blockSet);
			return new Result(true,blockSet);
			
		} else {
			/* If there was bump, you should clean the parentBlock */
			this.blockSets.forEach(function(entryBlockSet){
				if (entryBlockSet.parentBlock) {
					var parentPlaceNumber = entryBlockSet.parentBlock.placeNumber;
					
					if (parentPlaceNumber === _neighbor.neighbor.parent) {
						entryBlockSet.blocks.forEach(function(block){
							
							if (
								block.placeNumber === parentPlaceNumber &&
								block.x === parentBlock.x &&
								block.y === parentBlock.y
							) {
								
								/* Search the link added */
								var indexLink = -1;
								for (var i=0; i<block.links.length; i++) {
									
									if (
										block.links[i].parent === parentPlaceNumber &&
										block.links[i].next === _place.number &&
										block.links[i].axis === _neighbor.axis
									) {
										indexLink = i;
									}					
									
								}
								
								/* Delete the link */
								block.links[ indexLink ] = undefined;
								
								if (DEBUG) {
									console.log();
									console.log('Simulator.add - part 2 - Collision!');			
									console.log('entryBlockSet:');
									console.log(entryBlockSet);
									console.log('block:');
									console.log(block);			
									console.log('block.links[i]:');
									console.log(block.links[i]);
								}
							}
							
						});
					}	
					
				}				
			});
		
			/* Returns result false */
			return new Result(false,undefined);
		}
	},
	
	/*
	 * Get block by position
	 */
	getBlockByPosition: function(_x, _y) {
		for(var i=0; i<this.blockSets.length; i++) {
			var blockSet = this.blockSets[i];
			
			for (var j=0; j<blockSet.blocks.length; j++) {
				var block = blockSet.blocks[j];
				
				if ( (block.x === _x) && (block.y === _y) ) {
					return block;
				}
			}
			
		}
		return undefined;
	},
	
	/* private */
	/*
	 * Get number of width and height blocks by parent block
	 */
	setNumberOfBlocks: function(_parentBlock,DEBUG) {
		var numberOfWidthBlocks = 0;
		var numberOfHeightBlocks = 0;
		
		if (_parentBlock) {
			this.blockSets.forEach(function(blockSet){
				if (blockSet.placeNumber === _parentBlock.placeNumber) {
	
					var minX = blockSet.getMinX();
					var minY = blockSet.getMinY();
					var maxX = blockSet.getMaxX();
					var maxY = blockSet.getMaxY();
					
					var numberOfWidthBlocks = maxX - minX + 1;
					var numberOfHeightBlocks = maxY - minY + 1;
					
					_parentBlock.numberOfBlocks = {
						numberOfWidthBlocks: numberOfWidthBlocks,
						numberOfHeightBlocks: numberOfHeightBlocks
					};
					
					if (DEBUG) {
						console.log();						
						console.log('Simulator.setNumberOfBlocks');
						console.log('minX: ' + minX);
						console.log('minY: ' + minY);
						console.log('maxX: ' + maxX);
						console.log('maxY: ' + maxY);
						console.log('numberOfWidthBlocks: ' + numberOfWidthBlocks);
						console.log('numberOfHeightBlocks: ' + numberOfHeightBlocks);
					}
					
				}
			});
		}
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
	/*
	 * Returns the parent block associated with neighbor.		
	 */
	getParentBlock: function(_neighbor,DEBUG) {
		for (var i=0; i<this.blockSets.length; i++) {
			var index = this.blockSets[i].getIndexParentBlock(_neighbor);
			if (index > -1) {				
				var parentBlock = this.blockSets[i].blocks[index];
				this.setNumberOfBlocks(parentBlock,DEBUG);
				return parentBlock;
			}
		}
		return undefined;
	},

	/* Print matrix of blocks - to DEBUG */
	printMatrix: function() {
	
		console.log('Simulator.printMatrix');
		
		var min = 990;
		var max = 1010;	
			
		for (var y=min; y<= max; y++) {
			var line = '';
			for (var x=min; x<= max; x++) {			
				
				var block = this.getBlockByPosition(x,y);
				
				if (block) {
					if ( block.placeNumber < 10 ) {
						line = line + '0' + block.placeNumber + ' ';
					} else {
						line = line + block.placeNumber + ' ';
					}
				} else {
					line = line + '__ ';
				}
						
			}
			console.log( line );
			line = '';
		}	
	}
	
};

exports.getSimulator = function() {
	return Simulator;
};

exports.getBlock = function() {
	return Block;
};