// Select every anchor tag, making them olive 
const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.style.color = 'olive';
    link.style.textDecorationColor = 'magenta';
}