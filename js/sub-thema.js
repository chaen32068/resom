$(function () {

	var swiper = new Swiper('.swiper-container', {
		spaceBetween: 30,
		centeredSlides: true,

		effect: 'fade',
		loop: true,

		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	//swiper
});
