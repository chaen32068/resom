$(document).ready(function () {

	$('.nav > ul > li').mouseover(function () {
		$('.nav_bg, .sub-menu').stop().slideDown();
	});
	$('.nav_bg').mouseleave(function () {
		$('.nav_bg, .sub-menu').stop().slideUp();
	});
	// header-nav


	const trigger = document.querySelector('.trigger');
	const mNav = document.querySelector('.m_nav'); 

	trigger.addEventListener('click', () => {
		trigger.classList.toggle('active');
		mNav.classList.toggle('active');

		if (mNav.classList.contains('active')) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = ''; 
		}
	});

	const navItems = document.querySelectorAll('.m_nav .nav-list .nav-item');
	const navLinks = document.querySelectorAll('.m_nav .nav-list .nav-link');
	const subMenus = document.querySelectorAll('.m_nav .nav-list .sub-menu');

	navLinks.forEach((link, index) => {
		link.addEventListener('click', (event) => {
			event.preventDefault();

			const subMenu = navItems[index].querySelector('.sub-menu');

			subMenus.forEach((menu) => {
				if (menu !== subMenu) {
					menu.classList.remove('active');
					menu.classList.remove('open');
				}
			});

			navLinks.forEach((navLink, navIndex) => {
				if (navIndex !== index) {
					navLink.classList.remove('open');
				}
			});

			subMenu.classList.toggle('active');
			subMenu.classList.toggle('open'); 
			link.classList.toggle('open');
		});
	});
	// mobile header-nav


	new Swiper('.swiper-container.main', {
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
	// swiper-main


	var swiper = new Swiper('.swiper-container.event', {
		slidesPerView: 3,
		spaceBetween: 30,
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
		const sectionHeight = membershipSection.offsetHeight;
		const screenPosition = window.innerHeight;

		if (sectionPosition < screenPosition && sectionPosition + sectionHeight > 0) {
			textArea.classList.add('scrolled');
			imgArea.classList.add('scrolled');
		} else {
			textArea.classList.remove('scrolled');
			imgArea.classList.remove('scrolled');
		}
	});
	// membership


	$(document).ready(function() {
		var btn = $('#top-btn');

		$(window).scroll(function() {
			if ($(window).scrollTop() > 300) {
				btn.addClass('show');
			} else {
				btn.removeClass('show');
			}
		});

		btn.on('click', function(e) {
			e.preventDefault(); 
			$('html, body').animate({scrollTop: 0}, 300);
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
