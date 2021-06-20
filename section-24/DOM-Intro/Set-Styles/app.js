// Select every anchor tag
// Color: olive with a magenta underline 
const allLinks = document.querySelectorAll('a');

for(let link of allLinks) {
    link.style.color = 'olive';
    link.style.textDecorationColor = 'magenta';
}