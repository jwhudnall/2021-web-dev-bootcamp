const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97
}

for (let person in testScores) {
    console.log(`${person} scored: ${testScores[person]}`);
}

// Add up values and find average
let total = 0;
let scores = Object.values(testScores);
for (let score of scores) {
    total += score;
}

let avg = total / scores.length;
console.log(`The average test score was ${avg}`)