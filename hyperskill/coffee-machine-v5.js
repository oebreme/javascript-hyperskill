let coffeeMachine = {
    waterAvailable: 400,
    milkAvailable: 540,
    coffeeAvailable: 120,
    cupsAvailable: 9,
    moneyAvailable: 550,
    isOn: false
}

function printCoffeeMachineStatus() {
    console.log("\nThe coffee machine has:")
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

function enoughRessources(coffeeType) {
    return coffeeMachine.waterAvailable >= coffeeType.waterNeeded
        && coffeeMachine.milkAvailable >= coffeeType.milkNeeded
        && coffeeMachine.coffeeAvailable >= coffeeType.coffeeNeeded
        && coffeeMachine.cupsAvailable >= 1;
}

function getInsufficientRessource(coffeeType) {
    if (coffeeMachine.waterAvailable < coffeeType.waterNeeded) {
        return "water";
    } else if (coffeeMachine.milkAvailable < coffeeType.milkNeeded) {
        return "milk";
    } else if (coffeeMachine.coffeeAvailable < coffeeType.coffeeNeeded) {
        return "coffee";
    } else if (coffeeMachine.cupsAvailable < 1) {
        return "cups";
    }
}

function makeEspresso() {
    if (enoughRessources(espresso)) {
        depleteWater(espresso.waterNeeded);
        depleteMilk(espresso.milkNeeded);
        depleteCoffee(espresso.coffeeNeeded);
        depleteCups();
        increaseMoney(espresso.cost);
        console.log('I have enough resources, making you a coffee!');
    } else {
        let insufficientRessource = getInsufficientRessource(espresso);
        console.log(`Sorry, not enough ${insufficientRessource}!`)
    }
}

function makeLatte() {
    if (enoughRessources(latte)) {
        depleteWater(latte.waterNeeded);
        depleteMilk(latte.milkNeeded);
        depleteCoffee(latte.coffeeNeeded);
        depleteCups();
        increaseMoney(latte.cost);
        console.log('I have enough resources, making you a coffee!');
    } else {
        let insufficientRessource = getInsufficientRessource(latte);
        console.log(`Sorry, not enough ${insufficientRessource}!`)
    }
}

function makeCappuccino() {
    if (enoughRessources(cappuccino)) {
        depleteWater(cappuccino.waterNeeded);
        depleteMilk(cappuccino.milkNeeded);
        depleteCoffee(cappuccino.coffeeNeeded);
        depleteCups();
        increaseMoney(cappuccino.cost);
        console.log('I have enough resources, making you a coffee!');
    } else {
        let insufficientRessource = getInsufficientRessource(cappuccino);
        console.log(`Sorry, not enough ${insufficientRessource}!`)
    }
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

function turnOn() {
    coffeeMachine.isOn = true;
}

function turnOff() {
    coffeeMachine.isOn = false;
}

turnOn();
while(coffeeMachine.isOn) {
    let userAction = input("\nWrite action (buy, fill, take, remaining, exit):\n ");
    if (userAction === "buy") {
        let coffeeChoice = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:\n");
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
    } else if (userAction === "remaining") {
        printCoffeeMachineStatus();
    } else if (userAction === "exit") {
        turnOff();
    }
}
