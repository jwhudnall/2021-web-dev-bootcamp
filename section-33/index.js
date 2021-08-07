const express = require('express');
const app = express()
const port = 3000;

app.use(() => {
    console.log('Ping!'); // Shows requests in terminal
})

// app.get('/', function(req, res) {
//     res.send('Hello World');
// })

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
