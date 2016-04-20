var propertiesReader = require('properties-reader');

var properties = propertiesReader('properties/prd.properties');
var password_filepath = properties.get('mongoose.password.filepath');
var secret = propertiesReader(password_filepath);

exports.get = function() {
	return properties;
};

exports.secret = function() {
	return secret;
};