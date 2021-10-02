const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override');

const Product = require('./models/product');
const { urlencoded, application } = require('express');

mongoose.connect('mongodb://localhost:27017/farmStand')
    .then(() => {
        console.log('Connection Established with MongoDB');
    })
    .catch(err => {
        console.log('MongoDB Connection Error!')
        console.log(err);
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware:
app.use(urlencoded({ extended: true }))
app.use(methodOverride('_method'))


app.get('/products', async (req, res) => {
    const products = await Product.find({});
    res.render('products/index.ejs', { products })
})

app.get('/products/new', (req, res) => {
    res.render('products/new');
})

app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    console.log(newProduct);
    res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product });
})

app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/edit.ejs', { product });
})

app.put('/products/:id', async (req, res) => {
    console.log(req.body);
    res.send('PUT!');
})

app.listen(3000, () => {
    console.log('Listening on port 3000...');
})