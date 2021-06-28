// ToDo:
// After clicking "Change Color" button,
// generates a new random background color
// H1 displays the RGB color value
// Hitting the button again changes the color again

function random(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateColor() {
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    return `rgb(${red}, ${green}, ${blue})`
}


const colorBtn = document.querySelector('#colorGen');
// colorBtn.addEventListener('click', )