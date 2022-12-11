const wordList = ['python', 'java', 'swift', 'javascript'];
let isGoing = true;

let hangman = {
    wordToGuess: '',
    hyphenWord: '',
    isWon: false,
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
function startGame() {
    console.log(`H A N G M A N // ${player.attempts} attempts\n`);

    chooseRandomWord();
    createHyphenWord();
}

function chooseRandomWord() {
    let randomIndex = Math.floor(Math.random() * wordList.length);
    hangman.wordToGuess = wordList[randomIndex];
}

function createHyphenWord() {
    let newHyphenWord = '';
    for (const e of hangman.wordToGuess) {
        newHyphenWord = newHyphenWord + '-'
    }
    hangman.hyphenWord = newHyphenWord;
}

function printHyphenWord() {
    console.log(hangman.hyphenWord);
}

function manipulateHyphenWord() {
    let wordToGuessArr = hangman.wordToGuess.split("");
    let hyphenWordArr = hangman.hyphenWord.split("");

    for (const e of wordToGuessArr) {
        let insertCharAt = wordToGuessArr.indexOf(player.guess);

        if (player.guess !== -1) {
            hyphenWordArr[insertCharAt] = player.guess;
            wordToGuessArr[insertCharAt] = 'hä';
        }
    }

    let rebuildHyphenWord = ''
    for (const e of hyphenWordArr) {
        rebuildHyphenWord = hyphenWordArr.join('');
    }
    hangman.hyphenWord = rebuildHyphenWord;
}


// player
function depletePlayerAttempt() {
    player.attempts = player.attempts - 1;
}

function playerGuessIsContained() {
    return hangman.wordToGuess.includes(player.guess);
}

function addGuessToPreviousGuesses() {
    player.previousGuesses.push(player.guess);
}

function containsIllegalChars(playerGuess) {
    return /[^a-z]/g.test(playerGuess);
}

function playerGuessNotNew(playerGuess) {
    return player.previousGuesses.includes(playerGuess);
}

function getPlayerInput() {
    let continueAsking = true;
    while(continueAsking) {
        let userInput = input("Input a letter: ");
        if (userInput.length > 1 || userInput.length < 1) {
            console.log("Please, input a single letter.\n");
            printHyphenWord();
        } else if (containsIllegalChars(userInput)) {
            console.log("Please, enter a lowercase letter from the English alphabet.\n");
            printHyphenWord();
        } else if (playerGuessNotNew(userInput)) {
            console.log("You've already guessed this letter.\n");
            printHyphenWord();
        } else {
            continueAsking = false;
            player.guess = userInput;
        }
    }
}

const input = require('sync-input');

startGame();
while(isGoing) {
    printHyphenWord();

    getPlayerInput();

    if (playerGuessIsContained()) {

        manipulateHyphenWord();
        addGuessToPreviousGuesses();

    } else {
        if (player.guess.length > 1 || player.guess.length < 1) {
            console.log("Please, input a single letter.\n");
        } else if (containsIllegalChars(player.guess)) {
            console.log("Please, enter a lowercase letter from the English alphabet.\n");
        } else if (playerGuessNotNew(player.guess)) {
            console.log("You've already guessed this letter.\n");
        } else {
            console.log("That letter doesn't appear in the word.\n");
        }

        depletePlayerAttempt();
        addGuessToPreviousGuesses();

    }
    checkIfGameOver();
}

if (hangman.isWon) {
    console.log(`You guessed the word ${hangman.wordToGuess}!`);
    console.log("You survived!");
} else if (!hangman.isWon) {
    console.log("You lost!")
}
