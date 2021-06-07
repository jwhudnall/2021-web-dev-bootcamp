// let die1 = Math.floor(Math.random() * 6) + 1

function rollDie(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}

die1 = rollDie(6);
die2 = rollDie(6);
die3 = rollDie(6);

console.log(`Die 1 has a value of ${die1}`);
console.log(`Die 2 has a value of ${die2}`);
console.log(`Die 3 has a value of ${die3}`);
