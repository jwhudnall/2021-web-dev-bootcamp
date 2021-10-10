const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/relationshipDemo');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Database connected');
});

const userSchema = new mongoose.Schema({
    first: String,
    last: String,
    addresses: [
        {
            street: String,
            city: String,
            state: String,
            country: {
                type: String,
                required: true
            }
        }
    ]
})

const User = mongoose.model('User', userSchema);

const makeUser = async () => {
    const u = new User({
        first: 'Harry',
        last: 'Potter'
    })
    u.addresses.push({
        street: '123 Privet DR',
        city: 'London',
        state: 'NY',
        country: 'US'
    })
    const res = await u.save();
    console.log(res);
}

const addAddress = async (id) => {
    const user = await User.findById(id);
    user.addresses.push(
        {
            street: '8928 Nomnom AVE',
            city: 'London',
            state: 'KY',
            country: 'US'
        }
    )
    const res = await user.save();
    console.log(res);
}

makeUser();