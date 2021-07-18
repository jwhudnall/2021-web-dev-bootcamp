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
