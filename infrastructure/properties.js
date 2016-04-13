var propertiesReader = require('properties-reader');

var properties = propertiesReader('properties/dsv.properties');

exports.get = function() {
	return properties;
};