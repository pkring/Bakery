$(function() {

	$(".hamburger").on("click", function () {
		$(this).toggleClass("is-active");
		$(".hidden-wrap").fadeToggle();
	});

});
