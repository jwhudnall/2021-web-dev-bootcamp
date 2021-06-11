const words = ['dog', 'dig', 'log', 'bag', 'wag'];

let is3Letters = words.every(word => word.length === 3); // true
let startsWithD = words.some(word => word[0].toLowerCase() === 'd'); // true

// Exam Example
// Passing score is 75; did everyone pass?
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 70];

let allPassedExam = exams.every(score => score >= 75);
console.log(allPassedExam); // true