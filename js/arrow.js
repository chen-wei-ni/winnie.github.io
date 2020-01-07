document.addEventListener('DOMContentLoaded', function () {
	$('li.dropdown a').on('hover',function() {
		$(this)
		.find('[data-fa-i2svg]')
		.toggleClass('fas fa-angle-down')
        .toggleClass('fas fa-angle-up');
	});
});