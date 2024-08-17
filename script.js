let scores, currentScores, activePlayer, gamePlaying;

const dice = document.getElementById('dice');
const score1 = document.getElementById('score-1');
const score2 = document.getElementById('score-2');
const current1 = document.getElementById('current-1');
const current2 = document.getElementById('current-2');

function initGame() {
	scores = [0, 0];
	currentScores = [0, 0];
	activePlayer = 0; // 0 for player 1, 1 for player 2
	gamePlaying = true;

	score1.textContent = '0';
	score2.textContent = '0';
	current1.textContent = '0';
	current2.textContent = '0';
	dice.src = 'dice-1.png'; // Default dice face

	document.querySelectorAll('.player-info').forEach((player) => player.style.backgroundColor = '#fff');
	document.getElementById(`player-${activePlayer + 1}`).style.backgroundColor = '#d3d3d3';
}

function rollDice() {
	if (!gamePlaying) return;

	const roll = Math.floor(Math.random() * 6) + 1;
	dice.src = `dice-${roll}.png`;

	if (roll !== 1) {
		currentScores[activePlayer] += roll;
		document.getElementById(`current-${activePlayer + 1}`).textContent = currentScores[activePlayer];
	} else {
		nextPlayer();
	}
}

function hold() {
	if (!gamePlaying) return;

	scores[activePlayer] += currentScores[activePlayer];
	document.getElementById(`score-${activePlayer + 1}`).textContent = scores[activePlayer];

	if (scores[activePlayer] >= 100) {
		alert(`Player ${activePlayer + 1} wins!`);
		gamePlaying = false;
		return;
	}

	currentScores[activePlayer] = 0;
	document.getElementById(`current-${activePlayer + 1}`).textContent = '0';
	nextPlayer();
}

function nextPlayer() {
	currentScores[activePlayer] = 0;
	document.getElementById(`current-${activePlayer + 1}`).textContent = '0';

	activePlayer = activePlayer === 0 ? 1 : 0;

	document.querySelectorAll('.player-info').forEach((player) => player.style.backgroundColor = '#fff');
	document.getElementById(`player-${activePlayer + 1}`).style.backgroundColor = '#d3d3d3';
}

function newGame() {
	initGame();
}

// Initialize the game on page load
initGame();
