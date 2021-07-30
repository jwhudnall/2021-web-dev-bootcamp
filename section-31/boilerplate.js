// https://nodejs.org/dist/latest-v14.x/docs/api/fs.html#fs_fs_writefile_file_data_options_callback

const fs = require('fs');
const folderName = process.argv[2] || 'Project';

// Async Version
// fs.mkdir('Dogs', { recursive: true }, (err) => {
//     if (err) throw err;
//   });

// // Synchronous Version
// fs.mkdirSync('Cats');
try {
    fs.mkdirSync(folderName); // Makes new directory based on CLI input
    fs.writeFileSync(`${folderName}/index.html`, '')
    fs.writeFileSync(`${folderName}/styles.css`, '')
    fs.writeFileSync(`${folderName}/app.js`, '')
}
catch (e) {
    console.log('Something went wrong!');
    console.log(e);
}