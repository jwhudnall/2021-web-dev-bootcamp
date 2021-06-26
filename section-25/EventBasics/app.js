const btn = document.querySelector('#v2');

btn.onclick = function() {
    console.log('You clicked me!'); 
}

function scream() {
    console.log('AHHHHHH!');
}

btn.onmouseenter = scream;

 // v3.0 - Event Listeners
 const btn3 = document.querySelector('#v3');
 btn3.addEventListener("click", function() {
     alert('Clicked!');
 })