const Gameboard = () => {
  const board = ["X","X","X","O","O","O","X","X","X"];

  const create = (board) => {

    const boardContainer = document.querySelector(".board")
    for (let i = 0; i < board.length; i++) {
      const boardCell = document.createElement('p');
      boardCell.className = 'board-cell';
      boardCell.id = `${i}`;
      boardCell.innerText = `${board[i]}`;
      boardContainer.appendChild(boardCell)
    }
  }

  return { board, create }
};

const player = (name) => {
  return {name}
}

const Game = (Gameboard,player) => {
  
  Gameboard
  Gameboard.create(Gameboard.board);
  
  player

  return { Gameboard, player }
};

const newGame = Game(Gameboard(),"Carlos");