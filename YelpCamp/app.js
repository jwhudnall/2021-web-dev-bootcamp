const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Campground = require('./models/campground');
const { find, findById } = require('./models/campground');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    // res.send('Home Page Here');
    res.render('home.ejs')
})

app.get('/campgrounds', async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index.ejs', { campgrounds })
})

app.get('/campgrounds/:id', async (req, res) => {
    // const campgrounds = await Campground.find({});
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show.ejs', { campground })
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})