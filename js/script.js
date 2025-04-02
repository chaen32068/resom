$(document).ready(function () {

	$('nav > ul > li').mouseover(function () {
		$('.nav_bg, .sub-menu').stop().slideDown();
	});
	$('.nav_bg').mouseleave(function () {
		$('.nav_bg, .sub-menu').stop().slideUp();
	});
	// header-nav


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
	// swiper-main


	var swiper = new Swiper('.event', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		}
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

	document.addEventListener('DOMContentLoaded', function () {
		const fnbLink = document.querySelector('.fnb-link');
		const linkList = document.querySelector('.link-list');
		const linkItems = document.querySelectorAll('.link-list > a');

		// link-list의 초기 상태 설정
		linkList.style.maxHeight = '0';
		linkList.style.overflow = 'hidden';
		linkList.style.transition = 'max-height 0.3s ease-out'; // 부드러운 애니메이션 효과

		// fnb-link 클릭 시 link-list 토글
		fnbLink.addEventListener('click', function (e) {
			e.preventDefault(); // 기본 링크 동작 방지
			linkList.style.maxHeight = (linkList.style.maxHeight === '0px' || linkList.style.maxHeight === '')
				? linkList.scrollHeight + 'px' // 현재 높이로 설정하여 보이게 함
				: '0'; // 숨김

			// open 클래스 토글
			fnbLink.classList.toggle('open');
		});

		// link-list의 각 항목 클릭 시
		linkItems.forEach(function (item) {
			item.addEventListener('click', function () {
				const txt = this.textContent; // 클릭한 항목의 텍스트 가져오기
				fnbLink.querySelector('a').textContent = txt; // fnb-link의 텍스트 변경
				linkList.style.maxHeight = '0'; // link-list 숨기기
				fnbLink.classList.remove('open'); // open 클래스 제거
			});
		});
	});
	//menu-toggle


});
