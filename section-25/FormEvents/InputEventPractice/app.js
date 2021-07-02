const h1 = document.querySelector('h1');
const field = document.querySelector('#username');

field.addEventListener('input', function(e) {
    if(field.value.length === 0) {
        h1.textContent = 'Enter Your Username';
    } else {
        const welcomeMsg = 'Welcome, ';
        h1.textContent = `${welcomeMsg} ${field.value}`;
    }

})