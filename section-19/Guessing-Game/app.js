let maxNumber = prompt("Welcome! Enter your max number.");
let winningNumber = Math.floor(Math.random() * parseInt(maxNumber))+1;
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
} console.log(`Correct. It took you ${guessCount} guesses.`)

