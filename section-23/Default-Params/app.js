// "Old" Way
function rollDie(numSides) {
    if (numSides === undefined) {
        numSides = 6;
    }
    let randNum = Math.floor(Math.random() * numSides) + 1;
    return randNum;
}

// New Syntax (specify default value in parameter definitions)
function rollDieNew(numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
}

// greet example
function greet(msg = 'Hello', person = 'James') {
    person = person[0].toUpperCase() + person.slice(1);
    return `${msg}, ${person}!`;
}