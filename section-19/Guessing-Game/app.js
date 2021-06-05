let maxNumber = parseInt(prompt("Welcome! Enter your max number."));
// checks that maxNumber is a number
while (!maxNumber) {
    maxNumber = parseInt(prompt("Please enter a valid number: "));
}

const winningNumber = Math.floor(Math.random() * parseInt(maxNumber)) + 1;

let guess = parseInt(prompt("Enter your first guess."));
let guessCount = 0;

while (guess !== winningNumber) {
    if (guess < winningNumber) {
        guess = prompt("Too low. Guess again: ");
        guess = parseInt(guess);
        guessCount++;
    } else if (guess > winningNumber) {
        guess = prompt("Too high. Guess again: ");
        guess = parseInt(guess);
        guessCount++;
    }
}
console.log(`It took you ${guessCount} guesses.`)

