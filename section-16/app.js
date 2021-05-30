let colors = ['red','orange','yellow'];
console.log(colors[0]);

// push - add to end of an array
colors.push('purple'); 

// pop - remove from end of array
colors.pop(); // Removes 'purple'

// shift - remove from start of array
colors.shift(); // removes 'red'

// unshift - add to start of array
colors.unshift('red'); // adds 'red' to beginning of array

// slice: .slice(start)   .slice(start, end)
console.log(colors.slice(1,3)); // ['orange', 'yellow']

// splice: .splice(start) .splice(start, deleteCount)
const months = ['Jan', 'March', 'April'];
months.splice(1,0,'Feb');
console.log(months); // ['Jan', 'Feb', 'March', 'April']