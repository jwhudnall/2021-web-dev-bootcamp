// ToDo:
// After clicking "Change Color" button,
// generates a new random background color
// H1 displays the RGB color value
// Hitting the button again changes the color again

// Bonus:
// If background color is too dark, lighten h1 color
let newColor;
let minBrightness = 250;

function random(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateColor() {
    let red = random(255);
    let green = random(255);
    let blue = random(255);
    return `rgb(${red}, ${green}, ${blue})`
}

function isDark() {
    const colorVals = newColor.match(/[-+]?[0-9]*\.?[0-9]+/g);
    const totalColorNum = colorVals.reduce((accu, currentVal) => {
        return parseInt(accu) + parseInt(currentVal);
    });
    if (totalColorNum < minBrightness) {
        document.querySelector('h1').style.color = 'white';
        console.log(`H1 changed! Color: ${newColor}`);
    } else {
        document.querySelector('h1').style.color = 'black';
    };

}

const h1 = document.querySelector('h1');
const colorBtn = document.querySelector('#colorGen');

colorBtn.addEventListener('click', function() {
    newColor = generateColor();
    document.body.style.backgroundColor = newColor;
    h1.textContent = newColor;
    isDark();
})