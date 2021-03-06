// Function Expressions
// -------------------
function add(x, y) {
    return x + y;
}

// Store a nameless function within a variable
const addition = function (x, y) {
    return x + y;
}

// Exercise: Define a function that returns the square of a number
// Use a function expression
const square = function (a) {
    return a * a;
}



// Functions as Arguments
// ---------------------
function callTwice(func) {
    func();
    func();
}

function laugh() {
    console.log("Haha!");
}
callTwice(laugh) // note: no () behind function argument in laugh


function rollDie() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

function callTenTimes(func) {
    for (let i = 0; i < 10; i++) {
        func();
    }
}

callTenTimes(rollDie); // 10 different execution of rollDie() function