$('.show').click(function(){
	$(this).parent().find('.hidden').slideToggle(300);
 })

 //navbar-menu

const burgerIcon = document.querySelector('#burder');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
	navbarMenu.classList.toggle('is-active');
})

$(this).toggleClass('show class_2');
