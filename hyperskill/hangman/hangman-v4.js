const words = ['python', 'java', 'swift', 'javascript'];
let wordToGuess = '';
let wordHint = '';

function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * words.length);
    wordToGuess = words[randomIndex];
}

function createWordHint(word) {
    let splitted = word.split("");
    // replace with -
    for (let i = 0; i < splitted.length; i++) {
        if (i > 3) {
            splitted[i] = '-';
        }
    }
    // rebuild string
    for (const element of splitted) {
        wordHint = wordHint.concat(element);
    }
}

const input = require('sync-input')

console.log("H A N G M A N");

chooseRandomWord();
createWordHint(wordToGuess);
let userInput = input(`Guess the word ${wordHint}: `);
if (userInput === wordToGuess) {
    console.log("You survived!");
} else {
    console.log("You lost!");
}
