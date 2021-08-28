//navbar-menu

const burgerIcon = document.querySelector('#burder');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
	navbarMenu.classList.toggle('is-active');
})

// ===================================================================

$(window).on('scroll', function() {
	var scrollCoef = 0.0035;

	$('.title-params').css({
		opacity: 1 - $(window).scrollTop() * scrollCoef
	})
});