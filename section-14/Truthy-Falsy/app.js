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

// SWITCH Example
const day = 2;
switch(day) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Invalid number for day of week.")
    
}