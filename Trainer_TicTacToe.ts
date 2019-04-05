import { question } from "readline-sync";

const mySymbol = "X";
const oppSymbol = "O";
const blankSymbol = "_";
const rowLength = 3;

// object type definition so vscode will inform about type errors
interface Game {
  isOngoing: boolean;
  isDraw: boolean;
  winner: string;
  board: string[];
  currentPlayer: string;
  rowLength: number;
  firstPlayer: string;
  secondPlayer: string;
}

function displayBoard(game: Game): void {
  console.clear();
  const board = game.board;
  let row = [];
  for (let index = 0; index < board.length; index++) {
    let cell: string;
    // replace blank cells with index number, but keep them as "_" internally
    cell = board[index] === "_" ? index.toString() : board[index];
    row.push(cell);

    if (row.length >= game.rowLength) {
      console.log(row.join(" "));
      row = [];
    }
  }
}

function switchPlayer(game: Game): void {
  if (game.currentPlayer === game.firstPlayer) {
    game.currentPlayer = game.secondPlayer;
  } else {
    game.currentPlayer = game.firstPlayer;
  }
}

function checkWinner(game: Game): void {
  const board = game.board;
  const rows = [];
  const cols = [];
  const diagonals = { left: [], right: [] };

  for (let index = 0; index < game.rowLength; index++) {
    rows.push([]);
    cols.push([]);
  }

  for (let index = 0; index < board.length; index++) {
    const rowIndex = Math.floor(index / game.rowLength);
    const colIndex = Math.floor(index % game.rowLength);

    rows[rowIndex].push(board[index]);
    cols[colIndex].push(board[index]);

    if (rowIndex === colIndex) {
      diagonals.left.push(board[index]);
    }
  }

  for (let index = 0; index < rows.length; index++) {
    // could use below to set left diagonal as well
    // diagonals.left.push(rows[index][index])
    diagonals.right.push(rows[index][game.rowLength - 1 - index]);
  }

  // aggregrate all arrays from rows, cols, and diagonals for easy checking
  const allArrays = [];
  for (const row of rows) {
    allArrays.push(row);
  }

  for (const col of cols) {
    allArrays.push(col);
  }

  allArrays.push(diagonals.left);
  allArrays.push(diagonals.right);

  for (const array of allArrays) {
    const stringArray = array.join("");
    if (stringArray === "XXX") {
      game.winner = game.firstPlayer;
      game.isOngoing = false;
    } else if (stringArray === "OOO") {
      game.winner = game.secondPlayer;
      game.isOngoing = false;
    }
  }
}

function checkDraw(game: Game) {
  let moveCount = 0;
  for (const cell of game.board) {
    if (cell != blankSymbol) {
      moveCount += 1;
    }
  }

  if (moveCount === game.board.length) {
    game.isDraw = true;
    game.isOngoing = false;
  }
}

function endTurn(game: Game): void {
  checkWinner(game);
  checkDraw(game);

  if (game.winner === null && !game.isDraw) {
    switchPlayer(game);
  } else {
    game.isOngoing = false;
  }
}

const game: Game = {
  isOngoing: true,
  isDraw: false,
  winner: null,
  board: ["_", "_", "_", "_", "_", "_", "_", "_", "_"],
  currentPlayer: mySymbol,
  rowLength: rowLength,
  firstPlayer: mySymbol,
  secondPlayer: oppSymbol
};

while (game.isOngoing) {
  displayBoard(game);
  console.log("It is now " + game.currentPlayer + "'s turn.");
  const answer = question(
    "Please enter the index of the cell you want to place your piece.\n"
  );

  const pickedIndex = parseInt(answer);
  game.board[pickedIndex] = game.currentPlayer;
  displayBoard(game);
  endTurn(game);
}

if (game.isDraw) {
  console.log("Its a draw!");
} else {
  console.log(`The winner is ${game.winner}`);
}
