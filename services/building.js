var logger  = require('../infrastructure/logger').get(),
	db  	= require('../infrastructure/db').get(),
	Place 	= require('../model/building').getPlace();

exports.getPlaces = function(req, res) {	
	Place.find({},function(error,results){
		if (error) {
			logger.error(error);
		} else {
			//res.send(results);
			res.send([
				{
					name: "Guilherme"
				},
				{
					name: "Laura"
				}
			]);
		}
	});		
};