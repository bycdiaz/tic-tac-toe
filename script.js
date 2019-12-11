const Gameboard = () => {
  const board = ["X","X","X","O","O","O","X","X","X"];
  const boardContainer = document.querySelector(".board");

  const create = (boardContainer, board) => {

    
    for (let i = 0; i < board.length; i++) {
      const boardCell = document.createElement('p');
      boardCell.className = 'board-cell';
      boardContainer.appendChild(boardCell)
    }
  }

  const update = (boardContainer, board) => {
    
    const cells = boardContainer.children;

    for (let i = 0; i < board.length; i++) {
      cells[i].innerText = `${board[i]}`;
    }
  }

  return { board, boardContainer, create, update }
};

const player = (name) => {
  return {name}
}

const Game = (Gameboard,player) => {

  Gameboard.create(Gameboard.boardContainer,Gameboard.board);
  Gameboard.update(Gameboard.boardContainer,Gameboard.board);
  player

  return { Gameboard, player }
};

const newGame = Game(Gameboard(),"Carlos");