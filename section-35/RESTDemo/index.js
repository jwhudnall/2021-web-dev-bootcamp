const express = require('express');
const app = express();
const path = require('path');

app.use(express.urlencoded({ extended: true })) // Allows reading of URL encoded values
app.use(express.json()); // Allows reading of JSON files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        username: 'James',
        comment: 'That is so funny!'
    },
    {
        username: 'Samantha',
        comment: 'I love Millie!'
    },
    {
        username: 'Tuxedo',
        comment: 'I like fighting with Millie.'
    },
    {
        username: 'Millie',
        comment: 'Woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments })
})

app.get('/tacos', (req, res) => {
    res.send('GET /tacos Reponse Here')
})

app.post('/tacos', (req, res) => {
    // const meat = req.body.meat;
    // const qty = req.body.qty;
    const { meat, qty } = req.body;
    console.log(`User requested ${qty} of ${meat} tacos.`); // logs in CLI
    res.send(`Serving your requested ${qty} of ${meat} tacos!`) // Displays on page
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})

// Pseudo "Database"
// GET /comments - list all comments
// POST /comments - Create a new comment
// GET /comments/:id - Get one comment (using ID)
// PATCH /comments/:id - Update one comment
// DELETE /comments/:id - Destroy one comment

