const wordList = ['python', 'java', 'swift', 'javascript'];
let isGoing = true;

let hangman = {
    wordToGuess: '',
    hyphenWord: '',
    isWon: false,
    isGoing: true,
}

let player = {
    attempts: 8,
    guess: '',
    previousGuesses: []
}

// game
function checkIfGameOver() {
    if (player.attempts < 1) {
        isGoing = false;
    }
    if (hangman.hyphenWord === hangman.wordToGuess) {
        hangman.isWon = true;
        isGoing = false;
    }
}

function chooseRandomWordFromWordList() {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    hangman.wordToGuess = wordList[randomIndex];
}

function createHyphenWord() {
    let hyphenWord = '';
    for (const e of hangman.wordToGuess) {
        hyphenWord = hyphenWord + '-'
    }
    hangman.hyphenWord = hyphenWord;
}

function printHyphenWord() {
    console.log(hangman.hyphenWord);
}

function manipulateHyphenWord() {
    if (player.previousGuesses.includes(player.guess)) {
        return;
    }
    let tempHyphenWord = hangman.hyphenWord;
    let tempWordToGuess = hangman.wordToGuess;

    while(tempWordToGuess.includes(player.guess)) {
        let charIndex = tempWordToGuess.indexOf(player.guess);
        tempHyphenWord = setCharAt(tempHyphenWord, charIndex, player.guess);
        tempWordToGuess = setCharAt(tempWordToGuess, charIndex, '#');
    }
    hangman.hyphenWord = tempHyphenWord;
}

function setCharAt(str, index, chr) {
    if(index > str.length-1) return str;
    return str.substring(0, index) + chr + str.substring(index + 1);
}

// player
function depletePlayerAttempt() {
    player.attempts = player.attempts - 1;
}

function playerGuessIsContained() {
    return hangman.wordToGuess.includes(player.guess);
}


const input = require('sync-input')

console.log(`H A N G M A N // ${player.attempts} attempts\n`);

chooseRandomWordFromWordList();
createHyphenWord();

function addGuessToPreviousGuesses() {
    player.previousGuesses.push(player.guess);
}


while(isGoing) {
    printHyphenWord();

    if (hangman.isWon === false || player.attempts > 0) {
        player.guess = input(`Input a letter: // ${player.attempts}`);
    }

    if (playerGuessIsContained()) {
        manipulateHyphenWord();
        if (player.previousGuesses.includes(player.guess)) {
            depletePlayerAttempt();
            console.log("No improvements.")
        }
        addGuessToPreviousGuesses();
    } else {
        depletePlayerAttempt();
        if (player.previousGuesses.includes(player.guess)) {
            console.log("No improvements.")
        } else {
            console.log("That letter doesn't appear in the word.");
        }
        addGuessToPreviousGuesses();
    }
    checkIfGameOver();
}
console.log(hangman.isWon);
if (hangman.isWon) {
    console.log("You guessed the word!");
    console.log("You survived!");
} else if (!hangman.isWon) {
    console.log("You lost!")
}
