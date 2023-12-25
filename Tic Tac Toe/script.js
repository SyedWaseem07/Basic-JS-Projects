const cells = document.querySelectorAll('.cell');
const restartBtn = document.getElementById('btn');
const statusText = document.getElementById('statusText');

const winOptions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

let player = "X";
let running = false;

let filled = ["", "", "", "", "", "", "", "", ""];

initializeGame()

function initializeGame() {
    running = true;
    console.log("0");
    cells.forEach((box) => {
        box.addEventListener('click', cellClicked)
        console.log("clicked");
    });
    console.log("1");
    restartBtn.addEventListener('click', restartGame);
    statusText.textContent = `${player}'s turn`
}

function cellClicked(){
    let index = this.getAttribute('index');
    if(filled[index] != "" || !running) {
        return;
    }    
    updateValue(this, index);
    checkWinner()
}

function updateValue(box, index){
    filled[index] = `${player}`;
    box.textContent = `${player}`
}

function checkWinner() {
    let flag = false;
    for(let i = 0; i < winOptions.length; ++i) {
        let option = winOptions[i];
        const first = filled[option[0]];
        const second = filled[option[1]];
        const third = filled[option[2]];
        if(first === '' || second === '' || third === '') {
            continue;
        }
        if(first === second && second === third) {
            flag = true;
            break;
        }
    }
    if(flag) {
        statusText.textContent = `${player} wins`;
        running = false;
    } else if(!filled.includes('')) {
        statusText.textContent = `Draw`;
    } else {
        changePlayer()
    }
}
function changePlayer() {
    player = (player === 'X') ? 'O' : 'X';
    statusText.textContent = `${player}'s turn`;
}
function restartGame() {
    cells.forEach((box) => box.textContent = '');
    filled = ["", "", "", "", "", "", "", "", ""];
    player = 'X';
    running = true;
    statusText.textContent = `${player}'s turn`
}
















































































// const cells = document.querySelectorAll('.cell');

// const statusText = document.querySelector('#statusText')

// const restart = document.querySelector('#btn')

// let attempts = ["", "", "", "", "", "", "", "", ""];

// const winPossibilities = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ];

// let startGame = false;
// let currentPlayer = "X";

// initializeGame();

// function initializeGame() {
//     startGame = true;
//     cells.forEach(cell => cell.addEventListener('click', cellClicked));
//     restart.addEventListener('click', restartGame);
//     statusText.textContent = `${currentPlayer}'s turn`;
// }

// function cellClicked() {
//     let index = this.getAttribute('index');
//     if(attempts[index] != "" || !startGame){
//         return;
//     }
//     updateCell(this, index);
//     checkWinner();
// }

// function updateCell(cell, index){
//     attempts[index] = `${currentPlayer}`;
//     cell.textContent = `${currentPlayer}`;
// }

// function changePlayer() {
//     currentPlayer = (currentPlayer === 'X')? 'O':'X';
//     statusText.textContent = `${currentPlayer}'s turn`;
// }
// function checkWinner() {
//     let winner = false;
//     for(let i = 0; i < winPossibilities.length; ++i) {
//         const possibility = winPossibilities[i];
//         const cell1 = attempts[possibility[0]];
//         const cell2 = attempts[possibility[1]];
//         const cell3 = attempts[possibility[2]];
//         if(cell1 == '' || cell2 == '' || cell2 =='') continue;
//         if(cell1 === cell2 && cell2 === cell3){
//             winner = true;
//             break;
//         }
//     } 
//     if(winner) {
//         statusText.textContent = `${currentPlayer} wins!!!`;
//     } else if(!attempts.includes('')){
//         statusText.textContent = `Draw`;
//         startGame = false;
//     } else {
//         changePlayer();
//     }
// }

// function restartGame(){
//     currentPlayer = 'X'
//     attempts = ["", "", "", "", "", "", "", "", ""];
//     statusText.textContent = `${currentPlayer}'s turn`;
//     cells.forEach(cell => cell.textContent = '');
//     startGame = true;
// }