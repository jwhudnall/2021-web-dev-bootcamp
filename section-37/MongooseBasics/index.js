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
const starWarsIV = new Movie({title: 'Star Wars: A New Hope', year: 1978, score: 9.4, rating: 'PG-13'});