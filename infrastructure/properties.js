var propertiesReader = require('properties-reader');

var environment = 'dsv';
if (process.argv[2] === 'prd') {
	environment = 'prd';
}

var properties = propertiesReader('properties/' + environment + '.properties');
var password_filepath = properties.get('mongoose.password.filepath');
var secret = propertiesReader(password_filepath);

exports.get = function() {
	return properties;
};

exports.secret = function() {
	return secret;
};