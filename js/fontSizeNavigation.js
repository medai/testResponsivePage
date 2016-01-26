function fontSize() {
	var width = 400;
	var fontSize = 10;
	var bodyWidth = $('html').width();
	var multiplier = bodyWidth / width;
	if ($('html').width() >= width) fontSize = Math.floor(fontSize * multiplier);
	$('#navigation').css({fontSize: fontSize+'px'});
}
$(function() { fontSize(); });
$(window).resize(function() { fontSize(); });
