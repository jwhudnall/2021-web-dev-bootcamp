const tweetForm = document.querySelector('#tweetForm');
const tweetList = document.querySelector('#tweets');

tweetForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevents page navigation to "action"
    const usernameInput = tweetForm.elements.username; // input with name = "username"
    const tweetInput = this.elements.tweet;       // input with name = "tweet"

    addTweet(usernameInput.value, tweetInput.value);
    usernameInput.value = "";
    tweetInput.value = "";
})

const addTweet = (username, tweet) => {
    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(username); // Bolded username
    newTweet.append(boldTag); // Adds bolded username to <li>
    newTweet.append(`- ${tweet}`);
    tweetList.append(newTweet);
}