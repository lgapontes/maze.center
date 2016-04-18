function getNewBuilding(level,callback) {
	jQuery.ajax({
		url: "/restfull/building/new/" + level,
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

function getBuilding(externalCode,callback) {
	jQuery.ajax({
		url: "/restfull/building/get/" + externalCode,
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