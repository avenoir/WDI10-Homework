// Ceate a new Javascript file and link to it with a script tag at the bottom.
// For each operation, create an event listener for the button, and when it's clicked, find the value of the appropriate input and show the result of the calculation in the solution div.
// Bonus: respond to key presses so that the user doesn't have to click the button. 


var squareButton = document.getElementById('square-button');
var halfButton = document.getElementById('half-button');
var percentButton = document.getElementById('percent-button');
var areaButton = document.getElementById('area-button');
var solution = document.getElementById('solution');


var square = function(event){
  var input = document.getElementById('square-input').value;
  var result = input * input;
  solution.innerHTML = result;
}

var half = function(event){
  var input = document.getElementById('half-input').value;
  var result = input / 2;
  solution.innerHTML = result;
}

var area = function(event){
  var input = document.getElementById('area-input').value;
  var result = Math.PI * (input * input);
  solution.innerHTML = result;
}

var percent = function(event){
  var fraction = document.getElementById('percent1-input').value;
  var whole = document.getElementById('percent2-input').value;
  var result = fraction/whole * 100
  solution.innerHTML = result + "%";
}


squareButton.addEventListener('click', square);
halfButton.addEventListener('click', half);
areaButton.addEventListener('click', area);
percentButton.addEventListener('click', percent);


