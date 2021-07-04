let p1Score = 0;
let p2Score = 0;

let p1ScoreSpan = document.querySelector('#p1ScoreSpan');
let p2ScoreSpan = document.querySelector('#p2ScoreSpan');

const p1ScoreBtn = document.querySelector('#p1ScoreButton');
const p2ScoreBtn = document.querySelector('#p2ScoreButton');

p1ScoreBtn.addEventListener('click', function(e) {
    p1Score++;
    p1ScoreSpan.textContent = p1Score;
})

p2ScoreBtn.addEventListener('click', function(e) {
    p2Score++;
    p2ScoreSpan.textContent = p2Score;
})