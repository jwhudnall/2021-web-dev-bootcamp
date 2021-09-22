const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connected...');
    })
    .catch(err => {
        console.log('Error!')
        console.log(err);
    })

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

// "Getter" exists ONLY in Mongoose; not in DB
personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`;
})

personSchema.pre(save, async function () {
    console.log('About to save...');
})

personSchema.post(save, async function () {
    console.log('Progress saved.');
})

const Person = mongoose.model('Person', personSchema);