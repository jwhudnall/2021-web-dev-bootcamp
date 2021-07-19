// Fetch API
// Fetch creates a promise, which is resolved when HEADERS are received.
// The data itself can be retrieved using the .then(response).json() method

fetch('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        console.log('Headers retrieved...')
        return res.json(); // 
    })
    .then(data => {
        console.log('Data parsed!');
        console.log(data.ticker.price)
    })
    .catch(err => {
        console.log('Error: ', err)
    })

// Async version
const fetchBtcPrice = async () => {
    try {
        const res = await fetch('https://api.cryptonator.com/api/ticker/btc-usd');
        const data = await res.json();
        console.log(data.ticker.price);
    } catch(e) {
        console.log('Error: ', e)
    }

}