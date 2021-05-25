// Comments start with //
// Variables: let age = 34;
let age = 34;

// increment shorthand
age += 1;

// Better shorthand
age++;

// const CANNOT be changed
const luckyNum = 26;

// Booleans - "true" or "false"
let isLoggedIn = true;

// Strings
let userName = "James";
console.log(1 + "hello"); // returns "1hello"

// String Methods
let greeting = "        hello again!!  ";
console.log(greeting.trim().toUpperCase()); // returns "HELLO AGAIN!!"

let tvShow = "catdog";
console.log(tvShow.indexOf('dog')); // 3
console.log(tvShow.indexOf('zzz')); // -1

console.log(tvShow.slice(2)); // "tdog"
console.log(tvShow.slice(2,4)); // "td"

// replace ONLY replaces FIRST occurrence
let annoyingLaugh = "teehee so funny! teehee!";
console.log(annoyingLaugh.replace('teehee', 'haha')); // "haha so funny! teehee!"

console.log("lol".repeat(3)); // "lollollol"

// Template Literals
let product = "Artichoke";
let price = 2.25;
let qty = 5;
console.log(`You bought ${qty} ${product}s.`); // "You bought 5 Artichokes."

// null vs undefined
let loggedInUser = null; // explicitly no value
let loggedInUser; // undefined value

// Math object and Random Integer Generation
let step1 = Math.random(); // random decimal between 0 and 1. "0.2415"
let step2 = step1 * 10; // "2.415"
let step3 = Math.floor(step2); // "2"
let step4 = step3 + 1; // "3"

Math.floor(Math.random() * 10) + 1; // Single line achieving the same.