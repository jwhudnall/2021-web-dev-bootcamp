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