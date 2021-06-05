const subreddits = ['cringe', 'books', 'chickens', 'funny', 'pics', 'baseball'];

// original array iteration
console.log("Original array iteration method...");

for (let i = 0; i < subreddits.length; i++) {
    console.log(`\tVisit reddit.com/r/${subreddits[i]}`);
}

// for-of array iteration
console.log('For-or array iteration method...');

for (let sub of subreddits) {
    console.log(`\tVisit reddit.com/r/${sub}`);
}

// Seating Chart Comparison Example
const seatingChart = [
    ['Kristen', 'Erik', 'Namita'],
    ['Geoffrey', 'Juanita', 'Antonio', 'Kevin'],
    ['Yuma', 'Sakura', 'Jack', 'Erika']
]

console.log('Original Method...')

// Original method
for (let i = 0; i < seatingChart.length; i++) {
    let row = seatingChart[i];
    for (let j = 0; j < row.length; j++) {
        console.log("\t"+row[j]);
    }
}

console.log('For-or Method...')

// For-of Method
for (let row of seatingChart) {
    for (let name of row) {
        console.log("\t"+name);
    }
}