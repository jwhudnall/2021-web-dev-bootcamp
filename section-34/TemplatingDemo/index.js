const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views')); // allows app execution from other DIR

app.get('/', (req, res) => {
    res.render('home'); // Renders home.ejs file in default "views" DIR
})

app.get('/rand', (req, res) => {
    res.render('random.ejs')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
