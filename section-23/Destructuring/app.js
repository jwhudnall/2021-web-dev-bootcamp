// Array Destructuring
// Collect first and second highest-score
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// One solution:
// const highScore = scores[0];
// const secondPlace = scores[1];

// More Concise:
const [ gold, silver, bronze, ...everyoneElse] = scores;