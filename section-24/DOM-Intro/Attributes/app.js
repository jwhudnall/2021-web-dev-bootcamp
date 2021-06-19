function bannerChangeAfter2Seconds() {
    setTimeout(() => {
        document.querySelector('#whoops').id = 'banner';
        console.log('Changed img ID.')
    }, 2000)
}

document.querySelector('#banner').id = 'whoops'; // Change id using . notation
bannerChangeAfter2Seconds();