// Resolves after 3 seconds
const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, 3000)
    })
}

fakeRequest('/dogs/1')
    .then(() => {
        console.log('Done with request!');
    })