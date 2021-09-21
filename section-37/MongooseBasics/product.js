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
        min: [0, 'Price must be a positive value']
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
    },
    size: {
        type: String,
        enum: ['Small', 'Medium', 'Large']
    }
})

productSchema.methods.greet = function () {
    console.log('Tjena from Sweden!');
    console.log(`${this.name} successfully found in Database.`)
}

productSchema.methods.toggleOnSale = function() {
    this.onSale = !this.onSale;
    return this.save(); // "this" refers to product instance
}

productSchema.methods.addCategory = function(newCat) {
    this.categories.push(newCat);
    return this.save();
}

const Product = mongoose.model('Product', productSchema);

const findProduct = async () => {
    try {
        const foundProduct = await Product.findOne({ name: 'Tire Pump' });
        console.log(foundProduct);
        await foundProduct.toggleOnSale();
        console.log(foundProduct);
        await foundProduct.addCategory('Accessories'); 
        console.log(foundProduct);
    }
    catch {
        console.log('Promise unresolved')
    }
}

findProduct();

// const bike = new Product({ name: 'Cycling Jersey', price: 49.99, categories: ['Cycling', 'Safety'], size: 'Medium' });

// bike.save()
//     .then(data => {
//         console.log('Product Added.');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Error!');
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: -9.99 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log('Product Added.');
//         console.log(data);
//     })
//     .catch(err => {
//         console.log('Error!');
//         console.log(err)
//     })