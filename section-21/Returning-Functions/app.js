function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        // nameless function
        return function() {
            console.log('Congrats, I am a good function!');
        } 
    } else {
        return function() {
            alert("You have been infected by a computer virus!");
        }
    }
}
let mystery = makeMysteryFunc(); // captures makeMysterFunc's return value 


// Factory Functions
// **************************************
// Hardcoded function to check if num is between 2 values
function isBetween(num) {
    return num >= 50 && num <= 100;
}

// Factory function that creates function above
function makeBetweenFunc(min, max) {
    return function(num) {
        return num >= min && num <= max;
    }
}