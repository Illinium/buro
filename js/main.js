window.onload = function(){

// var menu = document.getElementById('menu');
var about = document.getElementById('about');
var anonim = document.getElementById('anonim');
var news = document.getElementById('news');
var pidtrumatu = document.getElementById('pidtrumatu');
var cont = document.getElementById('cont');

var arr = ['О', ' ', 'Б', 'Ю', 'Р', 'О'];
var i = 0;
var timer;
var arg = true;

function a(){
	document.getElementById('print').innerHTML += arr[i];
	 i += 1;
	 if (i == arr.length){
	 	clearInterval(timer);
	}
}
function b(){
	
timer = setInterval(a, 200)
};
about.onmouseover = function(){
	if(arg == true){
		
		b();
		return arg = false;
}
};


var arr1 = ['A', 'н', 'о', 'н', 'і', 'м', 'н', 'і', ' ', 'з', 'в', 'і', 'с', 'т', 'к', 'и'];
var i1 = 0;
var timer1;
var arg1 = true;

function a1(){
	document.getElementById('print1').innerHTML += arr1[i1];
	 i1 += 1;
	 if (i1 == arr1.length){
	 	clearInterval(timer1);
	}
}
function b1(){
	
timer1 = setInterval(a1, 200)
};
anonim.onmouseover = function(){
	if(arg1 == true){
		
		b1();
		return arg1 = false;
}
};


var arr2 = ['Н', 'о', 'в', 'и', 'н', 'и'];
var i2 = 0;
var timer2;
var arg2 = true;

function a2(){
	document.getElementById('print2').innerHTML += arr2[i2];
	 i2 += 1;
	 if (i2 == arr2.length){
	 	clearInterval(timer2);
	}
}
function b2(){
	
timer2 = setInterval(a2, 200)
};
news.onmouseover = function(){
	if(arg2 == true){
		
		b2();
		return arg2 = false;
}
};


var arr3 = ['П', 'і', 'д', 'т', 'р', 'и', 'м', 'а', 'т', 'и', ' ', 'б', 'ю', 'р', 'о'];
var i3 = 0;
var timer3;
var arg3 = true;

function a3(){
	document.getElementById('print3').innerHTML += arr3[i3];
	 i3 += 1;
	 if (i3 == arr3.length){
	 	clearInterval(timer3);
	}
}
function b3(){
	
timer3 = setInterval(a3, 200)
};
pidtrumatu.onmouseover = function(){
	if(arg3 == true){
		
		b3();
		return arg3 = false;
}
};



var arr4 = ['К', 'о', 'н', 'т', 'а', 'к', 'т', 'и'];
var i4 = 0;
var timer4;
var arg4 = true;

function a4(){
	document.getElementById('print4').innerHTML += arr4[i4];
	 i4 += 1;
	 if (i4 == arr4.length){
	 	clearInterval(timer4);
	}
}
function b4(){
	
timer4 = setInterval(a4, 200)
};
cont.onmouseover = function(){
	if(arg4 == true){
		
		b4();
		return arg4 = false;
}
};



}