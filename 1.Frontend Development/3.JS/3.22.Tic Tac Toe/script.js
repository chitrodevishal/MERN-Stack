let turn = "O";
let draw = 0;
let winning = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

// Here we create a new array
const game = new Array(9).fill("E");
//  0   1   2   3   4   5   6   7   8
// game = ["E","E","E","E","E","E","E","E","E"]
// game = ["O","E","E","E","E","E","E","E","E"] // if "O" turn

function winner() {
  for (let [index0, index1, index2] of winning) {
    // console.log(index0, index1, index2);
    if (
      game[index0] !== "E" &&
      game[index0] === game[index1] &&
      game[index1] === game[index2]
    ) {
      return 1;
    }
  }
  return 0;
}

const print = (event) => {
  //   console.log(event.target.id);
  const cell = event.target;
  // it prevent override
  if (game[cell.id] === "E") {
    draw++;
    if (turn === "O") {
      cell.innerHTML = "O";
      game[cell.id] = "O";
      if (winner()) {
        document.querySelector(".result").innerHTML = `Winner is "O"`;
        board.removeEventListener("click", print);
        return;
      }
      turn = "X";
    } else {
      cell.innerHTML = "X";
      game[cell.id] = "X";
      if (winner()) {
        document.querySelector(".result").innerHTML = `Winner is "X"`;
        board.removeEventListener("click", print);
        return;
      }
      turn = "O";
    }
  }
  if (draw === 9) {
    document.querySelector(".result").innerHTML = `Match Draw"`;
    return
  }
};

const board = document.querySelector(".board");
board.addEventListener("click", print);

const btn = document.querySelector(".restart");
btn.addEventListener("click", () => {
    const cells = document.getElementsByClassName("cell");

    Array.from(cells).forEach(cell => {
        cell.innerHTML = "";
    });

    game.fill("E");
    turn = "O";
    document.querySelector(".result").innerHTML = "Tic Tac Toe";

      // Re-enable the board
    board.addEventListener("click", print);
});
