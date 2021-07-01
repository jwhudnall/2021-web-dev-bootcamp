document.querySelector('button').addEventListener('click', function(evt) {
    console.log(evt)
})

const input = document.querySelector('input');
input.addEventListener('keydown', function(e) {
    console.log(e);
    console.log(e.key); // returns letter ex) "q"
    console.log(e.code); // returns letter code ex) "keyQ"
})

// listen for arrow keys in window
window.addEventListener('keydown', function(e) {
    switch(e.code) {
        case 'ArrowUp':
            console.log('Up!');
            break;
        case 'ArrowDown':
            console.log('Down!');
            break;
        case 'ArrowLeft':
            console.log('Left!');
            break;
        case 'ArrowRight':
            console.log('Right!');
            break;
        default:
            console.log('Ignored!');
    }
})