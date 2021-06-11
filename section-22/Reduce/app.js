const nums = [3, 5, 7, 9, 11];

// Reduce Array Method
const total = nums.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(total);

const prices = [9.99, 1.50, 19.99, 49.99, 30.50];
// With & Without .reduce() method
//  Without:
let totalVal = 0;
for (let price of prices) {
    totalVal += price;
}
console.log(totalVal);

// With:
let reduceTotal = prices.reduce((accu, cV) => {
    return accu + cV;
})
console.log(reduceTotal);

// Test: Use reduce() to find the MAX value in prices
let maxValue = prices.reduce((max, price) => {
    if (price > max) {
        return price;
    } 
    return max;
})
console.log(`The highest price is: ${maxValue}`);

let minValue = prices.reduce((min, price) => {
    if (price < min) {
        return price;
    } 
    return min;
})

console.log(`The lowest price is: ${minValue}`);