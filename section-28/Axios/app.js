axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        const btcPrice = res.data.ticker.price;
        console.log('Current BTC price: ', btcPrice);
    })
    .catch(e => {
        console.log('Uh oh! ', e)
    })

const getBTC = async () => {
    try {
        const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(response.data.ticker.price)

    } catch(e) {
        console.log(e)
    }
}