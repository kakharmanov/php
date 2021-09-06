window.addEventListener('load', async()=>{
	if('serviceWorker' in navigator){
		try{
			await navigator.serviceWorker.register('sw.js')
			console.log('Все пучком')
		} catch(e){
			console.log(e)
		}
	}
})



let List = document.querySelector('ul');
let todos;

function toLocal() {
	todos = List.innerHTML;
	localStorage.setItem('todos', todos);
}

List.addEventListener('click', function (e) {
	if(e.target.tagName === "LI"){
		e.target.classList.toggle('checked');
		toLocal();
	} else if(e.target.tagName === "SPAN"){
		let div = e.target.parentNode;
		div.remove();
		toLocal();
	}
}, false);

function newElement() {
	let li = document.createElement("li");
	let inputValue = document.getElementById("inputValue").value;
	let contantPoint = document.createTextNode(inputValue);
	li.appendChild(contantPoint);
	if(inputValue == ""){
		false
	} else {
		document.getElementById("list").appendChild(li);
	}
	document.getElementById("inputValue").value = "";
	let span = document.createElement("SPAN");
	let txt = document.createTextNode("X");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	toLocal();
}

if(localStorage.getItem('todos')){
	List.innerHTML = localStorage.getItem('todos');
}

function RemoveAll() {
	localStorage.clear()
	location.reload();
}