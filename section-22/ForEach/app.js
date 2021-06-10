// forEach array method implementation
// largely replaced by for-of loops

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log('Squares:')
nums.forEach(function (n) {
    console.log("\t",n * n);
})

console.log('Evens:')
nums.forEach(function (el) {
    // prints even nums
    if (el % 2 === 0) {
        console.log("\t", el);
    }
})