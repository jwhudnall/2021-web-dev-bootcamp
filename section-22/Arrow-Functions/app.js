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