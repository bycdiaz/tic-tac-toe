const Gameboard = () => {
  const board = ["","","","","","","","",""];

  return { board }
};

const player = (name) => {
  return {name}
}

const Game = (Gameboard,player) => {
  
  Gameboard

  player

  return { Gameboard, player }
};

const newGame = Game(Gameboard(),"Carlos");

console.log(newGame.player);
console.log(newGame.Gameboard.board);