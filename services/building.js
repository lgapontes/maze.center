var logger  		= require('../infrastructure/logger').get(),
	mongoose		= require('../infrastructure/db').get(),
	Room 			= require('../model/building').getRoom(),
	Tower 			= require('../model/building').getTower(),
	placeFactory	= require('../model/factory').getPlaceFactory();

exports.createRoom = function(req, res) {
		
	placeFactory.createRoom(0).save(function (error, data) {
		if (error) {
			logger.error(error);
		} else {
			res.send(data);	
		}
	});
	
};

exports.getPlaces = function(req, res) {		
	var placeCollection = mongoose.connection.collections['placeCollection'];
			
	placeCollection.find().toArray(function(error, results) {
		if (error) {
			logger.error(error);
		} else {
			res.send(results);
		}
	});	
};