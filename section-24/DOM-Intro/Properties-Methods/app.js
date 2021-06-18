// Change the text of all links
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I am a link!';
}

// Add italic tag within h1
document.querySelector('h1').innerHTML = '<i>Silky</i> Chickens';