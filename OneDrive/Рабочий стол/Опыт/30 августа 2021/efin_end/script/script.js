$(document).ready(function(){
	$('.header__burger').click(function(event){
		$('.header__burger,.header__menu').toggleClass('active')
		$('body').toggleClass('lock')
		$('.drop-down_second').removeClass('active_drop')
		$('.drop-down_second_1').removeClass('active_drop')
	})

	$('.link').click(function(event){
		$('.header__burger,.header__menu').remove('active')
	})


	$(window).scroll(function(){
		$(".fullscreen__body").css("opacity", 1 - $(window).scrollTop() / 600)
	})


	$('drp_lst').toggle(function () {
		$(".drop-down_second").css({display: "block"});
	}, function () {
		$(".drop-down_second").css({display: "none"});
	});


	$('.drp_lst').click(function(event){
		$('.drop-down_second').toggleClass('active_drop')
	})
	$('.drp_lst1').click(function(event){
		$('.drop-down_second_1').toggleClass('active_drop')
	})

	$('.link').click(function(event){
		$('.header__burger,.header__menu').removeClass('active')
		$('body').removeClass('lock')
		$('.drop-down_second').removeClass('active_drop')
		$('.drop-down_second_1').removeClass('active_drop')
	})

})