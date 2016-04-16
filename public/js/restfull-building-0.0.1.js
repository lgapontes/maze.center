function getBuilding(level,callback) {
	jQuery.ajax({
		url: "/restfull/building/" + level,
		type: "GET",

		contentType: 'application/json; charset=utf-8',
		success: function(resultData) {
			callback(null,resultData);			
		},
		error : function(jqXHR, textStatus, errorThrown) {
			callback(errorThrown);
		},

		timeout: 120000,
	});
};