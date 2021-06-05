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