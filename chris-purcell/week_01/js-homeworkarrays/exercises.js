var answer = ['b', 'a', 'r', 't'];
var guesses = ['_', '_', '_', '_'];
var reward = 0;
var allGuesses = [];
var x = answer;
var y = guesses;
var didYouWin = 0


var guessLetter = function(letter){	
	
	for (i = 0; i < answer.length; i++){	//else if (allGuesses.length <= 6){
											//console.log("sorry bud, you lose.");
		if (letter === answer[i]){
			guesses[i] = letter;
			console.log(guesses);
			console.log("that was the right letter *slowclap*");
			reward = reward + 20;
			allGuesses.push(letter);
			didYouWin = didYouWin++;
		} else {
			console.log('');
		}					
	}
	 
	console.log("$" + reward);
}

if (didYouWin === answer.length){
			console.log('congratulations you win');
}
//Array.prototype.equals
//else if (!(letter === answer[i])){} 
			//reward = reward - 10;