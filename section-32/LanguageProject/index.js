const franc = require('franc');
const langs = require('langs');

const input = process.argv[2]; // Collect CLI text
const iso3 = getISO(input); // retrieve ISO 639-3 language code (3 letters)
getLanguageName(iso3);


function getISO(input) {
    return franc(input);
}

function getLanguageName(ISO) {
    const languageObj = langs.where("3", ISO);
    console.log(languageObj.name);
    return
}