window.onload = function(){

var menu = document.getElementById('menu');
var about = document.getElementById('about');
var anonim = document.getElementById('anonim');

// console.log(menu);
/*menu.on = function(){
	alert('Yes!')
}*/
console.log(about);
about.onfocus = function(){
	alert('Yes!')
}



var arr1 = ['О', ' ', 'Б', 'Ю', 'Р', 'О'];
var i;
function a(){
	 i = 0;
	document.getElementById('print').innerHTML += arr1[i];
	 i += 1;

}

	



setTimeout(a, 1000);
















}