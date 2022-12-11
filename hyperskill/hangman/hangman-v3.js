const words = ['python', 'java', 'swift', 'javascript'];
let wordToGuess = '';

function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordToGuess = words[randomIndex];
}

const input = require('sync-input')

console.log("H A N G M A N");
chooseRandomWord();
let userInput = input("Guess the word: ");
if (userInput === wordToGuess) {
    console.log("You survived!");
} else {
    console.log("You lost!");
}
