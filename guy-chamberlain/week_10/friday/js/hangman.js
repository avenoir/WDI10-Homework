window.onload = function() {

    // A simple hangman game in vanilla javascript.
    // I'd like to thank http://codepen.io/cathydutton/pen/ldazc
    // from which most of this code was ripped off from :)
    // I fixed a few bugs, simplified it a bit, added logic for reset
    // and give up and fixed some spelling errors.
    

    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];

    var word; // Selected word
    var wordGuess = []; // Array of the word as it is being guessed
    var lives = 8; //  The number of lives starting with 10
    var correctGuesses = 0; // Count of correct geusses

    var livesLeft = document.getElementById("mylives");

    

    var createLetterButtons = function() {
        var myButtons = document.getElementById('buttons');
        var letters = document.createElement('ul');
        letters.id = 'alphabet'
        myButtons.appendChild(letters);

        for (var i = 0; i < alphabet.length; i++) {
            var letter = document.createElement('li');
            letter.id = 'letter';
            letter.innerHTML = alphabet[i];
            letters.appendChild(letter);
            letter.onclick = function() {
                var geuss = (this.innerHTML);
                this.setAttribute("class", "active");
                this.onclick = null;
                for (var i = 0; i < word.length; i++) {
                    if (word[i] === geuss) {
                        wordGuess[i].innerHTML = geuss;
                        correctGuesses += 1;
                    }
                }
                var j = (word.indexOf(geuss));
                if (j === -1) {
                    lives -= 1;
                }        
                showLives();
            }
        }
    }

    var createResultsList = function() {
        var wordHolder = document.getElementById('hold');
        var correct = document.createElement('ul');
        wordHolder.appendChild(correct);

        for (var i = 0; i < word.length; i++) {
            correct.setAttribute('id', 'my-word');
            var guess = document.createElement('li');
            guess.setAttribute('class', 'guess');
            guess.innerHTML = "_";

            wordGuess.push(guess);
            correct.appendChild(guess);
        }
    }

    var showLives = function() {
        livesLeft.innerHTML = "You have " + lives + " lives";
        if (lives < 1) {
            livesLeft.innerHTML = "Game Over";
            // Show the word
            for (var i=0; i < word.length; i++) {
                wordGuess[i].innerHTML = word[i];
            }
        }
        if (correctGuesses === wordGuess.length) {
           livesLeft.innerHTML = "You Win!";
        }
    }

    var startGame = function() {
        var words = [
            "desk", "lamp", "window", "light", "wall", "pencil", "ruler",
            "computer", "book", "chair", "heater", "projector",
            "cup", "bottle", "sink", "carpet", "crayon"
        ];

        word = words[Math.floor(Math.random() * words.length)];
        
        console.log(word);

        createLetterButtons();
        createResultsList();
        showLives();
    }

    document.getElementById('reset').onclick = function() {
        location.reload();
    }

    document.getElementById('giveup').onclick = function() {
        // Show the word
        for (var i=0; i < word.length; i++) {
            wordGuess[i].innerHTML = word[i];
        }
    }

    startGame();

}