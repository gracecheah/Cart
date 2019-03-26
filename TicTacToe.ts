import { question } from "readline-sync";

let playerX = "X";
let playerY = "Y";
let isWont = false;
let isEven = true;
let count = 0;
let tictactoe1 = ["0", "0", "0"];
let tictactoe2 = ["0", "0", "0"];
let tictactoe3 = ["0", "0", "0"];

//show the tictactoe UI
console.log("Match Now");
console.log(tictactoe1);
console.log(tictactoe2);
console.log(tictactoe3);

gameStart();

function gameStart() {
  for (let i = 0; i < 5; i++) {
    if (!isWont) {
      playerStart("X");
    }
    if (!isWont && i < 4) {
      playerStart("Y");
    }
    //all filled and no winner
    if (i == 4 && isWont == false) {
      console.log("NO WINNER! Please play again");
    }
  }
}

//player X or Y function
function playerStart(n) {
  let ansPlayerRow = 0;
  let ansPlayerCol = 0;
  ansPlayerRow = parseInt(question("Player " + n + " - Choose Row Number\n"));
  ansPlayerCol = parseInt(
    question("Player " + n + " - Choose Column Number\n")
  );
  if (ansPlayerRow <= 3 && ansPlayerCol <= 3) {
    console.log(
      "Player " +
        n +
        " choose Row " +
        ansPlayerRow +
        " and Column " +
        ansPlayerCol
    );
    displayUI(n, ansPlayerRow, ansPlayerCol);
  } else {
    console.log("please choose the right row or column");
    playerStart(n);
  }
}

// show the current match
function displayUI(paramPlayer, paramRow, paramColumn) {
  let player = paramPlayer;
  let row = paramRow;
  let column = paramColumn - 1;

  //fill the tictactoe and occupied checked
  if (row == 1) {
    if (tictactoe1[column] == "0") {
      tictactoe1[column] = player;
      checkResult(player);
    } else {
      console.log(
        "Row " +
          row +
          " Column " +
          paramColumn +
          " occupied. Please choose empty row and column"
      );
      if (player == "X") {
        playerStart("X");
      } else {
        playerStart("Y");
      }
    }
  } else if (row == 2) {
    if (tictactoe2[column] == "0") {
      tictactoe2[column] = player;
      checkResult(player);
    } else {
      console.log(
        "Row " +
          row +
          " Column " +
          paramColumn +
          " occupied. Please choose empty row and column"
      );
      if (player == "X") {
        playerStart("X");
      } else {
        playerStart("Y");
      }
    }
  } else if (row == 3) {
    if (tictactoe3[column] == "0") {
      tictactoe3[column] = player;
      checkResult(player);
    } else {
      console.log(
        "Row " +
          row +
          " Column " +
          paramColumn +
          " occupied. Please choose empty row and column"
      );
      if (player == "X") {
        playerStart("X");
      } else {
        playerStart("Y");
      }
    }
  }
}

//result Checking any winner
function checkResult(paramPlayer) {
  console.log("Match Now");
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
    printCongrat(paramPlayer);
  } else if (
    tictactoe2[0] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe2[2] &&
    tictactoe2[0] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe2[2] != "0"
  ) {
    printCongrat(paramPlayer);
  } else if (
    tictactoe3[0] == tictactoe3[1] &&
    tictactoe3[1] == tictactoe3[2] &&
    tictactoe3[0] != "0" &&
    tictactoe3[1] != "0" &&
    tictactoe3[2] != "0"
  ) {
    printCongrat(paramPlayer);
  } else if (
    tictactoe1[0] == tictactoe2[0] &&
    tictactoe2[0] == tictactoe3[0] &&
    tictactoe1[0] != "0" &&
    tictactoe2[0] != "0" &&
    tictactoe3[0] != "0"
  ) {
    printCongrat(paramPlayer);
  } else if (
    tictactoe1[1] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe3[1] &&
    tictactoe1[1] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe3[1] != "0"
  ) {
    printCongrat(paramPlayer);
  } else if (
    tictactoe1[2] == tictactoe2[2] &&
    tictactoe2[2] == tictactoe3[2] &&
    tictactoe1[2] != "0" &&
    tictactoe2[2] != "0" &&
    tictactoe3[2] != "0"
  ) {
    printCongrat(paramPlayer);
  } else if (
    tictactoe1[0] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe3[2] &&
    tictactoe1[0] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe3[2] != "0"
  ) {
    printCongrat(paramPlayer);
  } else if (
    tictactoe1[2] == tictactoe2[1] &&
    tictactoe2[1] == tictactoe3[0] &&
    tictactoe1[2] != "0" &&
    tictactoe2[1] != "0" &&
    tictactoe3[0] != "0"
  ) {
    printCongrat(paramPlayer);
  }
}

//print congratulation
function printCongrat(player) {
  console.log("Congratulation!! Player " + player + " WON!!");
  isWont = true;
}
