
/*
  talking to wordNik api to generate random synonyms
 */
var baseUrl = "http://api.wordnik.com/v4/word.json/";
var apiKey = "a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

function getSynonyms (theWord, callback) {
	var url = baseUrl + theWord + "/relatedWords?useCanonical=true&relationshipTypes=synonym&limitPerRelationshipType=100&api_key=" + apiKey;
	var jxhr = $.ajax ({ 
		url: url,
		dataType: "text",
		timeout: 30000 
	})
	.success (function (data, status) { 
		var array = JSON.parse (data);
		callback (array[0].words);
	}) 
	.error (function (status) { 
		console.log ("getSynonyms: url == " + url + ", error == " + JSON.stringify (status, undefined, 4));
	});
}

/*
  let user choose the word to generate synonyms accordingly
*/
var correctWord = "happy";
getSynonyms (correctWord, function (words) {
	var wordList = words;

	// randomly choose a word from the list
	var randomNum = Math.floor(Math.random() * wordList.length);

	// the word needs to be guessed is the one that randomly choosed
	var toBeGuessed = wordList[randomNum];
	console.log(toBeGuessed);

	// according to the length of the word, create cells for it and display on the screen
	var generateCells = function() {
		var guessingWord = $('<table/>');
		var tr = $('<tr/>');

		for (var i = 0; i < toBeGuessed.length; i++) {
			var td = $('<td/>');
			td.addClass('cell');
			tr.append(td);
			guessingWord.append(tr);
			$('.guessing-word-table').append(guessingWord);
		}
	};

	var choosedWord = $("<h3>Synonyms of " + correctWord + "</h3>");
	$('.choosing-word').append(choosedWord);


	/*
	  The following methods from 'drawStepOne()' to 'drawStepEight()' are called one by one,
	  when the user guesses the wrong letter everytime.
	*/
	var drawStepOne = function() {
		$('.row-ten td').html("---");
	};

	var drawStepTwo = function() {
		$('.row-one .col-one').html("|");
		$('.row-two .col-one').html("|");
		$('.row-three .col-one').html("|");
		$('.row-four .col-one').html("|");
		$('.row-five .col-one').html("|");
		$('.row-six .col-one').html("|");
		$('.row-seven .col-one').html("|");
		$('.row-eight .col-one').html("|");
		$('.row-nine .col-one').html("|");
		$('.row-ten .col-one').html("|-");
	};

	var drawStepThree = function() {
		$('.row-one .col-one').html("|-");
		$('.row-one .col-two').html("---");
		$('.row-one .col-three').html("---");
		$('.row-one .col-four').html("---");
		$('.row-one .col-five').html("---");
	};

	var drawStepFour = function() {
		$('.row-two .col-five').html("|");
		var img = $('<img src="images/hangman.png">');
		img.addClass('hangmanImg');
		$('.row-three .col-five').html(img);
	};
		
	var drawStepFive = function() {
		$('.row-four .col-five').html("|");
		$('.row-five .col-five').html("|");
		$('.row-six .col-five').html("|");
	};
		
	var drawStepSix = function() {
		$('.row-five .col-four').html("/");
		$('.row-five .col-six').html("\\");
	};

	var drawStepSeven = function() {
		$('.row-seven .col-four').html("/");
		$('.row-eight .col-three').html("/");
	};

	var drawStepEight = function() {
		$('.row-seven .col-six').html("\\");
		$('.row-eight .col-seven').html("\\");
	};


	/* 
	  this method calls the above methods depends on how many wrong guesses the user has made
	  if the user makes 8 wrong guess, return 
	*/
	var checkNumberOfWrongGuesses = function(num) {
		if (num === 1) {
			drawStepOne();
		} else if (num === 2) {
			drawStepTwo();
		} else if (num === 3) {
			drawStepThree();
		} else if (num === 4) {
			drawStepFour();
		} else if (num === 5) {
			drawStepFive();
		} else if (num === 6) {
			drawStepSix();
		} else if (num === 7) {
			drawStepSeven();
		} else if (num === 8) {
			drawStepEight();
			alert("You lost!\n The correct word is: " + toBeGuessed);
			displayLostImage();
			return;
		}			
	};

	// display image when loosing the game
	var displayLostImage = function() {
		var img = $('<img src="images/sad_devil.png">');
		$('.hangman-lost').append(img);
	};

	var displayWonImage = function() {
		var img = $('<img src="http://media.giphy.com/media/67j0Iy0UzvBG8/giphy.gif">');
		$('.hangman-lost').append(img);
		var winMsg = $('<h2> You Won! </h2>');
		winMsg.addClass('win-msg');
		winMsg.appendTo($('.hangman-lost'));

	}


	$(document).ready(function() {
		var numberOfWrongGuesses = 0;
		var numberOfLives = 8;
		generateCells();

		// $('.score').append("Your current score: " + score);

		// when click on the alphabet letter on the screen
		$('.char').on('click', function() {
			var userInput = $(this).html();
			$(this).css('background-color', 'red');

			// if the guessed letter does not match any letter in the correct word
			if (toBeGuessed.toLowerCase().indexOf(userInput) === -1) {
				numberOfWrongGuesses += 1;
				numberOfLives -= 1;

				var msg = "You have " + numberOfLives + " lives left.";
				$('.display-lives').html(msg);
			} 

			checkNumberOfWrongGuesses(numberOfWrongGuesses);

			// if the user has correctly guessed the letter, display it in the cell
			for (var i = 0; i < toBeGuessed.length; i++) {
				if (userInput === toBeGuessed.toLowerCase().charAt(i)) {
					$($('.guessing-word-table tr td')[i]).html(userInput);
				}
			}

			for (var j = 0; j < toBeGuessed.length; j++) {
				var empty = $('.guessing-word-table tr td:empty').length;

				if (empty === 0) {
					alert("you won");
					displayWonImage();
					return;
				}
			}
		});

		// refresh the page when clicks on 'reset' button
		$('#reset-btn').on('click', function() {
			window.location.reload();
		});

		// display the correct word in the cells when clicks on 'give up' button
		$('#give-up-btn').on('click', function() {
			for (var i = 0; i < toBeGuessed.length; i++) {
				$($('.guessing-word-table tr td')[i]).html(toBeGuessed.toLowerCase().charAt(i));
			}
			alert("You have given up");
			return;
		});

		// display single letter in the empty cell if clicks on 'hint' button
		var hintLimit = 0;
		$('#hint-btn').on('click', function() {
			hintLimit += 1;
			if (hintLimit === 3) {
				alert("You can only see 2 hints");
				return;
			}
			
			for (var i = 0; i < toBeGuessed.length; i++) {
				if ($($('.guessing-word-table tr td')[i]).html() === "") {
					$($('.guessing-word-table tr td')[i]).html(toBeGuessed.toLowerCase().charAt(i));

					// when clicks on the 'hint' button, if it made the user guess the whole correct word
					var empty = $('.guessing-word-table tr td:empty').length;
					if (empty === 0) {
						alert("you won");
						displayWonImage();
						return;
					}
					return;
				} 
			}
		});
	});
});





