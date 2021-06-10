console.log("Hello!")
// prints to console after 3 seconds
setTimeout(() => {
    console.log("Are you there?");
}, 3000)

// setInterval example
const id = setInterval(() => {
    console.log(Math.random());
}, 2000)

// Combining both
// Start an interval that logs a random number every second
// After 10 seconds, stop the execution using setTimeout()
const run = setInterval(() => {
    console.log(Math.random());
}, 1000)

setTimeout(() => {
    console.log('run stopped!');
    clearInterval(run);
}, 10000)
