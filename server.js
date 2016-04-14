var logger   	= require('./infrastructure/logger').get(),	
	building 	= require('./services/building'),
	properties 	= require('./infrastructure/properties').get(),
	http 		= require('http'),
	path 		= require('path'),
	express 	= require('express');

/* Catch uncaught exception */
process.on('uncaughtException', (err) => {	
	logger.error('Caught global exception: ' + err);
});

var PORT = properties.get('server.port');

/* Create app express */
var app = express();

/* Setup path of static files */
app.use(express.static(path.join(__dirname, 'public')));

/* Create http server */
var server = http.createServer(app);

/* URLs */
app.get('/restfull/places', building.getPlaces);

server.listen(PORT, function(error) {
	if (error) {
		logger.error(error);
	} else {
		logger.info('Express server listening on port ' + PORT);
	}	
});