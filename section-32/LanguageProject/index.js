const franc = require('franc');
const langs = require('langs');

const input = process.argv[2]; // Collect CLI text
const iso3 = getISO(input); // retrieve ISO 639-3 language code (3 letters)
getLanguageName(iso3);


function getISO(input) {
    return franc(input);
}

function getLanguageName(ISO) {
    // 'und' returned if language undefined
    if (ISO === 'und') {
        console.log('Something went wrong...Try a larger sample of text.')
    } else {
        const languageObj = langs.where("3", ISO);
        console.log(`Our best guess is: ${languageObj.name}`);
    }
}