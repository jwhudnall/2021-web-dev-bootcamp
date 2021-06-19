function bannerChangeAfter2Seconds() {
    setTimeout(() => {
        let bannerID = document.querySelector('img').id;
        document.querySelector(`#${bannerID}`).id = 'banner';
        console.log('Changed img ID.')
    }, 2000)
}

document.querySelector('#banner').id = 'whoops'; // Change id using . notation
bannerChangeAfter2Seconds();