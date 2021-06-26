const btn = document.querySelector('#v2');

btn.onclick = function () {
    console.log('You clicked me!');
}

function scream() {
    console.log('AHHHHHH!');
}

btn.onmouseenter = scream;

// v3.0 - Event Listeners
const btn3 = document.querySelector('#v3');
btn3.addEventListener("click", function () {
    alert('Clicked!');
})

// Why eventListeners?
function twist() {
    console.log('Twist!');
}
function shout() {
    console.log('Shout!');
}

const twistShoutBtn = document.querySelector('#twistShout');
// twistShoutBtn.onclick = twist;
// twistShoutBtn.onclick = shout; // Overwrites initial "twist" assignment

twistShoutBtn.addEventListener('click', twist, { once: true })
twistShoutBtn.addEventListener('click', shout) // allows different events on same element