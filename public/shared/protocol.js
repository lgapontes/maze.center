(function(exports) {

	var messages = [
		{
			index: 0,
			describe: 'An internal error occurred on the server... sorry!',
			page: 'error.html'
		},
		{
			index: 1,
			describe: 'The consulted map was not found.',
			page: 'error.html'
		},
		{
			index: 2,
			describe: 'Error getting the map.',
			page: 'error.html'
		},
		{
			index: 3,
			describe: 'Error creating test map.',
			page: 'error.html'
		},
		{
			index: 4,
			describe: 'Incompatible browser.',
			page: 'compatibility.html'
		}
	];
	
    function Protocol(_settings) {
		this.settings = _settings;
		this.object = undefined;
		this.message = undefined;
	};
	
	Protocol.prototype = {
		setObject: function(_object) {
			this.object = _object;
		},
		setMessage: function(_index) {
			this.message = messages[ _index ];
		}
	};
	
    exports.get = function() {
		return Protocol;
    };
	
	exports.messages = function() {
		return messages;
    };

})((typeof process === 'undefined' || !process.versions)
   ? window.protocol = window.protocol || {}
   : exports);