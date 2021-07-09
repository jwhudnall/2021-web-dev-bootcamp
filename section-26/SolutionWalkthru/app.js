let numberOfPlayers = 0;

const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playTo');
let winningScore = parseInt(winningScoreSelect.value)
let isGameOver = false;

function updateScores(player, opponent) {
    if (!isGameOver) {
        player.score++;
        player.display.textContent = player.score;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}


p1.button.addEventListener('click', function () {
    updateScores(p1, p2);
})

p2.button.addEventListener('click', function () {
    updateScores(p2, p1);
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

const numPlayers = document.querySelector('#numPlayers');
const numPlayersLabel = document.querySelector('#numPlayersLabel');

numPlayers.addEventListener('change', function () {
    numberOfPlayers = this.value;
    document.querySelector('#naming').remove();
    console.log(`${numberOfPlayers} players!`)

    addPlayer('player1Name', 'player1Name', 'Player 1 Name');
    addPlayer('player2Name', 'player2Name', 'Player 2 Name');
    // ToDo:
    // Add submit button that captures players names
    // Change green/blue button text to display player names
}
)

function addPlayer(id, name, labelText) {
    const newDiv = document.createElement('div');
    const newInput = document.createElement('input');
    newInput.id = id;
    newInput.name = name;
    newInput.type = 'text';
    const label = document.createElement('label');
    label.setAttribute('for', name);
    label.innerHTML = labelText;
    newDiv.append(label);
    newDiv.append(newInput);
    document.querySelector('#introduction').append(newDiv);
}