let maxNumber = parseInt(prompt("Welcome! Enter your max number."));
// checks that maxNumber is a number
while (!maxNumber) {
    maxNumber = parseInt(prompt("Please enter a valid number: "));
}

const winningNumber = Math.floor(Math.random() * parseInt(maxNumber)) + 1;

let guess = parseInt(prompt("Enter your first guess."));
while (!guess) {
    guess = parseInt(prompt("Please enter a valid number: "))
}

let guessCount = 0;

while (guess !== winningNumber) {
    if (guess < winningNumber) {
        guess = parseInt(prompt("Too low. Guess again: "));
        while (!guess) {
            guess = parseInt(prompt("Please enter a valid number: "))
        }
        guessCount++;
    } else if (guess > winningNumber) {
        guess = parseInt(prompt("Too high. Guess again: "));
        while (!guess) {
            guess = parseInt(prompt("Please enter a valid number: "))
        }
        guessCount++;
    }
}
console.log(`It took you ${guessCount} guesses.`)

