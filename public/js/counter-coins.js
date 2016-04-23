var data = [
	{
		stars: 5,
		secondsPerPlaces: 2,
		touchDiv: 5
	},
	{
		stars: 4,
		secondsPerPlaces: 3,
		touchDiv: 4
	},
	{
		stars: 3,
		secondsPerPlaces: 4,
		touchDiv: 3
	},
	{
		stars: 2,
		secondsPerPlaces: 5,
		touchDiv: 2
	},
	{
		stars: 1,
		secondsPerPlaces: 6,
		touchDiv: 1
	}
];

function CounterCoins(_level) {
	this.level = _level;
	this.start;	
	this.end;
	this.diff = 0;
	this.countTouch = 0;
	
	this.stars = 0;
	this.coins = 0;
	
	this.alreadyStarted = false;
	this.alreadyFinish = false;
};

CounterCoins.prototype = {
	touch: function() {
		if (!this.alreadyStarted) {
			this.alreadyStarted = true;
			this.start = +new Date(); // get unix-timestamp in milliseconds			
		}		
		this.countTouch = this.countTouch + 1;		
	},
	stop: function() {
		this.end = +new Date(); // get unix-timestamp in milliseconds		
		this.diff = this.end - this.start; // time difference in milliseconds		
	},
	getCoins: function(_stars) {
		var coins = (_stars * this.level) - this.countTouch;
		return (coins > 0) ? coins : 0;
	},
	getStars: function() {		
		var places = this.level + 1;
		
		for(var i=0;i<data.length;i++) {
			
			/* First criterion: number of seconds per place */
			var firstCriterion = false;
			var secondsPerPlaces = (this.diff / 1000) / places;			
			if (secondsPerPlaces <= data[i].secondsPerPlaces) {
				firstCriterion = true;
			}
			
			/* Second criterion: number of touchs */
			var secondCriterion = false;
			var result = (this.level / data[i].touchDiv) + 1;			
			if (this.countTouch <= result) {
				secondCriterion = true;
			}
	
			if (firstCriterion && secondCriterion) {
				return data[i].stars;
			}
		}
		
		/* Zero stars */
		return 0;
	},
	get: function(_won) {
	
		if (_won && (this.alreadyFinish === false)) {			
			this.alreadyFinish = true;
			this.stars = this.getStars();
			this.coins = this.getCoins(this.stars);
		}
		
		return {
			stars: this.stars,
			coins: this.coins,
			time: this.diff,
			touchs: this.countTouch
		};
	}
};