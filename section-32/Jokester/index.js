const giveMeAJoke = require('give-me-a-joke');
const colors = require('colors'); // require "colors" package
 
// To get a customized joke
var fn = "Jackie";
var ln = "Chan";
giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
    console.log(joke.rainbow);
});