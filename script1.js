const cells = document.querySelectorAll('.cell');
let currentPlayer = 'x';
let gameState = ["", "", "", "", "", "", "", "", ""];
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleClick(event) {
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (gameState[index] !== "" || checkWin()) return;

    gameState[index] = currentPlayer;
    cell.classList.add(currentPlayer);

    if (checkWin()) {
        alert(`Player ${currentPlayer.toUpperCase()} wins!`);
    } else if (gameState.every(cell => cell !== "")) {
        alert("It's a draw!");
    }

    currentPlayer = currentPlayer === 'x' ? 'o' : 'x';
}

function checkWin() {
    return winConditions.some(combination => {
        return combination.every(index => gameState[index] === currentPlayer);
    });
}

cells.forEach(cell => cell.addEventListener('click', handleClick));
