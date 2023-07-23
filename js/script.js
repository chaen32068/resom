$(document).ready(function () {

	$('nav > ul > li').mouseover(function () {
		$('.nav_bg, .sub-menu').stop().slideDown();
	});
	$('.nav_bg').mouseleave(function () {
		$('.nav_bg, .sub-menu').stop().slideUp();
	});
	//header-nav


	new Swiper('.main', {
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	//swiper-main


	var swiper = new Swiper('.event', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
	});
	//swiper-event


	new Swiper('.story', {
		effect: 'fade',
		loop: true,
		autoplay: {
			delay: 5000,
			disableOnInteraction: false
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	//swiper-story

	
	$('.topbutton').on('click', () => {
		$(document).scrollTop(0)
	});
	// top button


	$('.fnb-link > a').click(function () {
		$('.link-list').slideToggle();
	});
	$('.link-list > a').click(function () {
		var txt = $(this).text();
		
		$('.fnb-link > a').text(txt);
		$('.link-list').slideUp();
	});
	//menu-toggle
});