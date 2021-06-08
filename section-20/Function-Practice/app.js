// Multiply function
function multiply(a, b) {
    return a * b;
}

// Temperature function
function isShortsWeather(temperature) {
    if (temperature >= 75) {
        return true;
    }
    return false;
}

// Function that accepts a single array argument and returns last element
// Returns null if array is empty
// Non destructive
function lastElement(arr) {
    if (arr.length === 0) {
        return null;
    }
    return arr[arr.length - 1]
}

// Function that accepts a string
// capitalizes the first letter 
// leaves the rest of the string unchanged

function capitalize(str) {
    if (typeof str !== 'string') {
        return false;
    }
    return str[0].toUpperCase() + str.slice(1);
}

// Function that expects an array of numbers
// Returns the sum of all values within the array
function sumArray(arr) {
    let total = 0;
    for (let val of arr) {
        if (typeof val !== "number") {
            return false
        }
        total += val;
    } 
    return total;
}