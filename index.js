// header (добавление прозрачности при скролле)
window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	if (window.scrollY > 0) {
		header.classList.add('scrolled');
	} else {
		header.classList.remove('scrolled');
	}
});

const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.nav-menu');

// Обработчик клика
burger.addEventListener('click', () => {
	if (window.innerWidth <= 1024) {
		burger.classList.toggle('active');
		navMenu.classList.toggle('active');
		document.body.classList.toggle(
			'no-scroll',
			navMenu.classList.contains('active')
		);
	}
});

window.addEventListener('resize', () => {
	if (window.innerWidth > 1024) {
		burger.classList.remove('active');
		navMenu.classList.remove('active');
		document.body.classList.remove('no-scroll');
	}
});
