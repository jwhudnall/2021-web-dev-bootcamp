const express = require('express');
const app = express()
const port = 3000;

// app.use((req, res) => {
//     console.log('Request received.'); // Shows requests in terminal
//     // res.send({ color: 'red' })
//     res.send('<h1>Welcome to My Webpage</h1><ul>Topics</ul><li>Bitcoin</li><li>Health</li></ul>')
// })

// root route
app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1>')
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

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
