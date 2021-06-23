// *** Button Exercise ***
// Create 100 new buttons using JS only
// use appendchild, appending each to the .container div

const containerDiv = document.querySelector('#container');

for(let i = 0; i < 100; i++) {
    const newButton = document.createElement('button');
    newButton.innerText = 'Hey!';
    containerDiv.appendChild(newButton);
}