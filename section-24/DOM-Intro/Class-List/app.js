const h2 = document.querySelector('h2');

// Give h2 CSS class 'purple':
h2.classList.add('purple')

// Create and call function to toggle 'purple' class
// off / on every 3 seconds

function toggleClass(cssClass) {
    setInterval(() => {
        h2.classList.toggle(cssClass)
    }, 3000)
}

toggleClass('purple');