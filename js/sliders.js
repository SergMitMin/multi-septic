
$('.feedback-video-slider').slick({
    infinitie: true,
    slidesToShow: 1,
    prevArrow: $('.video-prev__btn'),
    nextArrow: $('.video-next__btn'),
});


//video slider

$(document).ready(function() {
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
});