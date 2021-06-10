const movies = [
    {
        title: 'Star Wars',
        score: 99
    },
    {
        title: 'Lord of the Rings',
        score: 95
    },
    {
        title: 'Forrest Gump',
        score: 93
    },
    {
        title: 'Monsters Inc',
        score: 85
    }
]

// Original Syntax
const titles = movies.map(function(movie) {
    return movie.title;
})

// Arrow Syntax
const arrowTitles = movies.map((movie) => {
    return movie.title;
})

// Standalone example
const square = (x) => {
    return x ** 2;
}

// greet Exercise solution
const greet = (name) => {
    return `Hey ${name}!`;
}

// Implicit Returns
//*********************
// Original Syntax:
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// Implicit Return uses () in place of {}:
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// one-liner
const add = (a,b) => a + b

// Putting it all together
// Before...
const newMovies = movies.map(function (movie) {
    return `${movie.title} - ${movie.score / 10}`
})

// ...and after
const nMovies = movies.map(movie => (
    `${movie.title} - ${movie.score / 10}`
    ));