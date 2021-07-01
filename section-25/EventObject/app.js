document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.key); // returns letter ex) "q"
    console.log(e.code); // returns letter code ex) "keyQ"
})