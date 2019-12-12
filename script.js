const Gameboard = () => {
  const board = ["X","X","X","O","O","O","X","X","X"];
  const boardContainer = document.querySelector(".board");

  const create = (boardContainer,board) => {

    
    for (let i = 0; i < board.length; i++) {
      const boardCell = document.createElement('p');
      boardCell.className = 'board-cell';
      boardCell.id = `cell ${i}`
      boardCell.addEventListener('click', () => {
        // console.log(boardCell.id);
      });
      boardContainer.appendChild(boardCell)
    }
  }

  const update = (boardContainer,board) => {
    
    const cells = boardContainer.children;

    for (let i = 0; i < board.length; i++) {
      cells[i].innerText = `${board[i]}`;
    }
  }

  return {board,boardContainer,create,update}
};
let count = 0;
const player = () => {

  const symbols = ['X','O']

  const symbol = symbols[count];

  return count++,{name,symbols,symbol};
}

const Game = (Gameboard,player) => {

  const player1 = player();
  const player2 = player();
  console.log(player1.symbol);
  console.log(player2.symbol);
  
  Gameboard.create(Gameboard.boardContainer,Gameboard.board);
  Gameboard.update(Gameboard.boardContainer,Gameboard.board);
  

  return {Gameboard,player}
};

const newGame = Game(Gameboard(),player);