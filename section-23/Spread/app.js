// JS Spread
const nums = [9, 3, 2, 8];

Math.max(nums); // returns NaN; expects separate value arguments
Math.max(...nums); // 9

// Use spread to create a new, combined array
const cats = ['Blue', 'Scout', 'Tuxedo'];
const dogs = ['Millie', 'Rusty', 'Wyatt', 'Waldo'];

const combinedPets = [...cats, ...dogs];