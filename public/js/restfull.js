function getBuilding(callback) {
		
	//var Protocol = window.protocol.get();
		
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
		success: function(protocol) {
			
			if (protocol.message === undefined) {
				callback(null,protocol);			
			} else {				
				var url = 'http://' +
					protocol.settings.domain + ":" + 
					protocol.settings.port + "/" + 
					protocol.message.page + "?error=" +
					protocol.message.index;				
				window.location.href = url;				
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