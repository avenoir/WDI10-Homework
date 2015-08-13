var sqrButton = querySelector('#square-button');
var solution = querySelector('#solution');

var sqrFunc = function () {
	var number = document.querySelector('#square-unput').value
	solution.innerHTML = number * number;

}