const Gameboard = () => {
  const board = ["X","X","X","O","O","O","X","X","X"];
  const boardContainer = document.querySelector(".board");

  const create = (boardContainer,board) => {

    
    for (let i = 0; i < board.length; i++) {
      const boardCell = document.createElement('p');
      boardCell.className = 'board-cell';
      boardCell.id = `${i}`
      boardCell.addEventListener('click', () => {
        board[`${parseInt(boardCell.id)}`] = "test";
        console.log(board);
        update(boardContainer,board);
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

const player = (symbol,name) => {

  const playerSymbol = symbol;
  const PlayerName = name;

  return {
    playerSymbol,
    PlayerName
  };
}

const Game = (Gameboard,player) => {

  const player1 = player("X","Sofía");
  const player2 = player("O","Serena")

  console.log(player1.playerSymbol);
  console.log(player1.PlayerName);
  console.log(player2.playerSymbol);
  console.log(player2.PlayerName);
  
  Gameboard.create(Gameboard.boardContainer,Gameboard.board);
  Gameboard.update(Gameboard.boardContainer,Gameboard.board);
  

  return {Gameboard,player}
};

const newGame = Game(Gameboard(),player);