let winningScoreSelect = document.querySelector('#score-select');
let p1Score = 0;
let p2Score = 0;
let winningScore = parseInt(winningScoreSelect.value);
const reset = document.querySelector('#reset');

let p1ScoreSpan = document.querySelector('#p1ScoreSpan');
let p2ScoreSpan = document.querySelector('#p2ScoreSpan');

const p1ScoreBtn = document.querySelector('#p1ScoreButton');
const p2ScoreBtn = document.querySelector('#p2ScoreButton');

p1ScoreBtn.addEventListener('click', function(e) {
    p1Score++;
    p1ScoreSpan.textContent = p1Score;
    checkStatus();
})

p2ScoreBtn.addEventListener('click', function(e) {
    p2Score++;
    p2ScoreSpan.textContent = p2Score;
    checkStatus();
})

winningScoreSelect.addEventListener('input', function(e) {
    winningScore = parseInt(winningScoreSelect.value);
})

reset.addEventListener('click', function() {
    resetGame();
})

function checkStatus() {
    if(p1Score === winningScore || p2Score === winningScore) {
        // Logic for Gameover
        if(p1Score > p2Score) {
            // Player 1 won
            p1ScoreSpan.classList.toggle('#won');
            p2ScoreSpan.classList.toggle('#lost');
            p1ScoreSpan.classList.add('won');
            p2ScoreSpan.classList.add('lost');
        } else {
            // Player 2 won
            p1ScoreSpan.classList.toggle('#lost');
            p2ScoreSpan.classList.toggle('#won');
            p1ScoreSpan.classList.add('lost');
            p2ScoreSpan.classList.add('won');
        }
        p1ScoreBtn.disabled = true;
        p2ScoreBtn.disabled = true;
    }
}

function resetGame() {
    const cls = ["won", "lost"]
    // Reset both scores to 0
    p1Score = 0;
    p2Score = 0;
    // Change span text to 0 & remove class
    p1ScoreSpan.textContent = '0';
    p1ScoreSpan.classList.remove(...cls);
    p2ScoreSpan.textContent = '0';
    p2ScoreSpan.classList.remove(...cls);
    // Re-enable p1/p2 buttons
    p1ScoreBtn.disabled = false;
    p2ScoreBtn.disabled = false;
}