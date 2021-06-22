const squareImage = document.querySelector('.square'); // First image

const secondImage = squareImage.nextElementSibling; // Second image

// Adding Elements
// 1. Create an image, saved as a variable
const newImage = document.createElement('img');
// 2. Specify the image source
newImage.src = 'data:image/jpeg;base64,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';
// 3. Add the image to the HTML
document.body.appendChild(newImage);