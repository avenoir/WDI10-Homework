var solution = document.getElementById("solution");

var squareNumber = function() {
  var numberToSquare = document.getElementById("square-input").value;
  var result = numberToSquare * numberToSquare;
  solution.innerHTML = "Result of squaring: " + numberToSquare + " is: " + result;
};

var halfNumber = function() {
  var numberToHalf = document.getElementById("half-input").value;
  var result = numberToHalf / 2;
  solution.innerHTML = "Result of halving: " + numberToHalf + " is: " + result;
};

var findPercentage = function() {
  var fraction = document.getElementById("percent1-input").value;
  var whole = document.getElementById("percent2-input").value;
  var result = (fraction / whole) * 100;
  solution.innerHTML = fraction + " is " + result + "% of " + whole + ".";
};

var squareButton = document.getElementById("square-button");
squareButton.addEventListener("click", squareNumber);

var halfButton = document.getElementById("half-button");
halfButton.addEventListener("click", halfNumber);

var percentageButton = document.getElementById("percent-button");
percentageButton.addEventListener("click", findPercentage);
