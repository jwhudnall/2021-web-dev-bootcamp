const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }))

app.get('/tacos', (req, res) => {
    res.send('GET /tacos Reponse Here')
})

app.post('/tacos', (req, res) => {
    // const meat = req.body.meat;
    // const qty = req.body.qty;
    const { meat, qty } = req.body;
    console.log(`User requested ${qty} of ${meat} tacos.`);
    res.send(`Serving your requested ${qty} of ${meat} tacos!`)
})

app.listen(3000, () => {
    console.log("Listening on port 3000...");
})