function getPlaces(callback) {
	jQuery.ajax({
		url: "/restfull/places",
		type: "GET",

		contentType: 'application/json; charset=utf-8',
		success: function(resultData) {
			callback(null,resultData);			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			callback(error);
		},

		timeout: 120000,
	});
};