console.log('Connected!');

// https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');

const newImage = document.createElement('img');
newImage.src = 'https://raw.githubusercontent.com/pokeapi/sprites/master/sprites/pokemon/1.png';
container.appendChild(newImage);