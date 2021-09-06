document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {

    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {

        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

//modal-window 

const contact = document.querySelector('#contact');
const modalbg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

contact.addEventListener('click', () => {
  modal.classList.add('is-active')
})

modalbg.addEventListener('click', () => {
  modal.classList.remove('is-active')
})



function readMore(){
	var dots = document.getElementById("dots");
	var more = document.getElementById("more");
	var btn = document.getElementById("btn");

	if(dots.style.display === 'inline' || dots.style.display === ''){
		dots.style.display = 'none';
		more.style.display = 'inline';
		btn.innerHTML="<img src=\"/img/icon/less.png\" width=\"70px\" height=\"70px\">";
	}else{
		dots.style.display = 'inline';
		more.style.display = 'none';
		btn.innerHTML="<img src=\"/img/icon/more_btn.png\" width=\"70px\" height=\"70px\">";
	}
}

// ========================================

function readMore1(){
	var dots1 = document.getElementById("dots1");
	var more1 = document.getElementById("more1");
	var btn1 = document.getElementById("btn1");

	if(dots1.style.display === 'inline' || dots1.style.display === ''){
		dots1.style.display = 'none';
		more1.style.display = 'inline';
		btn1.innerHTML="<img src=\"/img/icon/less.png\" width=\"70px\" height=\"70px\">";
	}else{
		dots1.style.display = 'inline';
		more1.style.display = 'none';
		btn1.innerHTML="<img src=\"/img/icon/more_btn.png\" width=\"70px\" height=\"70px\">";
	}
}

// ========================================

function readMore2(){
	var dots2 = document.getElementById("dots2");
	var more2 = document.getElementById("more2");
	var btn2 = document.getElementById("btn2");

	if(dots2.style.display === 'inline' || dots2.style.display === ''){
		dots2.style.display = 'none';
		more2.style.display = 'inline';
		btn2.innerHTML="<img src=\"/img/icon/less.png\" width=\"70px\" height=\"70px\">";
	}else{
		dots2.style.display = 'inline';
		more2.style.display = 'none';
		btn2.innerHTML="<img src=\"/img/icon/more_btn.png\" width=\"70px\" height=\"70px\">";
	}
}

// ====================================================================================================

const words = [
	' Есть идея, но нет IT команды?',
	'Всегда готовы поработать и пообщаться!',
	// 'Third Word in array',
]

let charTurn = 0
let wordTurn = 0
const output = document.getElementById('outText')

// console.log('hello'.indexOf('o'))
printWord()

function printWord() {
	if (charTurn <= words[wordTurn].length) {
		 let str = words[wordTurn].substr(0, charTurn)
		 output.innerHTML = str
		 charTurn += 1
		 setTimeout(printWord, 180)
	} else {
		 setTimeout(deleteWord, 10)
	}
}

function deleteWord() {
	if (charTurn >= 0) {
		 let str = words[wordTurn].substr(0, charTurn)
		 output.innerHTML = str
		 charTurn -= 1
		 setTimeout(deleteWord, 10)
	} else {
		 wordTurn += 1
		 if (wordTurn >= words.length) {
			  wordTurn = 0
		 }
		 setTimeout(printWord, 150)
	}
}