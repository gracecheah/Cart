/* import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todos';
}
 */

/* 
export class AppComponent {
  noTaskCompleted = 0;
  // todoListTitle = "My To Do List";
  // todos = {
    "task 1": false,
    "task 2": true,
    "task 3": false
  };
  // todosTasks = Object.keys(this.todos);

  onClickTask(task) {
    this.todos[task] = !this.todos[task];
  }

  onClearList() {
    this.todos = {};
    this.todosTasks = [];
  }

  onAddTask() {
    const tasks = Object.keys(this.todos);
    this.todos[`task ${tasks.length + 1}`] = false;
    this.todosTasks = Object.keys(this.todos);
  }

  checkNumCompleted() {
    let i = 0;
    for (const task in this.todos) {
      if (this.todos[task] === true) {
        i += 1;
      }
    }
    return i;
  }
} */

import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  firstPlayer = "X";
  secondPlayer = "O";
  currentTurn = "X";
  boardSize = 9;
  blankSymbol = "_";
  moves = "_".repeat(9).split("");
  hoverIndex: number = null;
  gameOver = false;
  winner = null;

  checkCellColor(index: number): string {
    let cell = this.moves[index];

    if (cell !== this.blankSymbol && index === this.hoverIndex) {
      return "red";
    }
    if (cell === this.blankSymbol && index === this.hoverIndex) {
      return "green";
    }

    return "white";
  }

  playPiece(index: number) {
    console.log(index);
    this.moves[index] = this.currentTurn;
    if (this.currentTurn === this.firstPlayer) {
      this.currentTurn = this.secondPlayer;
    } else {
      this.currentTurn = this.firstPlayer;
    }
    this.checkWinner();
  }

  hoverOver(index: number) {
    this.hoverIndex = index;
  }

  checkWinner() {
    // check tic toe board
    this.gameOver = true;
    this.winner = this.firstPlayer;
  }
}
