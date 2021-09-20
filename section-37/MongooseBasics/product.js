const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopApp')
    .then(() => {
        console.log('Connected...');
    })
    .catch(err => {
        console.log('Error!')
        console.log(err);
    })

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String], // Defines a new field; an array containing strings
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    }
})

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Bike Helmet', price: 19.50, categories: ['Cycling', 'Safety'] });

bike.save()
    .then(data => {
        console.log('Product Added.');
        console.log(data);
    })
    .catch(err => {
        console.log('Error!');
        console.log(err)
    })