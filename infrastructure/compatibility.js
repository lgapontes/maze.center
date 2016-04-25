var useragent 	= require('useragent'),
	logger  	= require('./logger').get(),
	browsers	= require('../public/shared/browsers').get();

/* Add features in useragent */
require('useragent/features');

exports.check = function(req, callback) {
	var agent = useragent.parse(req.headers['user-agent']);		
		
	/* IE */
	if ( useragent.is(req.headers['user-agent']).ie ) {
		if (!agent.satisfies('>=' + browsers.ie)) {
			logger.warn('Incompatible browser used: Internet Explorer -> ' + agent.toAgent() );
			callback(false);
		}
	} else
	
	/* Firefox */
	if ( useragent.is(req.headers['user-agent']).firefox ) {
		if (!agent.satisfies('>=' + browsers.firefox)) {
			logger.warn('Incompatible browser used: Firefox -> ' + agent.toAgent() );
			callback(false);
		}
	} else
	
	/* Chrome, Chrome for Android or Edge */
	if ( useragent.is(req.headers['user-agent']).chrome ) {
		
		/* Edge - user-agent of Edge returns Chrome string */
		var browser = agent.toAgent().toLowerCase();
		var substring = "edge";
	
		if (browser.indexOf(substring) > -1) {
			
			/* Edge */
			if (!agent.satisfies('>=' + browsers.edge)) {
				logger.warn('Incompatible browser used: Edge -> ' + agent.toAgent() );
				callback(false);
			}
			
		} else {
			
			/* Chrome */
			if (!agent.satisfies('>=' + browsers.chrome)) {
				logger.warn('Incompatible browser used: Chrome -> ' + agent.toAgent() );
				callback(false);
			}
			
		}
	} else
	
	/* Safari */
	if ( useragent.is(req.headers['user-agent']).safari ) {
		if (!agent.satisfies('>=' + browsers.safari)) {
			logger.warn('Incompatible browser used: Safari -> ' + agent.toAgent() );
			callback(false);
		}
	} else
	
	/* Opera and Opera Mini */
	if ( useragent.is(req.headers['user-agent']).opera ) {
	
		var browser = agent.toAgent().toLowerCase();
		var substring = "mini";
		
		if (browser.indexOf(substring) > -1) {
			/* Mini */
			if (!agent.satisfies('>=' + browsers.opera_mini)) {
				logger.warn('Incompatible browser used: Opera Mini -> ' + agent.toAgent() );
				callback(false);
			}
		} else {
			/* Others */			
			if (!agent.satisfies('>=' + browsers.opera)) {
				logger.warn('Incompatible browser used: Opera -> ' + agent.toAgent() );
				callback(false);
			}
		}
	} else
	
	/* iOS Safari */
	if ( useragent.is(req.headers['user-agent']).mobile_safari ) {
		if (!agent.satisfies('>=' + browsers.mobile_safari)) {
			logger.warn('Incompatible browser used: Safari iOS -> ' + agent.toAgent() );
			callback(false);
		}
	} else
	
	/* Android Browser */
	if ( useragent.is(req.headers['user-agent']).android ) {
		if (!agent.satisfies('>=' + browsers.android)) {
			logger.warn('Incompatible browser used: Android Browser -> ' + agent.toAgent() );
			callback(false);
		}
	}
	
	callback(true);
};