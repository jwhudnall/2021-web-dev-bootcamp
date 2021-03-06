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

while (parseInt(guess) !== winningNumber) {
    if (guess === 'q') break;

    if (guess < winningNumber) {
        guess = prompt("Too low. Guess again: ");
        while (!guess) {
            guess = prompt("Please enter a valid number: ")
        }
        guessCount++;
    } else {
        guess = prompt("Too high. Guess again: ");
        while (!guess) {
            guess = prompt("Please enter a valid number: ");
        }
        guessCount++;
    }
}

if (guess === 'q') {
    console.log("Ok, you quit.")
} else {
    console.log("Congratulations!");
    console.log(`It took you ${guessCount} guesses.`);
}


