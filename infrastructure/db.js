var logger 	 	= require('./logger').get(),
	mongoose 	= require("mongoose"),
	properties 	= require('../infrastructure/properties').get(),
	secret 		= require('../infrastructure/properties').secret();

function getConnectionString() {
	var mongoose_user = properties.get('mongoose.user');
	var mongoose_password = secret.get('mongoose.password');
	var mongoose_server = properties.get('mongoose.server');
	var mongoose_port = properties.get('mongoose.port');
	var mongoose_database = properties.get('mongoose.database');
	
	return 'mongodb://' +
		mongoose_user + ':' +
		mongoose_password + '@' +
		mongoose_server + ':' +
		mongoose_port + '/' +
		mongoose_database;
};
	
var options = { server: { socketOptions: { keepAlive: 1 } } };

/* Connect database */
mongoose.connect(getConnectionString(), options);

/* Connected handler */
mongoose.connection.on('connected', function (err) {
	var status = undefined;
	if (err) {
		status = 'error: ' + err;
	} else {
		status = 'success';		
	}
	logger.info("Connected to DB: " + status);
});

/* Error handler */
mongoose.connection.on('error', function (err) {
	logger.error(err);
});

/* When the connection is disconnected */
mongoose.connection.on('disconnected', function () {  
	logger.info('Mongoose default connection disconnected'); 
});

/* If the Node process ends, close the Mongoose connection */
process.on('SIGINT', function() {  
	mongoose.connection.close(function () { 
		logger.info('Mongoose default connection disconnected through app termination');
		process.exit(0); 
	}); 
});

exports.get = function(){
	return mongoose;
};