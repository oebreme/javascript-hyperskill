const wordList = ['python', 'java', 'swift', 'javascript'];

let hangman = {
    wordToGuess: '',
    hyphenWord: '',
    isWon: false
}

let player = {
    attempts: 8,
    guess: ''
}

// game
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

while(player.attempts > 0 || hangman.isWon) {
    printHyphenWord();
    depletePlayerAttempt();
    player.guess = input(`Input a letter: `);

    if (playerGuessIsContained()) {
        manipulateHyphenWord();
    } else {
        console.log("That letter doesn't appear in the word.");
    }
}
console.log('Thanks for playing!');
