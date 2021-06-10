const texts = ['rofl', 'lol', 'omg', 'ttyl'];

// Map Exercise: return new array in all uppercase
const caps = texts.map(function(content) {
    return content.toUpperCase();
})

for (word of caps) {
    console.log(word);
}

// Challenge: create a new array using map array method
// named "squares" that displays the square of each original value
const nums = [1,2,3,4,5,6,7,8,9,10];
const squares = nums.map(function(num){
    return num * num;
})

// "cleanNames" Exercise
// Using .map, create a function to trim whitespace from
// an array of strings. Returns the trimmed results.
function cleanNames(stringArray) {
    const trimmedArray = stringArray.map(function(str) {
        return str.trim();
    });
    return trimmedArray;
} 