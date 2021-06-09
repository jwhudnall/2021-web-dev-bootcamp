function makeMysteryFunc() {
    const rand = Math.random();
    if(rand > 0.5) {
        // nameless function
        return function() {
            console.log('Congrats, I am a good function!');
        } 
    } else {
        return function() {
            alert("You have been infected by a computer virus!");
        }
    }
}
let mystery = makeMysteryFunc(); // captures makeMysterFunc's return value 
