// if (1 + 1 === 2) {
//     console.log("Math still works.");
// }

// let random = Math.random();
// if (random < 0.5) {
//     console.log("winner!");
//     console.log(random);
// }

// let dayOfWeek = prompt("What's your favorite day of the week? ").toLowerCase();

// if (dayOfWeek === 'monday') {
//     console.log("Ugh, I hate Mondays!");
// } else if (dayOfWeek === 'saturday') {
//     console.log("Yay, I love Saturday!");
// } else {
//     console.log("Meh")
// }

// Nesting
// Checks user input (password) for length and no space
let password = prompt("Enter a new password: ");
if (password.length >= 6) {
    if (password.indexOf(' ') !== -1) {
        console.log("Password cannot include spaces");
    } else {
        console.log('Valid Password!')
    }
} else {
    console.log("Password is too short!");
}