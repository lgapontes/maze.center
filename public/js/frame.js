var modal = (function(){
	var 
	method = {},
	$overlay,
	$modal,
	$content;
	//$close;

	// Center the modal in the viewport
	method.center = function () {
		var top, left;

		top = Math.max($(window).height() - $modal.outerHeight(), 0) / 2;
		left = Math.max($(window).width() - $modal.outerWidth(), 0) / 2;

		$modal.css({
			top:top + $(window).scrollTop(), 
			left:left + $(window).scrollLeft()
		});
	};

	// Open the modal
	method.open = function (settings) {
		$content.empty().append(settings.content);

		$modal.css({
			width: settings.width || 'auto', 
			height: settings.height || 'auto'
		});

		method.center();
		$(window).bind('resize.modal', method.center);
		$modal.show();
		$overlay.show();
	};

	// Close the modal	
	method.close = function () {
		$modal.hide();
		$overlay.hide();
		$content.empty();
		$(window).unbind('resize.modal');
	};

	// Generate the HTML and add it to the document
	$overlay = $('<div id="overlay"></div>');
	$modal = $('<div id="modal"></div>');
	$content = $('<div id="content"></div>');
	//$close = $('<a id="close" href="#">close</a>');

	$modal.hide();
	$overlay.hide();
	//$modal.append($content, $close);
	$modal.append($content);

	$(document).ready(function(){
		$('body').append($overlay, $modal);						
	});

	/*
	$close.click(function(e){
		e.preventDefault();
		method.close();
	});
	*/

	return method;
}());

function getUrl() {
	if (settings.port === '80') {
		return 'http://' + settings.domain + '/';
	} else {
		return 'http://' + settings.domain + ':' + settings.port + '/';
	}
};

var again = function() {
	window.location.href = getUrl() + '?code=' + map.externalCode
};

var remake = function() {
	var level = parseInt(map.level);
	window.location.href = getUrl() + '?level=' + level;
};

var next = function() {
	var level = parseInt(map.level) + 1;
	window.location.href = getUrl() + '?level=' + level;
};