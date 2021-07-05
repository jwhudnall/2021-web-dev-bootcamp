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

function checkStatus() {
    if(p1Score === winningScore || p2Score === winningScore) {
        // Logic for Gameover
        console.log('Game Over!'); // Remove in future
        if(p1Score > p2Score) {
            // Player 1 won
            p1ScoreSpan.classList.toggle('#won');
            p2ScoreSpan.classList.toggle('#lost');
            console.log('Player 1 won!')
            p1ScoreSpan.classList.add('won');
            p2ScoreSpan.classList.add('lost');
        } else {
            p1ScoreSpan.classList.toggle('#lost');
            p2ScoreSpan.classList.toggle('#won');
            console.log('Player 2 won!');
            p1ScoreSpan.classList.add('lost');
            p2ScoreSpan.classList.add('won');
        }
        p1ScoreBtn.disabled = true;
        p2ScoreBtn.disabled = true;
    }
}