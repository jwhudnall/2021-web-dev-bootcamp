function bannerChangeAfter2Seconds() {
    setTimeout(() => {
        let bannerID = document.querySelector('img').id;
        document.querySelector(`#${bannerID}`).id = 'banner';
        console.log('Changed img ID.')
    }, 2000)
}

document.querySelector('#banner').id = 'whoops'; // Change id using . notation
bannerChangeAfter2Seconds();

// Collect common attributes from firstLink, if they exist:
const firstLink = document.querySelector('a');
const firstLinkAtt = {};

for (let att of ['href', 'id', 'class', 'title']) {
    if (firstLink.getAttribute(att)) {
        firstLinkAtt[att] = firstLink.getAttribute(att);
    }
}