$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
	})
})

$(document).ready(function(){
	$(window).scroll(function(){
		$(".fullscreen__body").css("opacity", 1 - $(window).scrollTop() / 600)
	})
})