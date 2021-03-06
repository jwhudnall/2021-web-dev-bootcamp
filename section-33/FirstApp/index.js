const express = require('express');
const app = express()
const port = 3000;

// app.use((req, res) => {
//     console.log('Request received.'); // Shows requests in terminal
//     // res.send({ color: 'red' })
//     res.send('<h1>Welcome to My Webpage</h1><ul>Topics</ul><li>Bitcoin</li><li>Health</li></ul>')
// })

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
// root route
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
})

app.get('/r/:subreddit/:postID', (req, res) => {
    const { subreddit, postID } = req.params;
    res.send(`<h1>Welcome to the ${subreddit.capitalize()} Subreddit</h1><h2>Viwing Post ID: ${postID}</h2>`)
})

app.post('/cats', (req, res) => {
    res.send('POST request received...')
})

// /cats => 'meow'
app.get('/cats', (req, res) => {
    console.log('Cat Request!'); // displayed in terminal
    res.send('Meow!');
})
// /dogs => 'woof'
app.get('/dogs', (req, res) => {
    res.send('Woof!');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`<h1>Search Results for: ${q}</h1>`)
})

// Routes remaining GET requests.
// MUST be placed at end (blocks other routes otherwise)
app.get('*', (req, res) => {
    res.send('Error 404. Content not found.')
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});