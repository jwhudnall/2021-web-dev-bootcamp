const userInput = prompt("Enter something to see if it is \"Truthy\" or \"Falsy\"");

if (userInput) {
    console.log("Truthy!");
} else {
    console.log("Falsy!");
}

// AND, OR, NOT
// AND = &&
// OR = ||
// Not = !

const password = prompt("Enter your password: ");
// Password valid if length is 6 or greater, and no spaces
if (password.length >= 6 && password.indexOf(' ') === -1) {
    console.log("Valid Password. Access Granted.")
} else {
    console.log("Incorrect password format.")
}