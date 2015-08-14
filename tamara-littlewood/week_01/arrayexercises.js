// Array and Functions Bonus Material


// Define a function maxOfTwoNumbers 
// that takes two numbers as arguments and 
// returns the largest of them. 
// Use the if-then-else construct available in Javascript. 

var maxOfTwoNumbers = function ( num1, num2 ) {
    if ( num1 > num2 ) {
        return num1;
    } else {
        return num2;
    }
}

maxOfTwoNumbers (32, 50);


// Define a function maxOfThree 
// that takes three numbers as arguments 
// and returns the largest of them.

var maxOfThree = function ( num1, num2, num3 ) {
    if ( num1 > num2 && num1 > num3 ) {
        return num1;
    } else if ( num2 > num1 && num2 > num3 ) {
        return num2;
    } else if ( num3 > num1 && num3 > num2 ) {
        return num3;
    }
}

maxOfThree( 3 , 6 , 8 )

// Write a function that takes a character
// (i.e. a string of length 1) 
// and returns true if it is a vowel, 
// false otherwise.


var voweling = function ( string ) {
    if ( string === 'a' || string === 'e' || string === 'i' || string === 'o' || string === 'u' ) {
        return true;
    } else {
        return false;
    }
}

voweling ( 'a' );
voweling ( 'b' );



// Define a function sumArray 
// and a function multiplyArray

// that sums and multiplies (respectively) all the numbers in an array of numbers. // For example, 
// sumArray([1,2,3,4]) should return 10, 
// and multiplyArray([1,2,3,4]) should return 24.

var anArray = [ 1, 2, 3, 4 ];

var sumArray = function ( array ) {
    var result = 0;
    for ( var i = 0; i < array.length; i++ ) {
        result = array[i] + result;
        console.log( result );  
    }
      
    return result;
}


sumArray(anArray);

var multiplyArray = function ( array ) {
    var result = 1;
    for ( var i = 0; i < array.length; i++ ) {
        result = array[i] * result;
        console.log( result );
    }
    return result;
}
multiplyArray(anArray);



// Bonus

// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

var reverseString = function ( string ) {
    var result;
    for ( var i = string.length - 1; i >= 0; i-- ) {
        result = string[i];
        console.log( string[i] );
    }
    return result;
}
reverseString( 'this' );



// Write a function findLongestWord
// that takes an array of words
// and returns the length of the longest one.


// Write a function findLongestWord
// that takes an array of words
// and returns the length of the longest one.




var longArray = ['tester', 'totally', 'testingthis'];

// Using iterating...

var findLongestWord = function ( array ) {
    var result = [];
    for ( var i = 0; i < array.length; i++ ) {
        result[i] = array[i].length;
        console.log(result[i])
        }
}

findLongestWord( longArray );

// Using Sort

var longestWordSort = function ( array ) {
    var sorted = longArray.sort(function (a,b) {
        return a.length < b.length;
    });
    return (sorted[0].length);
}

longestWordSort(longArray);





// Write a function filterLongWords
// that takes an array of words 
// and an number i 
// and returns the array of words 
// that are longer than i.


var longArray = ['tester', 'totally', 'testingthis', 'one'];

var filterLongerWords = function ( array , i ) {
    var longWords = [];
        for ( var j = 0; j < array.length; j++ ) {
            if (array[j].length > i ) {
                longWords[j] = array[j];
                console.log(longWords[j]);
            }
        }
    return longWords;
}
filterLongerWords(longArray, 4);






