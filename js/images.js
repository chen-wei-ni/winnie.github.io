
$('document').ready(function() {
	$('#mywork img').hover(function() {
		$(this).animate({opacity: 0},'fast');
	}, function() {
		$(this).animate({opacity: 0.7}, 'fast');
	});
});