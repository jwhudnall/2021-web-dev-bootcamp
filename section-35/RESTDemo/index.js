const express = require('express');
const app = express();

app.get('/tacos', (req, res) => {
    res.send('GET /tacos Reponse Here')
})

app.post('/tacos', (req, res) => {
    res.send('POST /tacos Response Here')
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})