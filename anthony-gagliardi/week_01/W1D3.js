//Array & Functions Homework: 1

var maxOfTwoNumbers = function(num1, num2){
	if(num1 < num2){
		return num2
	} else if (num1 > num2){
		return num1
	}
}
console.log(maxOfTwoNumbers(40,04))
console.log(maxOfTwoNumbers(927,137))
console.log(maxOfTwoNumbers(37289076,41057940))
console.log(maxOfTwoNumbers(591025662340673,215708912587125))
console.log(maxOfTwoNumbers(1,2))


//Array & Functions Homework: 2

var maxOfThree = function(){
    var largest = Math.max(926, 963, 911); 
    console.log(largest)
}
maxOfThree()


//Array & Functions Homework: 3




//Array & Functions Homework: 4

var j = [1, 2, 3, 4]
var sumArray = function(){
	var x = j[0] + j[1] + j[2] + j[3];
	console.log(x)
}
sumArray()

var multiplyArray = function(){
	var y = j[0] * j[1] * j[2] * j[3]
	console.log(y)
}
multiplyArray()


// BONUS EXERCISES: reverseString

function reverseString() {
    return "jag testar".split('').reverse().join('');
}
reverseString()


// BONUS EXERCISES: findLongestWord

var words = ['string', 'ding', 'ling', 'chimichonga', 'dimidonga', 'burrito']
var findLongestWord = function(){
	console.log(words.length.max)
}// Unsuccessful


// BONUS EXERCISES: filterLongWords

var wording = ['blue', 'poo', 'to', 'you', 'for', 'now', 'weekone', 'homework', 'daythree']
var filterLongWords = function (){
	for(var i = 0; i <= wording.length; i++){
		console.log(wording(i))
	}
} // Unsuccessful


// HOMEWORK: The Word Guesser

var fox = ['F', 'O', 'X']
var guessLetter = function(){
	for(indexOf(fox == input))
}
guessLetter('P')

// Unsuccessful

