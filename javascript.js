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
form.addEventListener('submit', function(e){
    e.preventDefault();
        
    const player1Name = document.getElementById('player1Name').value;
    const player2Name = document.getElementById('player2Name').value;

    // Create player objects using the factory function
    const player1 = createPlayer(player1Name, 'X');
    const player2 = createPlayer(player2Name, 'O');

    dialog.close();
});

//create gameboard
const gameboard = (function(){
    const board = [];
    const row = 3;
    const column = 3;
    for(i = 0; i < row; i++){
        for(j = 0; j < column; j++){
            const button = document.createElement('button');
            button.classList.add('board-button');
            button.textContent = '';
            //button.addEventListener('click', putSymbol);
            board.push(button);
            boardContainer.appendChild(button);
        }
        boardContainer.appendChild(document.createElement('br'));
    }
    const getBoard = ()=> board; 
    //return { getBoard }
});
gameboard();

//draw the gameboard to ui
//ability to put symbols inside the gameboard spots
//logic to decide turn
//logic to decide symbol
//logic to prevent collision
//decide winning conditions(array/check each conditions)
//display element that shows winner and gets removed from the screen
//add restart button to play new game
