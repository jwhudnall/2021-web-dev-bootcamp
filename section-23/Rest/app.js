// Arguments Object
function sumAll() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }
    return total;
}

// Using "... rest" to collect all arguments
function sum(...nums) {
    console.log(nums);
}

// Use reduce to sum all items in array
function sumAll2(...nums) {
    return nums.reduce((total, el) => total + el);
}

function raceResults(gold, silver, ...everyoneElse) {
    console.log(everyoneElse); // Show to prove array 
    console.log(`Gold medal goes to: ${gold}`);
    console.log(`Silver medal goes to: ${silver}`);
    console.log(`And thanks to everyone else: ${everyoneElse}`);
}