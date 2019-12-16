const boardContainer = document.querySelector(".board");

const Gameboard = (gameboardContainer) => {
  const board = ["test","test","test","test","test","test","test","test","test"];
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
    gameboard.placeToken(event.target.dataset.index, tokenToPlace);
    roundNumber++;
  });

  return {gameboard, player}
};

const newGame = Game(Gameboard(boardContainer), player);