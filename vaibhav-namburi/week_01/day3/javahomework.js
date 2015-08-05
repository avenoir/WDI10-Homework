var enteredWord = prompt(" Enter a word for user to guess").split("");
var blankWord = [];
for(var i = 0; i < enteredWord.length ; i++){
		blankWord.push("_");
}

var guessLetter = function(letter){

		var indexLocations = [];
		for(var i=0 ; i < enteredWord.length ; i++)
		{
				if(enteredWord[i] === letter) indexLocations.push(i);
			
				var position = indexLocations.shift();

					blankWord[position] = letter;
		}

			alert(" Congratulations your guess of " + letter + " was right " + " we now have " + blankWord.join(""));

			if(blankWord.indexOf("_") === -1){ alert("YAAY YOU BEAST, YOU SOOLVEED IT, DRINKS ON JACK");}
	
}


while(!(blankWord.indexOf("_")===-1)){

	guessLetter(prompt("Hello user2 please guess a character"));

}


