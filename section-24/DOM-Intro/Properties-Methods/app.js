// Change the text of all links
const allLinks = document.querySelectorAll('a');

for (let link of allLinks) {
    link.innerText = 'I am a link!';
}