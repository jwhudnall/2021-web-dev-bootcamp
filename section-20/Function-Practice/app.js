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