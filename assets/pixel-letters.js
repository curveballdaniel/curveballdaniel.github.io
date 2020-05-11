
function ecoordinates(array, x, y, offset) {


  array.push([x+1 + offset, y, 1]);
  array.push([x+2 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x+3 + offset, y+1, 1]);

  array.push([x + offset, y+2, 1]);
  array.push([x+1 + offset, y+2, 1]);
  array.push([x+2 + offset, y+2, 1]);

  array.push([x + offset, y+3, 1]);

  array.push([x+1 + offset, y+4, 1]);
  array.push([x+2 + offset, y+4, 1]);
  array.push([x+3 + offset, y+4, 1]);
}

function mcoordinates(array, x, y, offset) {
  array.push([x + offset, y, 1]);
  array.push([x+1 + offset, y, 1]);
  array.push([x+3 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x+2 + offset, y+1, 1]);
  array.push([x+4 + offset, y+1, 1]);

  array.push([x + offset, y+2, 1]);
  array.push([x+2 + offset, y+2, 1]);
  array.push([x+4 + offset, y+2, 1]);

  array.push([x + offset, y+3, 1]);
  array.push([x+2 + offset, y+3, 1]);
  array.push([x+4 + offset, y+3, 1]);

  array.push([x + offset, y+4, 1]);
  array.push([x+2 + offset, y+4, 1]);
  array.push([x+4 + offset, y+4, 1]);
}

function ocoordinates(array, x, y, offset) {
  array.push([x+1 + offset, y, 1]);
  array.push([x+2 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x + offset, y+2, 1]);
  array.push([x + offset, y+3, 1]);
  array.push([x+3 + offset, y+1, 1]);
  array.push([x+3 + offset, y+2, 1]);
  array.push([x+3 + offset, y+3, 1]);

  array.push([x+1 + offset, y+4, 1]);
  array.push([x+2 + offset, y+4, 1]);
}

function ccoordinates(array, x, y, offset) {
	array.push([x+1 + offset, y, 1]);
	array.push([x+2 + offset, y, 1]);
	array.push([x+3 + offset, y, 1]);

	array.push([x + offset, y+1, 1]);
	array.push([x + offset, y+2, 1]);
	array.push([x + offset, y+3, 1]);

	array.push([x+1 + offset, y+4, 1]);
	array.push([x+2 + offset, y+4, 1]);
	array.push([x+3 + offset, y+4, 1]);
}

function lcoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x + offset, y+1, 1]);
  array.push([x + offset, y+2, 1]);
  array.push([x + offset, y+3, 1]);
  array.push([x + offset, y+4, 1]);
}

function Wcoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x + offset, y+1, 1]);
  array.push([x+1 + offset, y+2, 1]);
  array.push([x+1 + offset, y+3, 1]);
  array.push([x+2 + offset, y+4, 1]);

  array.push([x+3 + offset, y+2, 1]);
  array.push([x+3 + offset, y+3, 1]);

  array.push([x+6 + offset, y, 1]);
  array.push([x+6 + offset, y+1, 1]);
  array.push([x+5 + offset, y+2, 1]);
  array.push([x+5 + offset, y+3, 1]);
  array.push([x+4 + offset, y+4, 1]);
}

function tcoordinates(array, x, y, offset){
  array.push([x+1 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x+1 + offset, y+1, 1]);
  array.push([x+2 + offset, y+1, 1]);

  array.push([x+1 + offset, y+2, 1]);
  array.push([x+1 + offset, y+3, 1]);
  array.push([x+1 + offset, y+4, 1]);
}

function acoordinates(array, x, y, offset){
  array.push([x+1 + offset, y, 1]);
  array.push([x+2 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x+3 + offset, y+1, 1]);

  array.push([x + offset, y+2, 1]);
  array.push([x+3 + offset, y+2, 1]);

  array.push([x + offset, y+3, 1]);
  array.push([x+3 + offset, y+3, 1]);

  array.push([x+1 + offset, y+4, 1]);
  array.push([x+2 + offset, y+4, 1]);
  array.push([x+4 + offset, y+4, 1]);
}

function Dcoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x+1 + offset, y, 1]);
  array.push([x+2 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x+2 + offset, y+1, 1]);
  array.push([x+3 + offset, y+1, 1]);

  array.push([x + offset, y+2, 1]);
  array.push([x+3 + offset, y+2, 1]);
  array.push([x + offset, y+3, 1]);
  array.push([x+3 + offset, y+3, 1]);
  //array.push([x, y+4, 1]);
  //array.push([x+3, y+4, 1]);

  array.push([x + offset, y+4, 1]);
  array.push([x+1 + offset, y+4, 1]);
  array.push([x+2 + offset, y+4, 1]);
}

function ncoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x+1 + offset, y, 1]);
  array.push([x+2 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x + offset, y+2, 1]);
  array.push([x + offset, y+3, 1]);
  array.push([x + offset, y+4, 1]);

  array.push([x+3 + offset, y+1, 1]);
  array.push([x+3 + offset, y+2, 1]);
  array.push([x+3 + offset, y+3, 1]);
  array.push([x+3 + offset, y+4, 1]);
}

function icoordinates(array, x, y, offset){
  array.push([x+1 + offset, y, 1]);
  array.push([x+1 + offset, y+2, 1]);
  array.push([x+1 + offset, y+3, 1]);
  array.push([x+1 + offset, y+4, 1]);
}

function apostrophecoordinates(array, x, y, offset){
  array.push([x+2 + offset, y, 1]);
  array.push([x+1 + offset, y+1, 1]);
}

function scoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x+1 + offset, y, 1]);
  array.push([x+2 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);

  array.push([x + offset, y+2, 1]);
  array.push([x+1 + offset, y+2, 1]);
  array.push([x+2 + offset, y+2, 1]);

  array.push([x+2 + offset, y+3, 1]);

  array.push([x + offset, y+4, 1]);
  array.push([x+1 + offset, y+4, 1]);
  array.push([x+2 + offset, y+4, 1]);
}

function Pcoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x+1 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x+2 + offset, y+1, 1]);

  array.push([x + offset, y+2, 1]);
  array.push([x+1 + offset, y+2, 1]);
  array.push([x+2 + offset, y+2, 1]);

  array.push([x + offset, y+3, 1]);
  array.push([x + offset, y+4, 1]);
}

function rcoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x+1 + offset, y, 1]);
  array.push([x+2 + offset, y, 1]);

  array.push([x + offset, y+1, 1]);
  array.push([x + offset, y+2, 1]);
  array.push([x + offset, y+3, 1]);
  array.push([x + offset, y+4, 1]);
}

function bcoordinates(array, x, y, offset){
  array.push([x + offset, y, 1]);
  array.push([x + offset, y+1, 1]);

  array.push([x + offset, y+2, 1]);
  array.push([x+1 + offset, y+2, 1]);

  array.push([x + offset, y+3, 1]);
  array.push([x+2 + offset, y+3, 1]);

  array.push([x + offset, y+4, 1]);
  array.push([x+1 + offset, y+4, 1]);
  array.push([x+2 + offset, y+4, 1]);
}

function exclamationcoordinates(array, x, y, offset){
  array.push([x+1 + offset, y, 1]);
  array.push([x+1 + offset, y+1, 1]);
  array.push([x+1 + offset, y+2, 1]);
  array.push([x+1 + offset, y+4, 1]);
}
