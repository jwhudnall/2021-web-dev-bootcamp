const texts = ['rofl', 'lol', 'omg', 'ttyl'];

// Map Exercise: return new array in all uppercase
const caps = texts.map(function(content) {
    return content.toUpperCase();
})

for (word of caps) {
    console.log(word);
}