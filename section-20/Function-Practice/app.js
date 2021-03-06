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
// Returns false if any array values aren't of type "number"
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

// Function that expects a number between 1 and 7
// If outside this range, returns null
// Otherwise, returns day of week
// ex: Index 1 === "Monday"
// ex: Index 2 === "Tuesday"
function returnDay(num) {
    const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        if (num < 1 || num > 7) {
            return null
        }
        return daysOfWeek[num - 1];
}