const express = require('express');
const app = express();
const morgan = require('morgan'); // HTTP request logger middleware for node.js
const AppError = require('./appError');

app.use(morgan('tiny'));


app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path, req.requestTime);
    next();
})

app.get('/error', (req, res) => {
    chicken.fly();
})

app.use('/dogs', (req, res, next) => {
    console.log('I love dogs');
    next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'swordfish') {
        next();
    }
    throw new AppError('password required', 401);
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

app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin', 403);
})

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.use((req, res) => {
    res.status(404).send('Not Found');
})

// app.use((err, req, res, next) => {
//     console.log('******************************')
//     console.log('***********ERROR**************')
//     console.log('******************************')
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000');
});