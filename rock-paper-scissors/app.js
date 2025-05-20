let playerScore = 0;
let computerScore = 0;
let history = [];

const clickSound = document.getElementById('click-sound');
const winSound = document.getElementById('win-sound');
const loseSound = document.getElementById('lose-sound');
const drawSound = document.getElementById('draw-sound');

function play(playerChoice) {
    clickSound.play();
    const choices = ['rock', 'paper', 'scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    // Highlight selections
    document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
    document.getElementById(playerChoice).classList.add('selected');
    document.getElementById(computerChoice).classList.add('selected');

    // Determine winner
    let result = '';
    if (playerChoice === computerChoice) {
        result = "It's a Draw!";
        drawSound.play();
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You Win!';
        playerScore++;
        winSound.play();
    } else {
        result = 'Computer Wins!';
        computerScore++;
        loseSound.play();
    }

    // Update scoreboard
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    // Update result
    document.getElementById('result').textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`;

    // Update history
    history.push(`Round ${history.length + 1}: You chose ${playerChoice}, Computer chose ${computerChoice}. ${result}`);
    updateHistory();

    // Remove highlight after animation
    setTimeout(() => {
        document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
    }, 1000);
}

function updateHistory() {
    const historyDiv = document.getElementById('history');
    historyDiv.innerHTML = history.map(item => `<p>${item}</p>`).join('');
    historyDiv.scrollTop = historyDiv.scrollHeight;
}

function resetGame() {
    clickSound.play();
    playerScore = 0;
    computerScore = 0;
    history = [];
    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;
    document.getElementById('result').textContent = '';
    document.getElementById('history').innerHTML = '';
    document.querySelectorAll('.choice').forEach(c => c.classList.remove('selected'));
}