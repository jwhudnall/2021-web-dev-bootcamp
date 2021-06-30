const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;
    return `rgb(${r}, ${g}, ${b})`;
}

const buttons = document.querySelectorAll('button');

for (let button of buttons) {
    button.addEventListener('click', function () {
        button.style.backgroundColor = makeRandColor();
        button.style.color = makeRandColor();
    })
}

// H2 example using keyword "this"
const h2s = document.querySelectorAll('h2');

for (let h2 of h2s) {
    h2.addEventListener('click', function () {
        h2.style.backgroundColor = makeRandColor();
        h2.style.color = makeRandColor();
    }
    )
}