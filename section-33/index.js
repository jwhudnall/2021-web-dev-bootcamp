const express = require('express');
const app = express()
const port = 3000;

app.use((req, res) => {
    console.log('Request received.'); // Shows requests in terminal
    // res.send({ color: 'red' })
    res.send('<h1>Welcome to My Webpage</h1><ul>Topics</ul><li>Bitcoin</li><li>Health</li></ul>')
})

// app.get('/', function(req, res) {
//     res.send('Hello World');
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
