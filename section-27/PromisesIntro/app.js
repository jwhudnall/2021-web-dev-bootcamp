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
            }
        }, delay)
    })
}

// The "Callback approach"
fakeRequestCallback('books.com/page1', 
    function (response) {
    console.log('It worked!')
    console.log(response)
    // if continuing, need to nest successive requests with callbacks
    fakeRequestCallback('books.com/page2',
        function(response) {
            console.log('It worked again.');
            console.log(response)
            fakeRequestCallback('books.com/page3',
            function(response) {
                console.log('It worked a 3rd time!');
                console.log(response);
            },
            function(error) {
                console.log('Error (3rd request)!', error);
            })
        },
        function(error) {
            console.log('Error (2nd request)!', error)
        })
}, function (error) {
    console.log('Error...');
    console.log(error);
})