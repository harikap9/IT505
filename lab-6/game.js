const buttons = document.querySelectorAll('.game-button');
const startButton = document.getElementById('startButton');
const scoreDisplay = document.getElementById('score');
let sequence = [];
let playerSequence = [];
let score = 0;
let isPlaying = false;

startButton.addEventListener('click', startGame);

buttons.forEach(button => {
    button.addEventListener('click', () => {
        if (!isPlaying) return;
        const color = button.dataset.color;
        activateButton(button);
        handlePlayerInput(color);
    });
});

function startGame() {
    sequence = [];
    playerSequence = [];
    score = 0;
    scoreDisplay.textContent = score;
    addToSequence();
}

function addToSequence() {
    const colors = ['red', 'green', 'blue', 'yellow'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    sequence.push(randomColor);
    playSequence();
}

async function playSequence() {
    isPlaying = false;
    startButton.disabled = true;

    for (const color of sequence) {
        await new Promise(resolve => setTimeout(resolve, 500));
        const button = document.querySelector(`[data-color="${color}"]`);
        await activateButton(button);
    }

    isPlaying = true;
    playerSequence = [];
    startButton.disabled = false;
}

function activateButton(button) {
    return new Promise(resolve => {
        button.classList.add('active');
        setTimeout(() => {
            button.classList.remove('active');
            setTimeout(resolve, 100);
        }, 300);
    });
}

function handlePlayerInput(color) {
    playerSequence.push(color);
    const currentIndex = playerSequence.length - 1;

    if (playerSequence[currentIndex] !== sequence[currentIndex]) {
        alert(`Game Over! Your score: ${score}`);
        startButton.textContent = 'Play Again';
        isPlaying = false;
        return;
    }

    if (playerSequence.length === sequence.length) {
        score++;
        scoreDisplay.textContent = score;
        playerSequence = [];
        setTimeout(addToSequence, 1000);
    }
}

// Last modified script
var x = document.lastModified;
document.getElementById('lastModified').textContent = x;