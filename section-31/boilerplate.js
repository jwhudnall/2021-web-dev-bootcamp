const fs = require('fs');

// Async Version
fs.mkdir('Dogs', { recursive: true }, (err) => {
    if (err) throw err;
  });

// Synchronous Version
fs.mkdirSync('Cats');