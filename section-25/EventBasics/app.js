const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('You clicked me!'); 
}

function scream() {
    console.log('AHHHHHH!');
}

btn.onmouseenter = scream;