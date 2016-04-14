var logger = require('./infrastructure/logger').get();
var db  = require('./infrastructure/db').get();

/* Catch uncaught exception */
process.on('uncaughtException', (err) => {	
	logger.error('Caught global exception: ${err}');
});