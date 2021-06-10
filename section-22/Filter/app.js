const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = nums.filter((n) => {
    return n % 2 === 1;
})

const movies = [
    {
        title: 'Amadeus',
        score: 84,
        year: 1984
    },
    {
        title: 'Star Wars',
        score: 96,
        year: 1978
    },
    {
        title: 'Lord of the Rings',
        score: 94,
        year: 1996
    },
    {
        title: 'My Girl',
        score: 82,
        year: 1990
    },
    {
        title: 'Sharknado',
        score: 35,
        year: 2013
    },
    {
        title: '13 Going On 30',
        score: 70,
        year: 2004
    }
]

// Use filter to return all movies with a rating of 90 or greater
const highlyRated = movies.filter(m => m.score >= 90);
const goodTitles = highlyRated.map(m => m.title)

// Combined
const greatTitles = movies.filter(m => m.score > 90).map(m => m.title)

// TEST
// Define factory function with "score" parameter
// Returns a function that filters the movie array above "score"
// Final array includes title only
function filterMovie(score) {
    return function(array) {
        return array.filter(m => m.score > score).map(m => m.title);
    }
} 