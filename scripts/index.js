var container = document.getElementById("game");  
var content = container.innerHTML;

function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	let draggedId = ev.dataTransfer.getData("text");
	
	if (ev.target.className.includes(draggedId) ) {
		ev.target.appendChild(document.getElementById(draggedId)); 
		ev.target.classList.add("correct");
	}
}

function reset(){
	var container = document.getElementById("game");
	container.innerHTML= html;
} 

var html;

window.onload = function(){
	html = document.getElementById('game').innerHTML;
};
