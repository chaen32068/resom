$(document).ready(function () {

	$('nav > ul > li').mouseover(function () {
		$('.nav_bg, .sub-menu').stop().slideDown();
	});
	$('.nav_bg').mouseleave(function () {
		$('.nav_bg, .sub-menu').stop().slideUp();
	});
	// header-nav


	new Swiper('.swiper-container.main', {
		effect: 'fade',
		loop: true,
		// autoplay: {
		// 	delay: 5000,
		// 	disableOnInteraction: false
		// },
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});
	// swiper-main


	var swiper = new Swiper('.swiper-container.event', {
		slidesPerView: 3, // 기본적으로 3개 슬라이드 표시
		spaceBetween: 30, // 슬라이드 간의 간격
		loop: true,
		pagination: {
			// el: '.swiper-pagination',
			clickable: true,
		},
		breakpoints: {
			1280: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2,
			},
			0: {
				slidesPerView: 1,
			},
		},
	});
	// swiper-event


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
	// swiper-story


	document.addEventListener('scroll', function () {
		const membershipSection = document.getElementById('membership');
		const textArea = membershipSection.querySelector('.text-area');
		const imgArea = membershipSection.querySelector('.img-area');

		const sectionPosition = membershipSection.getBoundingClientRect().top;
		const sectionHeight = membershipSection.offsetHeight; // 섹션의 높이
		const screenPosition = window.innerHeight; // 화면 높이

		// 섹션의 상단이 화면에 들어왔을 때
		if (sectionPosition < screenPosition && sectionPosition + sectionHeight > 0) {
			textArea.classList.add('scrolled');
			imgArea.classList.add('scrolled');
		} else {
			textArea.classList.remove('scrolled');
			imgArea.classList.remove('scrolled');
		}
	});
	// membership


	document.addEventListener('DOMContentLoaded', function () {
		const topButton = document.getElementById('top-btn');

		// 스크롤 시 버튼 표시
		window.addEventListener('scroll', function () {
			if (window.scrollY > 100) {
				topButton.style.display = 'block';
			} else {
				topButton.style.display = 'none';
			}
		});

		// 버튼 클릭 시 부드럽게 스크롤
		topButton.addEventListener('click', function (e) {
			e.preventDefault(); // 기본 링크 동작 방지

			// 부드러운 스크롤 구현
			window.scrollTo({
				top: 0,
				behavior: 'smooth' // 부드러운 스크롤
			});
		});
	});
	// top button



	// document.addEventListener('DOMContentLoaded', function () {
	// 	const fnbLink = document.querySelector('.fnb-link');
	// 	const linkList = document.querySelector('.link-list');

	// 	fnbLink.addEventListener('click', function (e) {
	// 		e.preventDefault(); // 기본 링크 동작 방지
	// 		if (linkList.style.maxHeight) {
	// 			linkList.style.maxHeight = null; // 숨김
	// 		} else {
	// 			linkList.style.maxHeight = linkList.scrollHeight + 'px'; // 현재 높이로 설정하여 보이게 함
	// 		}
	// 		fnbLink.classList.toggle('open'); // open 클래스 토글
	// 	});
	// });


	

	//menu-toggle


});
