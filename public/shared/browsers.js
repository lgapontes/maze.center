(function(exports) {

	var browsers = {
		ie: '11',
		firefox: '44',
		chrome: '49',
		safari: '8',
		opera_mini: '8',
		opera: '36',
		mobile_safari: '9',
		android: '47',
		edge: '13'
	};
	
	exports.get = function() {
		return browsers;
    };

})((typeof process === 'undefined' || !process.versions)
   ? window.browsers = window.browsers || {}
   : exports);