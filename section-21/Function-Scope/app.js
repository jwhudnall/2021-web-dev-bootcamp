function collectEggs() {
    let totalEggs = 6;
    console.log(totalEggs); // 6
}

// ReferenceError: totalEggs is not defined
// console.log(totalEggs); 

let bird = 'Scarlet Macaw';
function birdWatch() {
    let bird = 'Great Blue Heron'; // function-scoped 'bird' variable is used
    console.log(bird); 
}

birdWatch(); // Great Blue Heron


let dog = 'Pitbull';
function dogWatch() {
    // let dog = 'Great Dane';
    console.log(dog); // global-scoped 'dog' variable is used
}

dogWatch(); // Pitbull

// Block Scope
let radius = 8;
if (radius > 0) {
    const PI = 3.14159;
    let msg = 'HII!';
}
console.log(radius); // 8
// Both following console.log's result in ReferenceError
// console.log(PI); 
// console.log(msg);

// Lexical scope
function bankRobbery() {
    const heroes = ['Spiderman', 'Iron Man', 'Black Panther'];
    function cryForHelp() {
        for (let hero of heroes) {
            console.log(`Help me, ${hero}!`);
        }
    }
    cryForHelp();
}

bankRobbery();