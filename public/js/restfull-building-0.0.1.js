function getBuilding(callback) {
	
	var page = 'new';
	var paramenter = 1;
	if (getUrlParameter('page') === 'get') {
		page = 'get';
		paramenter = getUrlParameter('code');
	} else {
		page = 'new';
		paramenter = getUrlParameter('level');
	}
	
	jQuery.ajax({
		url: "/restfull/building/" + page + "/" + paramenter,
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

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};