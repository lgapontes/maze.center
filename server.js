var logger = require('./infrastructure/logger').get();

/* Catch uncaught exception */
process.on('uncaughtException', (err) => {	
	logger.error('Caught global exception: ${err}');
});

logger.info('ok');