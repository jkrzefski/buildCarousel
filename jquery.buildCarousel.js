$.fn.buildCarousel = function(options) {
	var defaults = {
		carouselID: "carousel_01",
		interval: 3000,
		firstSlide: 1,
		containerWasHidden: false
	}
	var settings = $.extend({}, defaults, options);
	var carouselContainer = $(this);
	var carouselControls = '';
	var images = '';
	var build = '';

	if (!settings.containerWasHidden) {
		carouselContainer.toggleClass("hidden");
	}

	if (carouselContainer.children().length > 1) {
		$.each(carouselContainer.children(), function(index, value) {
			images = $($(this)).find('img');
			if (images.length > 0) {
				if (index == (settings.firstSlide - 1)) {
					build = build + "<div class=\"item active\">" + images[0].outerHTML + "</div>";
				}
				else {
					build = build + "<div class=\"item\">" + images[0].outerHTML + "</div>";
				}
			}
		});
		
		carouselControls = "<a class=\"left carousel-control\" href=\"#" + settings.carouselID + "\" data-slide=\"prev\"><span class=\"glyphicon glyphicon-chevron-left\"></span></a><a class=\"right carousel-control\" href=\"#" + settings.carouselID + "\" data-slide=\"next\"><span class=\"glyphicon glyphicon-chevron-right\"></span></a>"
		build = "<div class=\"carousel-inner\">" + build + "</div>";
		build = build + carouselControls;
		build = "<div id=\"" + settings.carouselID + "\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"" + settings.interval + "\">" + build + "</div>";
	}
	else if (carouselContainer.children().length == 1) {
		images = carouselContainer.children().find('img');
		build = "<div class=\"carousel-inner\"><div class=\"item active\">" + images[0].outerHTML + "</div></div>";
	}

	carouselContainer.children().remove();
	carouselContainer.prepend(build);

	carouselContainer.toggleClass("hidden");

	return carouselContainer;
}