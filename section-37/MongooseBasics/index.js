const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test')
  .then(() => {
      console.log('Connected...');
  })
  .catch(err => {
      console.log('Error!')
      console.log(err);
  })