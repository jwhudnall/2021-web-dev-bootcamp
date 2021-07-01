const tweetForm = document.querySelector('#tweetForm');
tweetForm.addEventListener('submit', function(e) {
    alert('Tweet Sent!');
    e.preventDefault(); // prevents page navigation to "action"
})