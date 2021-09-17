const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp')
  .then(() => {
      console.log('Connected...');
  })
  .catch(err => {
      console.log('Error!')
      console.log(err);
  })

  // Define JS Schema
  const movieSchema = new mongoose.Schema({
      title: String,
      year: Number,
      score: Number,
      rating: String
  });

  // Define Model
const Movie = mongoose.model('Movie', movieSchema);

// Instantiate a JS object which can be .save()'d to MongoDB (movieApp, specified above) 
// const starWarsIV = new Movie({title: 'Star Wars: A New Hope', year: 1978, score: 9.4, rating: 'PG-13'});

// "model".insertMany() to add multiple objects to the db
// Returns a Promise
Movie.insertMany([
    { title: 'Amelie', year: 2001, score: 8.3, rating: 'R'},
    { title: 'Alien', year: 1979, score: 8.1, rating: 'R'},
    { title: 'The Iron Giant', year: 1999, score: 7.5, rating: 'PG'},
    { title: 'Stand By Me', year: 1986, score: 8.6, rating: 'R'},
    { title: 'Moonrise Kingdon', year: 2012, score: 7.3, rating: 'PG-13'},
])
.then(data => {
    console.log('Entries added to database.')
    console.log(data);
})