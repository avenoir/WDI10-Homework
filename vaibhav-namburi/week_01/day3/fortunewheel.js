var enteredWord = prompt(" Enter a word for user to guess").split("");
var blankWord = [];
for(var i = 0; i < enteredWord.length ; i++){
		blankWord.push("_");
}

var intialMoney=0;

var randomMoney= function(){

	return Math.round(Math.random()*10 + 1) ;

}

var guessLetter = function(letter){

	var buffer = false;

		
		for(var i=0 ; i < enteredWord.length ; i++)
		{
				if(enteredWord[i] === letter) {

					blankWord[i] = letter;

					intialMoney+=randomMoney();

					buffer=true;
				}

		}

			if(!buffer) {

				intialMoney-=randomMoney();
				alert("Whoops , wrong guess, try again, remember you keep losing money = " + intialMoney);

			}

			else{

			alert(" Congratulations your guess of " + letter + " was right.\n " + " You won " + intialMoney + " and we now have " + blankWord.join(""));
			}

			if(blankWord.indexOf("_") === -1){ alert("YAAY YOU BEAST, YOU SOOLVEED IT, DRINKS ON JACK");}
	
}


while(!(blankWord.indexOf("_") === -1)){

	guessLetter(prompt("Hello user2 please guess a character, you currently have "));

}