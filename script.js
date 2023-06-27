function render() {
    
    for (let i = 0; i < gameboard.length; i++) {
        if (gameboard[i] === "X") {
            const marker = document.createElement('span')
            const square = document.querySelector(`.square_${i}`)
            marker.appendChild(document.createTextNode(`${gameboard[i]}`));
            square.appendChild(marker);
            gameboard[i] = "x";
        }
        else if (gameboard[i] === "O") {
            const marker = document.createElement('span')
            const square = document.querySelector(`.square_${i}`)
            marker.appendChild(document.createTextNode(`${gameboard[i]}`));
            square.appendChild(marker);
            gameboard[i] = "o";
        }
    }
}

let gameboard = ['', '', '', '', '', '', '', '', ''];


// const Gameboard = {
//     status: ['', '', '', '', '', '', '', '', '']
// }

const createPlayer = (name, marker) => {
    // const getMarker = () => {
    //     if clicked X button, return X
    //     if clicked O button, return O
    // }
    return {name, marker}
}

const playerOne = createPlayer('Player 1', 'X');
const playerTwo = createPlayer('Player 2', 'O');

// current position of the tiles forEach loop
let currentPosition = 0;
// if turn_counter = 0, then it is X's turn. turn_counter = 1 is O's turn
let turn_counter = 0;


const tiles = document.querySelectorAll('.square');
tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => {
        if (turn_counter === 0) {
            gameboard[index] = 'X';
            // checkWin();
            turn_counter++;
        }
        else {
            gameboard[index] = 'O';
            // checkWin();
            turn_counter--;
        }
        render();
    });
});
