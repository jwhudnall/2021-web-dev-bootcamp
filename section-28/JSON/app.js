// XML Requests (not frequently used)
const myReq = new XMLHttpRequest();

myReq.onload = function() {
    const data = JSON.parse(this.responseText);
};
myReq.onerror = function(err) {
    console.log('Error!', err)
};

myReq.open('get', 'https://icanhazdadjoke.com/', true);
myReq.setRequestHeader('Accept', 'application/json');
myReq.send();


// btc price lookup
const req = new XMLHttpRequest();

req.onload = function() {
    console.log('Request complete');
    const data = JSON.parse(this.responseText);
    console.log(data.ticker.price);
}

req.onerror = function() {
    console.log('Error. Request timed out...')
};

req.open('get', 'https://api.cryptonator.com/api/ticker/btc-usd', true);
req.send();