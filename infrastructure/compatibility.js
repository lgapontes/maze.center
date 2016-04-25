var useragent 	= require('useragent');

/* Add features in useragent */
require('useragent/features');

exports.check = function(req, callback) {
	var agent = useragent.parse(req.headers['user-agent']);		
		
	if ( useragent.is(req.headers['user-agent']).chrome ) {
		if (!agent.satisfies('>=49')) {
			callback(false);
		}
	}
	
	callback(true);
};