const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout...');
        } else {
            success(`Here is your data from ${url}`);
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout...');
            } else {
                resolve(`Here is your data from ${url}`);
            }Í
        }, delay)
    })
}

// The "Callback approach"
// fakeRequestCallback('books.com/page1', 
//     function (response) {
//     console.log('It worked!')
//     console.log(response)
//     // if continuing, need to nest successive requests with callbacks
//     fakeRequestCallback('books.com/page2',
//         function(response) {
//             console.log('It worked again.');
//             console.log(response)
//             fakeRequestCallback('books.com/page3',
//             function(response) {
//                 console.log('It worked a 3rd time!');
//                 console.log(response);
//             },
//             function(error) {
//                 console.log('Error (3rd request)!', error);
//             })
//         },
//         function(error) {
//             console.log('Error (2nd request)!', error)
//         })
// }, function (error) {
//     console.log('Error...');
//     console.log(error);
// })


// Using Promises
// const request = fakeRequestPromise('yelp.com/api/coffee');

// request
//     .then(() => {
//         console.log('It worked.')
//         fakeRequestPromise('yelp.com/api/java')
//             .then(() => {
//                 console.log('It worked (2nd time).')
//             })
//             .catch(() => {
//                 console.log('Error. Connection timed out on second call...')
//             })
//     })
//     .catch(() => {
//         console.log('Error. Connection timed out...')
//     })


// ** Magic of Promises**
// Sequential request syntax using single catch
fakeRequestPromise('yelp.com/api/coffee/page1')
    .then((data) => {
        console.log('It worked! (page 1)')
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page2')
    })
    .then((data) => {
        console.log('It worked! (page 2)')
        console.log(data);
        return fakeRequestPromise('yelp.com/api/coffee/page3')
    })
    .then((data) => {
        console.log('It worked! (Page 3)')
        console.log(data);
    })
    .catch(() => {
        console.log('Request timed out...')
    })