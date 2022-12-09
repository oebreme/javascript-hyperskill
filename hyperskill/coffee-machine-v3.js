const waterFactor = 200;
const milkFactor = 50;
const coffeeFactor = 15;

const input = require('sync-input');

console.log("Write how many ml of water the coffee machine has:");
let waterAvailable = input();
console.log("Write how many ml of milk the coffee machine has:");
let milkAvailable = input();
console.log("Write how many grams of coffee beans the coffee machine has:");
let coffeeAvailable = input();


console.log("Write how many cups of coffee you will need:");
let numberOfCups = input();


function canServe(numberOfCups, waterAvailable, milkAvailable, coffeeAvailable) {
    let waterNeeded = numberOfCups * waterFactor;
    let milkNeeded = numberOfCups * milkFactor;
    let coffeeNeeded = numberOfCups * coffeeFactor;

    return!(waterNeeded > waterAvailable || milkNeeded > milkAvailable || coffeeNeeded > coffeeAvailable);
}

function calculateMaximumServings() {
    let maxWaterServings = waterAvailable / waterFactor;
    let maxMilkServings = milkAvailable / milkFactor;
    let maxCoffeeServings = coffeeAvailable / coffeeFactor;

    let limitingFactor = Math.min(maxWaterServings, maxMilkServings, maxCoffeeServings);
    limitingFactor = Math.trunc(limitingFactor);
    return limitingFactor;
}

let maxServings = calculateMaximumServings();

if (canServe(numberOfCups, waterAvailable, milkAvailable, coffeeAvailable)) {
    let additionalServings = maxServings - numberOfCups;
    if(additionalServings > 0) {
        console.log(`Yes, I can make that amount of coffee (and even ${additionalServings} more than that`);
    }
    console.log("Yes, I can make that amount of coffee");
} else {
    console.log(`No, I can make only ${maxServings} cup(s) of coffee`);
}

// printNeededIngredientAmount(userInput);

function printNeededIngredientAmount(numberOfCups) {
    console.log(`For ${numberOfCups} cups of coffee you will need:`);
    console.log(`${numberOfCups * waterFactor} ml of water`);
    console.log(`${numberOfCups * milkFactor} ml of milk`);
    console.log(`${numberOfCups * coffeeFactor} g of coffee beans`);
}

