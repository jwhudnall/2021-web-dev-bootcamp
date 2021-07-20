axios.get('https://api.cryptonator.com/api/ticker/btc-usd')
    .then(res => {
        const btcPrice = res.data.ticker.price;
        console.log('Current BTC price: ', btcPrice);
    })
    .catch(e => {
        console.log('Uh oh! ', e)
    })

// Async Function Version
const getBTC = async () => {
    try {
        const response = await axios.get('https://api.cryptonator.com/api/ticker/btc-usd');
        console.log(response.data.ticker.price)

    } catch (e) {
        console.log(e)
    }
}

// Setting Headers
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config);
        const joke = res.data.joke;
        return joke;
    } catch (e) {
        return "No Jokes Available."
    }
}

const addNewJoke = async () => {
    try {
        const jokeText = await getDadJoke();
        const newLI = document.createElement('LI');
        newLI.append(jokeText);
        jokeList.append(newLI);
    } catch (e) {

    }
}

const clearList = () => {
    const jokeList = document.querySelector('#jokeList');
    jokeList.innerHTML = "";
}

const jokeBtn = document.querySelector('#jokeBtn');
const clearBtn = document.querySelector('#clearList');
const jokeList = document.querySelector('#jokeList');

jokeBtn.addEventListener('click', addNewJoke);
clearBtn.addEventListener('click', clearList)