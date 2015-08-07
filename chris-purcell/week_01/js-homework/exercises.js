var squareNumber = function(num1){
	var answer = num1 * num1;
	console.log("The result of squaring the number is " + answer + ".");
	return answer;
}

var halfNumber = function(num1){
	var answer = num1 / 2;
	console.log("Half of " + num1 + " is " + answer + ".");
	return answer;
}

var percentOf = function(num1, num2){
	var answer = num1 / num2 * 100;
	console.log(num1 + " is " + answer + "%" + " of " + num2);
	return answer;
}

var areaOfCircle = function(radius){
	var answer = (Math.PI * (radius * radius));
	var decAnswer = answer.toFixed([2])
	console.log("The area of a circle with the radius " + radius + ", is " + decAnswer + ".");
	return decAnswer;
}

var finalProduct = function(num){
	var answer1 = halfNumber(num);
	var answer2 = squareNumber(answer1);
	var answer3 = areaOfCircle(answer2);
	var answer4 = percentOf(answer2, answer3);
}

var drEvil = function(dollars){
	if (dollars >= 1000000){
		console.log(dollars + " dollars" + "(pinky)");
	} else {
		console.log(dollars + " dollars");
	}
}

drEvil(3000)
drEvil(10000000)
drEvil(9983766332)

var mixUp = function(word1, word2){
	var slice1 = word1.slice(0, 2);
	var slice2 = word2.slice(0, 2);
	var swapedWords1 = slice1 + word2.slice(word1.length - 1);
	var swapedWords2 = slice2 + word1.slice(word1.length - 1);
	
	return swapedWords1 + " and " + swapedWords2;
}
console.log(mixUp("dog", "daniel"));

var mixUpp = function(word1, word2){
	var slice1 = word1;
	var slice2 = word2;
	var slice3 = word1;
	var slice4 = word2;
	var sliceOf1 = slice1.slice(0, 1);
	var sliceOf2 = slice2.slice(0, 1);
	var sliceOf3 = slice3.slice(1);
	var sliceOf4 = slice4.slice(1);
	console.log(sliceOf1 + sliceOf4);
	console.log(sliceOf2 + sliceOf3);
}
mixUpp("slog", "david")

var fixStart = function(word){
	var firstChar = word.slice(0, 1);
	var replacement = /firstChar/i;
	var trueString = word.replace(replacement, "*")

}




