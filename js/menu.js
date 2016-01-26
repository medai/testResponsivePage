$(document).ready(function(){ 
	var touch = $('#touch-menu');
	var menu 	= $('.menu');

	$(touch).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});
	
	$(window).resize(function(){
		var w = $(window).width();
		if(w > 767 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});
});


$(document).ready(function(){ 
	var i = 0;
	while (i < 12) {
		$("#content").append("<div class='col-lg-3 col-md-4 col-sm-6 col-xs-7 col-xs-offset-2 col-sm-offset-0' class='teapot_lemon' style='text-align: center'><img src='images/teapot.jpg'/><p>Teapot</p><p>200 USD</p>");
		i++;
	}
});


$(document).ready(function(){ 
	var i = 0;
	while (i < 10) {
		$("#content_lem").append("<div class='col-lg-3 col-md-4 col-sm-6 col-xs-7 col-xs-offset-2 col-sm-offset-0' class='teapot_lemon' style='text-align: center'><img src='images/lemon.jpg'/><p>Teapot</p><p>200 USD</p>");
		i++;
	}
});
