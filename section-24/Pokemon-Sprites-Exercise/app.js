console.log('Connected!');

// https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseUrl = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/';

// #1 - Add 100 images to #container div
// #2 - Add Span with picture #
for (let i = 1; i < 101; i++) {
    const newImage = document.createElement('img');
    newImage.src = `${baseUrl}${i}.png`;
    container.appendChild(newImage);

    // Add span with # 
    const newSpan = document.createElement('span');
    newSpan.innerText = `${i}`;
    container.appendChild(newSpan);
}
