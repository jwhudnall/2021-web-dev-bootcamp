// Resolves after 3 seconds
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random();
        setTimeout(() => {
            if (rand < 0.7) {
                resolve('Your Fake Data Here...');
            }
            reject('Request timed out...');
        }, 3000)
    })
}

// fakeRequest('/dogs/1')
//     .then((data) => {
//         console.log('Done with request!');
//         console.log('data is:', data)
//     })
//     .catch((err) => {
//         console.log('Oh no!', err)
//     })

const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay)
    })
}

delayedColorChange('red', 1000)
    .then(() => delayedColorChange('orange', 1000)) // implicit return
    .then(() => delayedColorChange('yellow', 1000))
