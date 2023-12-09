/*********************************************************************************

	Template Name: Confianza & Vogue Template
	Note: This is Main JS Here.

**********************************************************************************/


/*==========================
	Main Js Index 

    	01. Wow Active 
    	02. Youtub Popup
		03. Bg Color
		04. Catalogue Images 
		05. Slider Activation
		06. Scroll Up Activation
==============================*/

(function ($) {

	'use strict';

    /*======================= 
    	01. Wow Active 
    ======================*/

    new WOW().init();

	/*=========================== 
    	02. Youtub Popup 
    ============================*/

	$('.play__btn').yu2fvl();
	

	/*==================================
		03. Bg Color
	===================================*/

	var $bgcolor = $('.bg-color');
	$bgcolor.each(function () {
		var $this = $(this),
			$color = $this.data('bg-color');
		$this.css('background-color', $color);
	});


	/*----------------------------------
		04. Catalogue Images 
	------------------------------------*/

	$('.product-details-images').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		centerMode: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
		asNavFor: '.product-details-thumbs'
	});

	$('.product-details-thumbs').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		focusOnSelect: true,
		centerMode: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
		asNavFor: '.product-details-images'
	});

	/*----------------------------------
		05. Slider Activation
	------------------------------------*/

	$('.slider-activation').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		infinite: true,
		centerPadding: 0,
		prevArrow: '<span class="slider-navigation slider-navigation-prev"><i class="fa fa-caret-left"></i></span>',
		nextArrow: '<span class="slider-navigation slider-navigation-next"><i class="fa fa-caret-right"></i></span>',
	});


	/*==================================
		06. Scroll Up Activation
	=====================================*/

	$.scrollUp({
		scrollText: '<i class="fa fa-angle-up"></i>',
		easingType: 'linear',
		scrollSpeed: 900,
		animation: 'slide'
	});



})(jQuery)