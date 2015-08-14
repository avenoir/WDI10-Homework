
var square = function() {
	var num = document.getElementById("square-input").value;
	alert(num * num);
};

var half = function() {
	var num = document.getElementById("half-input").value;
	debugger;
	alert(num / 2);
};

var fraction = function() {
	var num1 = document.getElementById("percent1-input").value;
	var num2 = document.getElementById("percent2-input").value;
	alert((num1 / num2) * 100);
};

var area = function() {
	var radius = document.getElementById("percent1-input").value;
	alert(Math.PI * radius * radius);
};


var squareButton = document.getElementById('square-button');
squareButton.addEventListener('click', square);

var halfButton = document.getElementById('half-button');
halfButton.addEventListener('click', half);

var percentButton = document.getElementById('percent-button');
percentButton.addEventListener('click', fraction);

var areaButton = document.getElementById('area-button');
areaButton.addEventListener('click', area);