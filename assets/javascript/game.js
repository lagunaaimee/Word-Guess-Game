//console.log("hello world");

var words = ["monster", "witch", "ghost", "candy"];
var chosenWord = "";
var lettersinWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongLetters = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;


function startGame () {
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
}

//check if letter exists in code
function checkLetters(letter) {

    var isLetterInWord = false;

    for (var i=0; i<numBlanks; i++) {
        if(chosenWord[i] == letter) {
            isLetterInWord = true;
        }
    }
}


//Initiates code (calls function)
startGame();

document.onkeyup = function (event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(userGuess);

    //test
    console.log(userGuess);
}

// };

// var letterButtons = $(".letterButtons");
// for (var i = 0; i < letters.length; i++) {
//     console.log("hello world");
//     var button = document.createElement("button");
//     var t = document.createTextNode(letters[i]);
//     button.appendChild(t); 
//     letterButtons.appendChild(button); 
