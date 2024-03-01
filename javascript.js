const form = document.getElementById('playerNames');
const playBtn = document.getElementById('play');
const closeBtn = document.getElementById('hide');
const dialog = document.getElementById('dialog'); 
const boardContainer = document.querySelector('.gameboard');

//create players object by using factory function
const createPlayer = function(name, symbol){
    return {name, symbol}
};

//get user input to create objects
playBtn.onclick = function(){
    dialog.showModal();
}
closeBtn.onclick = function(){
    dialog.close();
}

let playerNames = [];
form.addEventListener('submit', function(e){
    e.preventDefault();
        
    const player1Name = document.getElementById('player1Name').value;
    const player2Name = document.getElementById('player2Name').value;

    // Create player objects using the factory function
    const player1 = createPlayer(player1Name, 'X');
    const player2 = createPlayer(player2Name, 'O');

    playerNames.push(player1);
    playerNames.push(player2);

    dialog.close();
});

console.log(playerNames[1]);  // Access player1
console.log(playerNames[0]);  // Access player2

//logic to decide, put symbol and to prevent collision
const putSymbol = () => {
    //if its player1 turn put textcontent X, else put O
    return (decideTurn() === playerNames[0]) ? button.textContent = playerNames[0].symbol : button.textContent = playerNames[1].symbol;
}

//logic to decide turn
let playerTurn = playerNames[0];
const decideTurn = () => {
    //if player1 plays, then switch to player2 turn
    return (playerTurn === playerNames[0])? playerNames[1] : playerNames[0];
}

//create gameboard and draw the gameboard to ui
let button;
const gameboard = (function(){
    const board = [];
    const row = 3;
    const column = 3;
    for(i = 0; i < row; i++){
        for(j = 0; j < column; j++){
            button = document.createElement('button');
            button.classList.add('board-button');
            button.textContent = '';
            button.addEventListener('click', putSymbol);
            board.push(button);
            boardContainer.appendChild(button);
        }
        boardContainer.appendChild(document.createElement('br'));
    }
    const getBoard = ()=> board; 
    //return { getBoard }
});
gameboard();
//const board = gameboard().getBoard();

//decide winning conditions(array/check each conditions)
//display element that shows winner and gets removed from the screen
//add restart button to play new game
