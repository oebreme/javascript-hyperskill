const waterFactor = 200;
const milkFactor = 50;
const coffeeFactor = 15;

const input = require('sync-input');

console.log("Write how many cups of coffee you will need:");
let userInput = input();

console.log(`For ${userInput} cups of coffee you will need:`);
console.log(`${userInput * waterFactor} ml of water`);
console.log(`${userInput * milkFactor} ml of milk`);
console.log(`${userInput * coffeeFactor} g of coffee beans`);