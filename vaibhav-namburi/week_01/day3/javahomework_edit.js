var enteredWord = prompt(" Enter a word for user to guess").split("");
var blankWord = [];
for(var i = 0; i < enteredWord.length ; i++){
		blankWord.push("_");
}

var guessLetter = function(letter){
	var buffer = false;

				for(var i=0 ; i < enteredWord.length ; i++)
		{
				if(enteredWord[i] === letter) {

					blankWord[i] = letter;

					buffer=true;
				}

		}

			if(!buffer) {
				alert("Whoops , wrong guess, try again");
			}

			else{
			alert(" Congratulations your guess of " + letter + " was right.\n " + " and we now have " + blankWord.join(""));
			}

			if(blankWord.indexOf("_") === -1){
			 alert("YAAY YOU BEAST, YOU SOOLVEED IT, DRINKS ON JACK");
			}
	
}


while(!(blankWord.indexOf("_")===-1)){

	guessLetter(prompt("Hello user2 please guess a character"));

}


