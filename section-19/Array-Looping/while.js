// while loop
let num = 0;
while (num < 10) {
    num++;
    console.log(num);
}

const SECRET = "BabyHippo";

let guess = prompt('Enter the secret password: ');
while (guess !== SECRET) {
    let guess = prompt('Enter the secret password: ');
}

console.log("Congrats!");

