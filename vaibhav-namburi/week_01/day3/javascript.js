var maxOfTwoNumbers = function  (input1,input2) {
	
	if(input1 > input2)
		return input1;

	else
		return input2;

}

var maxOfThreeNumbers = function (input1,input2,input3){

	var x = input2;

	if (input1 > input2) {
		x = input1;
	}

	if (x > input3){
		return x;
	}

	else
		return input3;

}

var vowel = function (char){

	var array = ["a" , "e" , "i" , "o" , "u"]

	var i = 0;

	while(i < array.length){

		if(char === array[i]){
			return " a vowel"
			break;
		}

		i++;

	}

	return "not a vowel";

}

//  sum array

var sumArray = function(array){

	var x = 0;

	for(var i = 0 ; i < array.length ; i ++){

		array[i] = parseInt(array[i]);

		x+=array[i];

	}

	return x;

}

// var prompit = prompt("Enter a list of numbers");
// var arrayPrompt = prompit.split(" ");
// console.log(sumArray(arrayPrompt));

//  multiply array

var multiplyArray = function(array){

	var x = 1;

	for(var i = 0 ; i < array.length ; i ++){

		array[i] = parseInt(array[i]);

		x= x * array[i];

	}

	return x;

}

// var prompit = prompt("Enter a list of numbers");
// var arrayPrompt = prompit.split(" ");
// console.log(multiplyArray(arrayPrompt));


var reverseString = function (array){

	var newArray = array.split(" ");
	var reversedArray=[];
	var reversedWordArray=[];

	for ( var i = newArray.length -1 ; i >=0 ; i--){

		reversedArray.push(newArray[i]);

	}
	// debugger;
	 var j = 0;

	while (j <= reversedArray.length + 1){

		var newWord = reversedArray.shift();
		var reversedWord = newWord.split("").reverse().join("");
		reversedWordArray.push(reversedWord);
		reversedWordArray.join(" ");
		j++;
	}

	console.log( reversedWordArray.join(" ") )
	return reversedWordArray;
}

// reverseString( "hello how hi" )

// console.log(reverseString(prompt("Enter a string")));


// find longest Word


var findLongestWord = function(array){

	var array1 = array.split(" ");
	var longest = 0;
	for(var i =0 ; i < array1.length ; i++){

		if(array1[i].length > longest){

		longest = array1[i].length;

		}

	}

	return "The length of the longest word was " + longest;
}

// console.log(findLongestWord("a be see deee gexhexs effff gexhex"));

//  display longest word


var filterLongestWord = function(array){

	var array1 = array.split(" ");
	var longest = "";
	for(var i =0 ; i < array1.length ; i++){

		if(array1[i].length > longest.length){

		longest = array1[i];

		}

	}

	return "The longest word was " + longest;
}

// console.log(filterLongestWord("a be see deee gexhexs effff gexhex"));





