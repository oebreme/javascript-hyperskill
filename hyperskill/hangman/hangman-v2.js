// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

console.log("H A N G M A N");
let userInput = input("Guess the word: ");
if (userInput === "python") {
    console.log("You survived!");
} else {
    console.log("You lost!");
}