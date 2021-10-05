const express = require('express');
const app = express();
const morgan = require('morgan'); // HTTP request logger middleware for node.js

app.use(morgan('tiny'));


app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path, req.requestTime);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs');
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if(password === 'swordfish') {
        next();
    } 
    res.send('Invalid Password');
}

// app.use((req, res, next) => {
//     console.log('This is my first Middleware!');
//     next();
// })
// app.use((req, res, next) => {
//     console.log('This is my SECOND Middleware!');
//     next();
// })

app.get('/', (req, res) => {
    res.send('Home!');
})

app.get('/dogs', (req, res) => {
    res.send('Woof Woof!');
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('My Secret is: swordfish');
})

app.use((req, res) => {
    res.status(404).send('Not Found');
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});