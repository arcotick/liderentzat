var card = document.getElementById('card');

var mouseX, mouseY, offsetx, offsety;

var dragging = false;

var drag = function(e) {
	dragging = true;
	offsetx = e.layerX;
	offsety = e.layerY;
	getMousePos(e);
}
var move = function(e) {
	if (dragging) {
		getMousePos(e);
		console.log(mouseX-offsetx, mouseY-offsety);
	}
}
var fix = function(e) {
	getMousePos(e);
	dragging = false;
}
function updateCardPos() {
	card.style.left = mouseX-offsetx + 'px';
	card.style.top = mouseY-offsety + 'px';
}
function getMousePos(e) {
	mouseX = e.pageX;
	mouseY = e.pageY;
	mouseXrel = e.layerX;
	mouseYrel = e.layerY;
	updateCardPos();
}

window.addEventListener('mousedown', function() {card.style.opacity = 1})
card.addEventListener('mousedown', drag);
window.addEventListener('mousemove', move);
card.addEventListener('mouseup', fix);