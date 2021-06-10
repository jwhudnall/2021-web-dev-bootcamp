// forEach array method implementation
// largely replaced by for-of loops

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log('Squares:')
nums.forEach(function (n) {
    console.log("\t",n * n);
})

console.log('Evens:')
nums.forEach(function (el) {
    // prints even nums
    if (el % 2 === 0) {
        console.log("\t", el);
    }
})

// Movie example
const movies = [
    {
        title: 'Amadeus',
        score: 99
    },
    {
        title: 'Stand By Me',
        score: 85
    },
    {
        title: 'Star Wars',
        score: 100
    },
    {
        title: 'Lord of the Rings',
        score: 98
    },
    {
        title: 'Alien',
        score: 85
    }
]

// todo: print movie title, and score (out of 100)
// ex: Alien - 85/100
console.log('Using forEach:')
movies.forEach(function(movie) {
    console.log(`\t${movie.title} - ${movie.score}/100`);
})

// Alternate for-of implementation
console.log('Using for-of:')
for (let movie of movies) {
    console.log(`\t${movie.title} - ${movie.score}/100`);
}