// JS Spread
const nums = [9, 3, 2, 8];

Math.max(nums); // returns NaN; expects separate value arguments
Math.max(...nums); // 9

// Use spread to create a new, combined array
const cats = ['Blue', 'Scout', 'Tuxedo'];
const dogs = ['Millie', 'Rusty', 'Wyatt', 'Waldo'];

const combinedPets = [...cats, ...dogs];

// Using spread with Objects
const feline = { legs: 4, family: 'Felidae'};
const canine = { isFurry: true, family: 'Caninae'};

// Create a new object having a color property using spread
const feline2 = {... feline, color: 'black'};

// Form Data Use-Case
// Data from user...
const dataFromForm = {
    email: 'blueman@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

// ...combined with additional site information
const newUser = {
    ...dataFromForm,
    id: 2345,
    isAdmin: false
}
