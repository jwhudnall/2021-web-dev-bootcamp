const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.send('Welcome Home')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
