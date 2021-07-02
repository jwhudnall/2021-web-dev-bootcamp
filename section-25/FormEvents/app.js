const tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', function(e) {
    e.preventDefault(); // prevents page navigation to "action"

    const tweetList = document.querySelector('#tweets');
    const username = this.elements.username.value; // input with name = "username"
    const tweet = this.elements.tweet.value;       // input with name = "tweet"

    const newTweet = document.createElement('li');
    const boldTag = document.createElement('b');
    boldTag.append(username); // Bolded username
    newTweet.append(boldTag); // Adds bolded username to <li>
    newTweet.append(`- ${tweet}`);

    tweetList.append(newTweet);
})

// To Do:
// Take username and tweet from form
// Add as a new <li> within existing #tweet <ul>
// using input's .value method
// clear inputs after appended