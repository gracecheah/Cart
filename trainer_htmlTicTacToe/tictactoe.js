const game = {
  firstPlayer: "X",
  secondPlayer: "O",
  currentTurn: "X",
  boardSize: 9,
  blankSymbol: "_",
  moves: "_".repeat(9).split(""),
  cellIndexBeingHoveredOver: null,

  generateCell: function(index) {
    let bgColor = "white";
    const piece = this.moves[index];

    // currently behing hovered over, and there is already a piece in the cell
    if (this.cellIndexBeingHoveredOver === index && piece != this.blankSymbol) {
      bgColor = "red";
    }
    // currently behing hovered over, and there is no piece in the cell
    if (
      this.cellIndexBeingHoveredOver === index &&
      piece === this.blankSymbol
    ) {
      bgColor = "green";
    }

    return `
        <div class='cell' style='background-color: ${bgColor};'>
          <p>${piece === this.blankSymbol ? "" : piece}</p>
        </div>
      `;
  },

  playPiece: function(index) {
    this.moves[index] = this.currentTurn;
    if (this.currentTurn === this.firstPlayer) {
      this.currentTurn = this.secondPlayer;
    } else {
      this.currentTurn = this.firstPlayer;
    }
  },

  render: function() {
    const boardDiv = document.querySelector("#board");

    let boardHtml = "";
    const cellsNum = 9;

    for (let i = 0; i < cellsNum; i++) {
      boardHtml += this.generateCell(i);
    }

    boardDiv.innerHTML = boardHtml;

    const cells = boardDiv.children;
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i];

      cell.addEventListener("click", e => {
        this.playPiece(i);
        this.render();
      });
      cell.addEventListener("mouseover", e => {
        if (this.cellIndexBeingHoveredOver !== i) {
          this.cellIndexBeingHoveredOver = i;

          this.render();
        }
      });
    }
  }
};

game.render();
