const express = require('express');
const app = express();
const morgan = require('morgan'); // HTTP request logger middleware for node.js

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.send('Home!');
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!');
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});