//5) check result
//6) result algorithm
//7) repeat 2-5 or show UI
import { question } from "readline-sync";

let playerX = "X";
let playerY = "Y";
let isWont = false;
let count = 0;
let tictactoe1 = ["0", "0", "0"];
let tictactoe2 = ["0", "0", "0"];
let tictactoe3 = ["0", "0", "0"];

//1) show the tictactoe UI
console.log("TicTacToe " + tictactoe1);
console.log("TicTacToe " + tictactoe2);
console.log("TicTacToe " + tictactoe3);

startPlay();
//need to check if got user won
function startPlay() {
  while (count <= 9 && isWont == false) {
    count = count + 1;
    console.log("count now " + count);
    if (!isWont) {
      playerXStart();
    }
    if (!isWont) {
      playerYStart();
    }
  }
}

//2) PlayerX choose
function playerXStart() {
  let ansPlayerXRow = 0;
  let ansPlayerXCol = 0;
  ansPlayerXRow = parseInt(question("PlayerX - Choose Row Number\n"));
  ansPlayerXCol = parseInt(question("PlayerX - Choose Column Number\n"));
  if (ansPlayerXRow <= 3 && ansPlayerXCol <= 3) {
    console.log(
      "Player X choose Row " + ansPlayerXRow + " and Column " + ansPlayerXCol
    );
    displayUI("X", ansPlayerXRow, ansPlayerXCol);
  } else {
    console.log("please choose the right row or column");
    playerXStart();
  }
}

//4) PlayerY choose
function playerYStart() {
  let ansPlayerYRow = 0;
  let ansPlayerYCol = 0;
  ansPlayerYRow = parseInt(question("PlayerY - Choose Row Number\n"));
  ansPlayerYCol = parseInt(question("PlayerY - Choose Column Number\n"));
  if (ansPlayerYRow <= 3 && ansPlayerYCol <= 3) {
    console.log(
      "Player Y choose Row " + ansPlayerYRow + " and Column " + ansPlayerYCol
    );
    displayUI("Y", ansPlayerYRow, ansPlayerYCol);
  } else {
    console.log("please choose the right row or column");
    playerXStart();
  }
}

// 3) show the current match
function displayUI(paramPlayer, paramRow, paramColumn) {
  let player = paramPlayer;
  let row = paramRow;
  let column = paramColumn - 1;

  //fill the tictactoe and occupied checked
  if (row == 1) {
    if (tictactoe1[column] == "0") {
      tictactoe1[column] = player;
    } else {
      console.log(
        "Row " +
          row +
          " Column " +
          paramColumn +
          " occupied. Please choose empty row and column"
      );
      if (player == "X") {
        playerXStart();
      } else {
        playerYStart();
      }
    }
  }
  if (row == 2) {
    if (tictactoe2[column] == "0") {
      tictactoe2[column] = player;
    } else {
      console.log(
        "Row " +
          row +
          " Column " +
          paramColumn +
          " occupied. Please choose empty row and column"
      );
      if (player == "X") {
        playerXStart();
      } else {
        playerYStart();
      }
    }
  }
  if (row == 3) {
    if (tictactoe3[column] == "0") {
      tictactoe3[column] = player;
    } else {
      console.log(
        "Row " +
          row +
          " Column " +
          paramColumn +
          " occupied. Please choose empty row and column"
      );
      if (player == "X") {
        playerXStart();
      } else {
        playerYStart();
      }
    }
  }

  checkResult(player);
}

function checkResult(paramPlayer) {
  console.log("match now");
  console.log(tictactoe1);
  console.log(tictactoe2);
  console.log(tictactoe3);
  if (
    tictactoe1[0] == tictactoe1[1] &&
    tictactoe1[1] == tictactoe1[2] &&
    tictactoe1[0] != "0" &&
    tictactoe1[1] != "0" &&
    tictactoe1[2] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  } else if (
    tictactoe2[0] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe2[2] &&
    tictactoe2[0] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe2[2] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  } else if (
    tictactoe3[0] == tictactoe3[1] &&
    tictactoe3[1] == tictactoe3[2] &&
    tictactoe3[0] != "0" &&
    tictactoe3[1] != "0" &&
    tictactoe3[2] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  } else if (
    tictactoe1[0] == tictactoe2[0] &&
    tictactoe2[0] == tictactoe3[0] &&
    tictactoe1[0] != "0" &&
    tictactoe2[0] != "0" &&
    tictactoe3[0] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  } else if (
    tictactoe1[1] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe3[1] &&
    tictactoe1[1] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe3[1] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  } else if (
    tictactoe1[2] == tictactoe2[2] &&
    tictactoe2[2] == tictactoe3[2] &&
    tictactoe1[2] != "0" &&
    tictactoe2[2] != "0" &&
    tictactoe3[2] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  } else if (
    tictactoe1[0] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe3[2] &&
    tictactoe1[0] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe3[2] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  } else if (
    tictactoe1[2] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe3[0] &&
    tictactoe1[2] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe3[0] != "0"
  ) {
    console.log("player " + paramPlayer + " WON!!");
    isWont = true;
  }
}
