// *** Array Destructuring ***
// Collect first and second highest-score
const scores = [929321, 899341, 888336, 772739, 543671, 243567, 111934];

// One solution:
// const highScore = scores[0];
// const secondPlace = scores[1];

// More Concise:
const [ gold, silver, bronze, ...everyoneElse] = scores;


// *** Object Destructuring ***
// Extract firstName, lastName, email from object
const user = {
    email: 'harvey@gmail.com',
    password: 'sCoTt1948sMiTh',
    firstName: 'Harvey',
    lastName: 'Milk',
    born: 1930,
    died: 1978,
    bio: 'Harvey Bernard Milk was an American politician and the first',
    city: 'San Francisco',
    state: 'California' 
}

// One solution:
// const firstName = user.firstName;
// const lastName = user.lastName;
// const email = user.email;

// More concise:
// password: pass renames  variable to "pass"    
// 'died: deathYear = 'N/A' sets default value for deathYear
const { firstName, lastName, email, password: pass, died: deathYear = 'N/A'} = user; 

// *** Param Destructuring ***

const fullName = ({first, last}) => {
    return `${first} ${last}`;
}

const runner = {
    first: 'Eliud',
    last: 'Kipchoge',
    country: 'Kenya'
}

// Another use-case
const movies = [
    {
        title: 'Alien',
        score: 90,
        year: 1979
    },
    {
        title: 'Star Wars',
        score: 95,
        year: 1979
    },
    {
        title: 'Terminator',
        score: 82,
        year: 1987
    },
    {
        title: 'TMNT',
        score: 88,
        year: 1996
    }
]

 // Find movies with score >= 90
 // Previous method using filter:
 movies.filter((movie) => movie.score >= 90);
 // New method using destructuring
 movies.filter(({score}) => score >= 90);

 // Map Example
 movies.map(movie => {
     return `${movie.title} (${movie.year}) is rated ${movie.score}`;
 })

 // Using destructuring
 movies.map(({title, score, year}) => {
    return `${title} (${year}) is rated ${score}`;
 })