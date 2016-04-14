var winston = require('winston'),
	moment  = require('moment-timezone'),
	properties = require('../infrastructure/properties').get();

var timezone = properties.get('logger.timezone');
var filepath = properties.get('logger.filepath');

function getTimestamp() {
	return moment().tz(timezone).format('YYYY-MM-DD_HH-mm-ss');
};
	
function getLogFileName() {
		return 'server_' + getTimestamp() + '.log';
};
	
var logger = new (winston.Logger)({
	transports: [
		new winston.transports.Console({			
			'colorize':true,
			'level':'info'
		}),
		new winston.transports.File({
			'timestamp':function(){ return getTimestamp(); },
			'level':'info',
			'filename':filepath + getLogFileName(),
			'maxsize':51200,
			'json':false
		})
    ]
});

exports.get = function() {
	return logger;
};