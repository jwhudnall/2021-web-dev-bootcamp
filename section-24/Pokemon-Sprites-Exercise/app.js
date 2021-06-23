console.log('Connected!');

// https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

// Add 100 images to #container div
for(let i = 1; i < 101; i++) {
    const newImage = document.createElement('img');
    newImage.src = `https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/${i}.png`;
    container.appendChild(newImage);
}