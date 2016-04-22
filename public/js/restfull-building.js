function getBuilding(callback) {
		
	var param = parseInt(getUrlParameter('level')) || 1;
	var method = "PUT";
	
	var code = getUrlParameter('code');
	if (code) {
		method = "GET";
		param = code;
	}
	
	jQuery.ajax({
		url: "/rest/map/" + param,
		type: method,

		contentType: 'application/json; charset=utf-8',
		success: function(resultData) {			
			if (resultData.error === undefined) {
				callback(null,resultData);			
			} else {				
				console.log(resultData.error);
				window.location.href = 
					'http://' +
					resultData.settings.domain + 
					':' + 
					resultData.settings.port + 
					'/error.html?msg=' +
					resultData.error;
			}			
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