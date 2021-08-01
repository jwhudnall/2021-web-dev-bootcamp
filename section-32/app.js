// const math = require('./math');

const cats = require('./Shelter'); // Imports entire "Shelter" DIR

// const { PI, square } = require('./math');
// console.log(PI);

// console.log(square(9));

// console.log(cats[0].name)

for(let cat of cats) {
    console.log(cat.name);
}