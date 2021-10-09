const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const ejsMate = require('ejs-mate');
const Joi = require('joi');
const catchAsync = require('./utils/catchAsync');
const ExpressError = require('./utils/ExpressError');
const Campground = require('./models/campground');
const methodOverride = require('method-override');

mongoose.connect('mongodb://localhost:27017/yelp-camp');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({ extended: true })); // tells express to parse incoming requests with urlencoded payload
app.use(methodOverride('_method')); // define query string parameter

app.get('/', (req, res) => {
    // res.send('Home Page Here');
    res.render('home.ejs')
})

app.get('/campgrounds', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index.ejs', { campgrounds })
}))

// Serve new campground form page (GET)
app.get('/campgrounds/new', (req, res) => {
    res.render('campgrounds/new.ejs');
})

// Create route to push form data to DB (POST)
app.post('/campgrounds', catchAsync(async (req, res, next) => {
    // if (!req.body.campground) throw new ExpressError('Invalid Campground Data', 400);
    const campgroundSchema = Joi.object({
        campground: Joi.object({
            title: Joi.string()
                .required(),
            image: Joi.string()
                .required(),
            price: Joi.number()
                .required()
                .min(0),
            description: Joi.string()
                .required(),
            location: Joi.string()
                .required()
        }).required()
    })
    const { error } = campgroundSchema.validate(req.body); // Use Joi to validate form data
    if (error) {
        const msg = error.details.map(el => el.message).join(','); // Collect all error messages, separated by a ,
        throw new ExpressError(msg, 400);
    }
    console.log(result);
    const campground = new Campground(req.body.campground); // collects & adds new campground info from form => DB
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
}))

app.get('/campgrounds/:id', catchAsync(async (req, res) => {
    // const campgrounds = await Campground.find({});
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/show.ejs', { campground })
}))

app.get('/campgrounds/:id/edit', catchAsync(async (req, res) => {
    const campground = await Campground.findById(req.params.id);
    res.render('campgrounds/edit.ejs', { campground })
}))

app.put('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground })
    res.redirect(`/campgrounds/${campground._id}`);
}))

app.delete('/campgrounds/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    res.redirect('/campgrounds');
}))

// Route placed at end to catch all nonexistent paths
app.all('*', (req, res, next) => {
    next(new ExpressError('Page not found', 404));
})

app.use((err, req, res, next) => {
    const { statusCode = 500 } = err;
    if (!err.message) err.message = 'Oh No, Something Went Wrong!';
    res.status(statusCode).render('error.ejs', { err });
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})