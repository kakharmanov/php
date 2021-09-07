const zoneFirst = document.querySelector('.zone-first');
const zoneSecond = document.querySelector('.zone-second');
const zoneThird = document.querySelector('.zone-third');
const object1 = document.querySelector('#object-1');
const object2 = document.querySelector('#object-2');
const object3 = document.querySelector('#object-3');

zoneFirst.ondragover = allowDrop;
zoneSecond.ondragover = allowDrop;
zoneThird.ondragover = allowDrop;

function allowDrop(event){
	event.preventDefault();
}

object1.ondragstart = drag;
object2.ondragstart = drag;
object3.ondragstart = drag;

function drag(event){
	event.dataTransfer.setData('id', event.target.id);
}

zoneFirst.ondrop = drop;
zoneSecond.ondrop = drop;
zoneThird.ondrop = drop;

function drop(event){
	let itemId = event.dataTransfer.getData('id');
	event.target.append(document.getElementById(itemId));
}