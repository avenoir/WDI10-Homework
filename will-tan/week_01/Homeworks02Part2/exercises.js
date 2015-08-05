// DrEvil

// Create a function called DrEvil. It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

//   DrEvil(10): 10 dollars
//   DrEvil(1000000): 1000000 dollars (pinky)

var DrEvil = function(dollar)
{
	if (dollar === 1000000)
	{
		console.log("DrEvil(" + dollar + "): " + dollar + " dollars (pinky)");
	}
	else
	{
		console.log("DrEvil(" + dollar + "): " + dollar + " dollars");
	}
};

DrEvil(10);
DrEvil(1000000);


// Create a function called mixUp. It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each. You can assume that the strings are at least 2 characters long. For example:

//   mixUp('mix', pod'): 'pox mid'
//   mixUp('dog', 'dinner'): 'dig donner'
// Look up the JavaScript string reference to find methods which may be useful!

var mixUp = function(string1, string2)
{
	var a = string1.substr(0, 2);
	var b = string2.substr(0, 2);
	var c = string1.slice(2);
	var d = string2.slice(2);
	var combined1 = b + c;
	var combined2 = a + d;
	var result = combined1.concat(" " + combined2);
	console.log("mixUp('" + string1 + "', " + "'" + string2 + "'): " + "'" + result + "'");
};

mixUp("mix", "pod");
mixUp("dog", "dinner");


// FixStart

// Create a function called fixStart. It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself. You can assume that the string is at least one character long. For example:

// fixStart('babble'): 'ba**le'

var fixStart = function(string)
{
	var firstChar = string.charAt(0);
	var newStr = "";
	var subChar = "";

	for (var i = 1; i < string.length; i++)
	{
		subChar = string.charAt(i);

		if (subChar === firstChar)
		{
			subChar = '*';
		}
		else
		{
			subChar = string.charAt(i);
		}
		newStr = newStr + subChar;
	}
	console.log("fixStart('" + string + "'): '" + (firstChar + newStr) + "'");
};

fixStart("babble");


// Verbing

// Create a function called verbing. It should take a single argument, a string. If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead. If the string length is less than 3, it should leave it unchanged. For example:

//   verbing('swim'): 'swimming'
//   verbing('swimming'): 'swimmingly'
//   verbing('go'): 'go'

var verbing = function(string)
{
	var secondLastChar = string.charAt(string.length-2);

	if ((string.length >= 3) && (string.substr(-3) === 'ing'))
	{
		return (string + 'ly');
	}
	else if (string.length >=3)
	{
		if ((secondLastChar === 'a') || (secondLastChar === 'e') || (secondLastChar === 'i') || (secondLastChar === 'o') || (secondLastChar === 'u'))
		{
			return (string + string.charAt(string.length-1) +'ing');
		}
		else
		{
			return (string +'ing');
		}
	}
	else
	{
		return string;
	}
};

console.log(verbing("tell"));
console.log(verbing("swim"));
console.log(verbing("swimming"));


// Create a function called notBad that takes a single argument, a string.

// It should find the first appearance of the substring 'not' and 'bad'.
// If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
// If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
var notBad = function(string)
{
	var indexNot = string.indexOf('not');
	var indexBad = string.indexOf('bad');
	if (((string.includes('not')) && (string.includes('bad'))) && (indexNot < indexBad))
	{
		var newStr = string.substring(0, indexNot) + "good" + string.substring(indexBad + 3, string.length);
		return newStr;
	}
	else
	{
		return string;
	}
};

console.log(notBad("This dinner is not asdbasfiojfioajef bad!"));
console.log(notBad("This movie is so bad!"));
console.log(notBad("This dinner is bad!"));
