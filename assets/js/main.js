// JavaScript Document

$(document).ready(function() {

	$.scrollIt({
		topOffset: -120// offste (in px) for fixed top navigation
	});

	// home main slider start 
	$('.creative-slider').slick({
		dots: true,
		infinite: true,
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		nextArrow: '<div class="slick-next slick-arrow"><img src="assets/images/slick-arrow.svg" class="img-fluid" alt="slick-arrow"></div>',
		// prevArrow: '<div class="slick-prev slick-arrow"><i class="fa fa-angle-left"></div>',
	});
	// home main slider end

	$('.navbar-nav .nav-link').click(function(){
		$('.navbar-collapse.collapse').removeClass('show');
	});

	// client slider start 
	$('.client-slider').slick({
		dots: false,
		infinite: true,
		arrows:false,
		speed: 200,
		autoplaySpeed:1000,
		autoplay:true,
		slidesToShow: 6,
		slidesToScroll: 1,
		swipe: true,
		  responsive: [{
		  		breakpoint: 1024,
		  		settings: {
		  			slidesToShow: 3,
		  			
		  		}
		  	},
		  	{
		  		breakpoint: 600,
		  		settings: {
		  			slidesToShow: 2,
		  		}
		  	},
		  	{
		  		breakpoint: 480,
		  		settings: {
		  			slidesToShow: 1,
		  		}
		  	}
		  	// You can unslick at a given breakpoint now by adding:
		  	// settings: "unslick"
		  	// instead of a settings object
		  ]
	});
	// client slider end

	$('.pricing-table-slider').slick({
		dots: false,
		infinite: true,
		speed: 200,
		slidesToShow: 1,
		slidesToScroll: 1,
		swipe: true,
		nextArrow: '<div class="slick-next slick-arrow"><img src="assets/images/slick-arrow.svg" class="img-fluid" alt="slick-arrow"></div>',
		prevArrow: '<div class="slick-prev slick-arrow"><img src="assets/images/slick-arrow.svg" class="img-fluid" alt="slick-arrow"></div>'
	});
	// client slider end


	// Mobile Navigation Toggle Start
	$(".navbar .navbar-toggler").click(function () {
		$(this).toggleClass('open');
	});

	// header sticky js
	$(window).scroll(function () {
		var sticky = $('.header'),
			scroll = $(window).scrollTop();

		if (scroll >= 30) sticky.addClass('fixed');
		else sticky.removeClass('fixed');
	});

	

	// OFI Browser
	objectFitImages();
});
