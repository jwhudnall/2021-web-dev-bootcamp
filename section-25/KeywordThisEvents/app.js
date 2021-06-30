const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', colorize)
}

// H2 example using keyword "this"
const h2s = document.querySelectorAll('h2');

for (let h2 of h2s) {
    h2.addEventListener('click', colorize)
}

// "this" represents the element on which colorize() is called
function colorize() {
    this.style.backgroundColor = makeRandColor();
    this.style.color = makeRandColor();
}