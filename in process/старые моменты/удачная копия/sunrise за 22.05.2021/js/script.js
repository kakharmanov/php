//navbar-menu

const burgerIcon = document.querySelector('#burder');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
	navbarMenu.classList.toggle('is-active');
})

$(this).toggleClass('show class_2');


// ========================================

function readMore(){
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if(dots.style.display === 'inline'){
		dots.style.display = 'none';
		more.style.display = 'inline';
		btn.innerHTML="<img src=\"/CSS/img/less.png\" width=\"70px\" height=\"70px\">";
	}else{
		dots.style.display = 'inline';
		more.style.display = 'none';
		btn.innerHTML="<img src=\"/CSS/img/icon/more_btn.png\" width=\"70px\" height=\"70px\">";
	}
}

// ========================================

function readMore1(){
	var dots1 = document.getElementById("dots1");
	var more1 = document.getElementById("more1");
	var btn1 = document.getElementById("btn1");

	if(dots1.style.display === 'inline'){
		dots1.style.display = 'none';
		more1.style.display = 'inline';
		btn1.innerHTML="<img src=\"/CSS/img/less.png\" width=\"70px\" height=\"70px\">";
	}else{
		dots1.style.display = 'inline';
		more1.style.display = 'none';
		btn1.innerHTML="<img src=\"/CSS/img/icon/more_btn.png\" width=\"70px\" height=\"70px\">";
	}
}

// ========================================

function readMore2(){
	var dots2 = document.getElementById("dots2");
	var more2 = document.getElementById("more2");
	var btn2 = document.getElementById("btn2");

	if(dots2.style.display === 'inline'){
		dots2.style.display = 'none';
		more2.style.display = 'inline';
		btn2.innerHTML="<img src=\"/CSS/img/less.png\" width=\"70px\" height=\"70px\">";
	}else{
		dots2.style.display = 'inline';
		more2.style.display = 'none';
		btn2.innerHTML="<img src=\"/CSS/img/icon/more_btn.png\" width=\"70px\" height=\"70px\">";
	}
}