let letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

let wins = 0;
let losses = 0;
let guessesLeft = 5;
let yourGuesses = [];

let randomNumber = Math.floor(Math.random() * letters.length);
console.log(randomNumber);
let computerGuess = letters[randomNumber]



document.onkeyup = function (event) {
    userGuess = event.key;
    yourGuesses.push(userGuess);

    if (userGuess === computerGuess) {
        wins++;
        guessesLeft = 5;
        yourGuesses = [];
        alert("Wow, look at you! You got it...now do it again!")
    }


    else if (userGuess !== computerGuess) {

        if (guessesLeft === 1) {
            losses++;
            guessesLeft = 5;
            yourGuesses = [];
           alert("I predicted you would lose")
        }
        else {  
            guessesLeft--;
            alert("Haha, try again")
        }
    }


    let html = "<h1>The Psychic Game</h1>" +
        "<p>Guess what letter I'm thinking of!</p>" +
        "<p>Guesses Left: " +
        guessesLeft +
        "</p>" +
        "<p>Your Guesses: " +
        yourGuesses +
        "</p>" +
        "<p>Wins: " +
        wins +
        "</p>" +
        "<p>Losses: " +
        losses +
        "</p>"
        ;
    // Placing the html into the game ID
    document.querySelector('#game').innerHTML = html;

}




