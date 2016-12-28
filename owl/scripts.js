$(function () {

	var owls = $(".owl-carousel");

	$.each(owls, function(i, owl) {
		var $owl = $(owl);

		var owlDotCustom = "#owl-custom-dots-" + i;
		$owl.owlCarousel({
			autoplay: true,
			autoplayTimeout: 3400,
			autoplayHoverPause: false,
			autoplaySpeed: 800,
			center: true,
			dotsSpeed: 800,
			dotsContainer: owlDotCustom,
			items: 1,
			loop: true,
			margin: 10
		});
	});

	setTimeout(function () {
		owls.trigger("refresh.owl.carousel");
		console.log("500");
	}, 500);
	setTimeout(function () {
		owls.trigger("refresh.owl.carousel");
		console.log("2000");
	}, 2000);
	setTimeout(function () {
		owls.trigger("refresh.owl.carousel");
		console.log("10000");
	}, 10000);
});