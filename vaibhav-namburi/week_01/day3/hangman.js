var enteredWord = prompt(" Enter a word for user to guess").split("");
var blankWord = [];
var rightInputArray=[];
var wrongInputArray=[];


for(var i = 0; i < enteredWord.length ; i++){
		blankWord.push("_");
}



var guessLetter = function(letter){

	if( blankWord.indexOf(letter) !== -1 ){
		alert("This has already been entered");
	}

	var buffer = false;
	
		for(var i=0 ; i < enteredWord.length ; i++)
		{		

				if(enteredWord[i] === letter) {

					blankWord[i] = letter;

					buffer=true;

					rightInputArray.push(letter);

				}			

		}

		if(!buffer) {

				wrongInputArray.push(letter);

				if(wrongInputArray.length >= 6 ){
					alert( "Looks like you've run out of chances, bibi" );
					 return true;
				}
					alert( "Whoops , wrong guess, try again" );
		}

		else{

				console.log(" Congratulations your guess of " + letter + " was right.\n " + " You won " + " and we now have " + blankWord.join(""));
		}


		if(blankWord.indexOf("_") === -1){ 

				console.log("YAAY YOU BEAST, YOU SOOLVEED IT, DRINKS ON JACK");
		}
	
}


while(!(blankWord.indexOf("_") === -1)){

	if(guessLetter(prompt("Hello user2 please guess a character"))){

		break;
	}

}