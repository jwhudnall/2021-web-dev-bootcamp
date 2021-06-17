const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    console.log(img.src); // Prints link source for each img

    // change all images to another one:
    // img.src = 'data:image/jpeg;base64,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'
}

const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'data:image/jpeg;base64,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';
}

// querySelector (Swiss-army knife)
// Select all anchor tags nested inside paragraphs
const anchorParas = document.querySelectorAll('p a')

// Iterate through all and print link location
for (let link of anchorParas) {
    console.log(link.href);
}