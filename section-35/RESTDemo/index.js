const express = require('express');
const app = express();
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const methodOverride = require('method-override')

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

app.use(express.urlencoded({ extended: true })) // Allows reading of URL encoded values
app.use(express.json()); // Allows reading of JSON files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const comments = [
    {
        id: uuidv4(),
        username: 'James',
        comment: 'That is so funny!'
    },
    {
        id: uuidv4(),
        username: 'Samantha',
        comment: 'I love Millie!'
    },
    {
        id: uuidv4(),
        username: 'Tuxedo',
        comment: 'I like fighting with Millie.'
    },
    {
        id: uuidv4(),
        username: 'Millie',
        comment: 'Woof'
    }
]

app.get('/comments', (req, res) => {
    res.render('comments/index.ejs', { comments })
})

app.get('/comments/new', (req, res) => {
    res.render('comments/new.ejs');
})

// Add form data to existing "comments" array
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.push({ username: username, comment: comment, id: uuidv4() })
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    // req.params.id: retrieve id
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', { comment })
})

app.get('/comments/:id/edit', (req, res) => {
    const { id } = req.params;
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', { comment })
})

app.patch('/comments/:id', (req, res) => {
    const { id } = req.params;
    const newCommentText = req.body.comment;
    const foundComment = comments.find(c => c.id === id);
    foundComment.comment = newCommentText;
    res.redirect('/comments')
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

