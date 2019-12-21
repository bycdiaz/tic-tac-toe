const boardContainer = document.querySelector('.board');

const Gameboard = () => {
  const board = ['', '', '', '', '', '', '', '', ''];

  const update = () => {
    const cells = boardContainer.children;

    for (let i = 0; i < board.length; i += 1) {
      cells[i].innerText = `${board[i]}`;
    }
  };

  const create = () => {
    for (let i = 0; i < board.length; i += 1) {
      const boardCell = document.createElement('p');
      boardCell.className = 'board-cell';
      boardCell.dataset.index = i;
      boardContainer.appendChild(boardCell);
    }
    update();
  };

  const placeToken = (target, token) => {
    board[target] = token;
    update();
  };

  const checkWinner = () => {
    const isX = (symbol) => symbol === 'X';
    const isO = (symbol) => symbol === 'O';

    const horizontalSlots = [board.slice(0, 3), board.slice(3, 6), board.slice(6, 9)];
    const verticalSlots = [
      [board[0], board[3], board[6]],
      [board[1], board[4], board[7]],
      [board[2], board[5], board[8]],
    ];
    const diagonalSlots = [[board[0], board[4], board[8]], [board[2], board[4], board[6]]];

    const horizontal = () => {
      horizontalSlots.forEach((slice) => {
        if (slice.every(isX) || slice.every(isO)) {
          console.log(slice);
          // console.log(slice[0]);
          return slice;
        }
      });
    };

    const vertical = () => {
      verticalSlots.forEach((slice) => {
        if (slice.every(isX) || slice.every(isO)) {
          console.log(slice);
          // console.log(slice[0]);
          return slice;
        }
      });
    };

    const diagonal = () => {
      diagonalSlots.forEach((slice) => {
        if (slice.every(isX) || slice.every(isO)) {
          console.log(slice);
          // console.log(slice[0]);
          return slice;
        }
      });
    };

    horizontal();
    vertical();
    diagonal();

    return {
      horizontal, vertical, diagonal,
    };
  };

  return {
    board, boardContainer, placeToken, create, checkWinner, update,
  };
};

const player = (symbol) => {
  const playerSymbol = symbol;

  return {
    playerSymbol,
  };
};

const Game = (gameboard) => {
  let roundNumber = 0;
  const player1 = player('X');
  const player2 = player('O');
  const players = [player1, player2];

  const updateArea = document.querySelector('.update-area');
  updateArea.innerHTML = '';
  const update = document.createElement('p');
  update.innerText = `Player ${(roundNumber % 2) + 1}, make your selection.`;
  updateArea.appendChild(update);

  gameboard.create();

  gameboard.boardContainer.addEventListener('click', (event) => {
    const tokenToPlace = players[roundNumber % 2].playerSymbol;

    if (gameboard.board[event.target.dataset.index] === '') {
      roundNumber += 1;
      gameboard.placeToken(event.target.dataset.index, tokenToPlace);
      update.innerText = `Player ${(roundNumber % 2) + 1}, make your selection.`;
      updateArea.appendChild(update);
      gameboard.checkWinner();
    } else {
      update.innerText = `Whoops. Sorry Player ${(roundNumber % 2) + 1}. That slot is taken. Try again.`;
      updateArea.appendChild(update);
    }
    // console.log(`Round count is: ${roundNumber}`);
  });

  return { gameboard, player };
};

const newGame = Game(Gameboard(), player);

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
