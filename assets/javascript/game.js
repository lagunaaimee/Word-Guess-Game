console.log("link test");

var words = ["monster", "witch", "ghost", "candy"];
var chosenWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;


function startGame() {
    chosenWord = words[Math.floor(Math.random() * words.length)];
    lettersinWord = chosenWord.split("");
    numBlanks = lettersinWord.length;

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = wins;
    document.getElementById("lossCounter").innerHTML = losses;

    console.log(chosenWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
    //startGame();
}

//check if letter exists in code
function checkLetters(letter) {

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (chosenWord[i] == letter) {
            isLetterInWord = true;
        }
    }
    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (chosenWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        numGuesses--
    }

    //test
    console.log(blanksAndSuccesses);
}

function roundComplete() {
    console.log("Win Count:" + wins + " | Loss Count:" + losses + " | Guesses Left " + guessesLeft);

    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("");

    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        wins++;
        alert("YOU WIN!!");

        document.getElementById("winCounter").innerHTML = wins;

        //Initiates code (calls function)  
        startGame();
    }

    else if (guessesLeft == 0) {
        losses++;
        alert("You lost!");

        document.getElementById("lossCounter").innerHTML = losses;
        //Initiates code (calls function)
        startGame();
    }
}


    document.onkeyup = function (event) {
        var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
        checkLetters(userGuess);
        roundComplete();

        //test
        console.log(userGuess);
    }

