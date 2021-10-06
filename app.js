const player1 = {
    score: 0,
    button: document.querySelector("#p1Btn"),
    display: document.querySelector('#p1Score')
}

const player2 = {
    score: 0,
    button: document.querySelector("#p2Btn"),
    display: document.querySelector('#p2Score')
}

const resetBtn = document.querySelector("#reset");
const winScoreSelect = document.querySelector("#playTo");
let winScore = 3;
let isGameOver = false;

winScoreSelect.addEventListener('change', function(e) {
     winScore = parseInt(this.value);
})

player1.button.addEventListener('click', function () {
    changeScore(player1, player2);
})

player2.button.addEventListener('click', function () { 
    changeScore(player2, player1);
})

resetBtn.addEventListener('click', reset);

function changeScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winScore) { 
            isGameOver = true; 
            player.display.classList.add('winner');
            opponent.display.classList.add('looser');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.innerHTML = player.score;
    }
}

function reset() {
    isGameOver = false;
    for (let player of [player1, player2]) {
        player.display.innerHTML = 0;
        player.score = 0;
        player.display.classList.remove('winner', 'looser');
        player.button.disabled = false;
    }
}