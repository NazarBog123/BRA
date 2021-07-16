if (document.body.classList.contains('designPage')) {
	const photoWrapper = document.querySelector('.photo__wrapper');
	const btnMore = document.querySelector('.photo__btn');


	btnMore.addEventListener('click', (e) => {
		e.target.preventDefault;
		
		if (photoWrapper.classList.contains('active')) {
			photoWrapper.classList.remove('active');
			btnMore.innerHTML = `<span>Show more</span>
										<img src="img/arrow-blue-btn.svg" alt="">`
		} else {
			photoWrapper.classList.add('active');
			btnMore.innerHTML = `<span>Hide photos</span>
										<img src="img/arrow-blue-btn.svg" alt="">`;
		}
	});
}

if (document.querySelector('.mainSwiper') != null) {
	const mainSwiper = new Swiper('.mainSwiper', {
		effect: "fade",
		direction: 'horizontal',
		loop: true,
	
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
	
			renderBullet: function (index, className) {
				return '<span class="' + className + '">' + (index + 1) + "</span>";
			 },
		 },
	 
		navigation: {
		  nextEl: '.swiper-button-next',
		  prevEl: '.swiper-button-prev',
		},
	
		autoplay: {
			delay: 5000,
			disableOnInteraction: false,
		}
	});
}

window.addEventListener('resize', () => {
	if (document.documentElement.clientWidth >= 1300) {
		location.reload();
	}
});

const BulletMainSwiper = document.querySelectorAll('.swiper-pagination-bullet');
let activeBullet = '';
for (const bullet of BulletMainSwiper) {
	bullet.innerHTML = '';
}
window.addEventListener('load', () => {
	if (document.querySelector('.mainSwiper') != null) {
		let a = setInterval(() => {
			if (document.documentElement.clientWidth <= 1300) {
				clearInterval(a);
			}
			for (let index = 0; index < 3; index++) {
				const bullet = BulletMainSwiper[index];
				if (bullet.classList.contains('swiper-pagination-bullet-active')) {
					activeBullet = `${index + 1}`;
				}
				document.querySelector('.main-number-slide').innerHTML = `0${activeBullet}`;
			}
		}, 100);
	}
});



if (document.querySelector('.portfolioSwiper')) {
	const portfolioSwiper = new Swiper('.portfolioSwiper', {
		direction: 'horizontal',
		loop: true,
		slidesPerView: 4,
		
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			1200: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 3,
			},
			576: {
				slidesPerView: 2,
			},
			320: {
				slidesPerView: 1,
			}
		 },
	});
}

if (document.querySelector('.reviewSwiper') != null) {
	const reviewSwiper = new Swiper('.reviewSwiper', {
		direction: 'horizontal',
		loop: true,
		effect: "fade",
	
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}

// Burger
const mainNavigation = document.getElementById('main-navigation');

document.querySelector('.burger').addEventListener('click', () => {
	mainNavigation.classList.add('active');
	hideScroll();
});

document.querySelector('.burger-menu__close').addEventListener('click', () => {
	mainNavigation.classList.remove('active');
	showScroll();
});

const hideScroll = () => {
    const scrollWidth = `${getScrollbarWidth()}px`;

	document.body.style.paddingRight = scrollWidth;
	document.body.style.overflow = 'hidden';

	mainNavigation.style.paddingRight = scrollWidth;
};

const showScroll = () => {
	document.body.style.paddingRight = '';
	document.body.style.overflow = 'visible';

	mainNavigation.style.paddingRight = '';
};

const resetNav = () => {
	mainNavigation.classList.remove('active');
	showScroll();
}

window.addEventListener('resize', resetNav);

// Get scrollbar width
const getScrollbarWidth = () => {
	const outer = document.createElement('div');

	outer.style.position = 'absolute';
	outer.style.top = '-9999px';
	outer.style.width = '50px';
	outer.style.height = '50px'; 
	outer.style.overflow = 'scroll';
	outer.style.visibility = 'hidden';

	document.body.appendChild(outer);
	const scrollBarWidth = outer.offsetWidth - outer.clientWidth;
	document.body.removeChild(outer);

	return scrollBarWidth;
}
