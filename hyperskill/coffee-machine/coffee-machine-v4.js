let coffeeMachine = {
    waterAvailable: 400,
    milkAvailable: 540,
    coffeeAvailable: 120,
    cupsAvailable: 9,
    moneyAvailable: 550
}

function printCoffeeMachineStatus() {
    console.log("The coffee machine has:")
    console.log(coffeeMachine.waterAvailable + " ml of water");
    console.log(coffeeMachine.milkAvailable + " ml of milk");
    console.log(coffeeMachine.coffeeAvailable + " g of coffee beans");
    console.log(coffeeMachine.cupsAvailable + " disposable cups");
    console.log("$" + coffeeMachine.moneyAvailable + " of money");
}

const espresso = {
    waterNeeded: 250,
    milkNeeded: 0,
    coffeeNeeded: 16,
    cost: 4
}
const latte = {
    waterNeeded: 350,
    milkNeeded: 75,
    coffeeNeeded: 20,
    cost: 7
}
const cappuccino = {
    waterNeeded: 200,
    milkNeeded: 100,
    coffeeNeeded: 12,
    cost: 6
}

const input = require('sync-input');


let userAction = input("Write action (buy, fill, take): ");

// buy
function depleteWater(waterNeeded) {
    coffeeMachine.waterAvailable = coffeeMachine.waterAvailable - waterNeeded;
}

function depleteMilk(milkNeeded) {
    coffeeMachine.milkAvailable = coffeeMachine.milkAvailable - milkNeeded;
}

function depleteCoffee(coffeeNeeded) {
    coffeeMachine.coffeeAvailable = coffeeMachine.coffeeAvailable - coffeeNeeded;
}

function depleteCups() {
    coffeeMachine.cupsAvailable = coffeeMachine.cupsAvailable - 1;
}

function increaseMoney(productCost) {
    coffeeMachine.moneyAvailable = coffeeMachine.moneyAvailable + productCost;
}

function makeEspresso() {
    depleteWater(espresso.waterNeeded);
    depleteMilk(espresso.milkNeeded);
    depleteCoffee(espresso.coffeeNeeded);
    depleteCups();
    increaseMoney(espresso.cost);
}

function makeLatte() {
    depleteWater(latte.waterNeeded);
    depleteMilk(latte.milkNeeded);
    depleteCoffee(latte.coffeeNeeded);
    depleteCups();
    increaseMoney(latte.cost);
}

// fill
function fillWater() {
    let waterAdded = parseInt(input("Write how many ml of water you want to add:"));
    coffeeMachine.waterAvailable = coffeeMachine.waterAvailable + waterAdded;
}

function fillMilk() {
    let milkAdded = parseInt(input("Write how many ml of milk you want to add:"));
    coffeeMachine.milkAvailable = coffeeMachine.milkAvailable + milkAdded;
}

function fillCoffee() {
    let coffeeAdded = parseInt(input("Write how many grams of coffee beans you want to add:"));
    coffeeMachine.coffeeAvailable = coffeeMachine.coffeeAvailable + coffeeAdded;
}

function fillCups() {
    let cupsAdded = parseInt(input("Write how many disposable cups you want to add: "));
    coffeeMachine.cupsAvailable = coffeeMachine.cupsAvailable + cupsAdded;
}

// take
function takeOutMoney() {
    console.log(`I gave you $${coffeeMachine.moneyAvailable}`);
    coffeeMachine.moneyAvailable = 0;
}

function makeCappuccino() {
    depleteWater(cappuccino.waterNeeded);
    depleteMilk(cappuccino.milkNeeded);
    depleteCoffee(cappuccino.coffeeNeeded);
    depleteCups();
    increaseMoney(cappuccino.cost);
}

printCoffeeMachineStatus();
if (userAction === "buy") {
    let coffeeChoice = input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    if (coffeeChoice == 1) {
        makeEspresso();
    } else if (coffeeChoice == 2) {
        makeLatte();
    } else if (coffeeChoice == 3) {
        makeCappuccino();
    }
} else if (userAction === "fill") {
    fillWater();
    fillMilk();
    fillCoffee();
    fillCups();
} else if (userAction === "take") {
    takeOutMoney();
}
printCoffeeMachineStatus();