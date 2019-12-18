const boardContainer = document.querySelector(".board");

const Gameboard = (gameboardContainer) => {
  const board = ["","","","","","","","",""];
  const boardContainer = document.querySelector(".board");

  const create = () => {

    for (let i = 0; i < board.length; i++) {
      const boardCell = document.createElement('p');
      boardCell.className = 'board-cell';
      boardCell.dataset.index = i;
      boardContainer.appendChild(boardCell)
    }
    update();
  }

  const placeToken = (target, token) => {
    board[target] = token;
    update();
  };

  const update = () => {
    
    const cells = boardContainer.children;

    for (let i = 0; i < board.length; i++) {
      cells[i].innerText = `${board[i]}`;
    }
  }

  return {board, boardContainer, placeToken, create, update}
};

const player = (symbol) => {

  const playerSymbol = symbol;

  return {
    playerSymbol
  };
}

const Game = (gameboard, player) => {
  
  let roundNumber = 0;
  const player1 = player("X");
  const player2 = player("O");
  let players = [player1, player2]

  gameboard.create();

  gameboard.boardContainer.addEventListener('click', (event) => {
    const tokenToPlace = players[roundNumber % 2].playerSymbol;
    if (gameboard.board[event.target.dataset.index] === "") {
      gameboard.placeToken(event.target.dataset.index, tokenToPlace);
      roundNumber++;
    } else {
      console.log("There is already a selection here.");  
    }
    console.log(`Round count is: ${roundNumber}`);


  });

  return {gameboard, player}
};

const newGame = Game(Gameboard(boardContainer), player);

// Inside Game
// let roundNumber = 0;
// let players = [Player1('X'), Player2('O')];
// const board = Board(ticTacToeContainer); // To build the board inside of 
// ticTacToeContainer.addEventListener('click', (event) => {
//   const tokenToPlace = players[roundNumber % 2].token;
//   board.placeToken(event.target.value, tokenToPlace);
//   const winner = board.checkWinner();
//   if(winner === 1) {
//     renderWinner({winner: player1, loser: player2});
//   } else if (winner === -1) {
//     renderWinner({winner: player2, loser: player1});
//   } else if (winner === 0 && roundNumber === 9) {
//     renderDraw(player1, player2);
//   } else {
//     render();
//   }
// });