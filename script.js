"use strict";

const moves = new Array(9);

const gameCells = document.querySelectorAll("button.game__cell");

const gameForm = document.querySelector("form.game");

const getNextMoveIndex = () => moves.findIndex((el) => el === undefined);
const isCellAlreadyTaken = (cellIndex) => moves.some((el) => el === cellIndex);

function handleMove(cellIndex, moveEvent) {
  const moveIndex = getNextMoveIndex();
  const isCellTaken = isCellAlreadyTaken(cellIndex);

  console.log(moveIndex);

  if (isCellTaken) {
    moveEvent.preventDefault();
    return;
  }

  moves[moveIndex] = cellIndex;
  console.log(moves);

  // if player % 2=== 0 then player is circle
  const currentPlayer = moveIndex % 2;
}

gameCells.forEach((cell, cellIndex) => {
  cell.addEventListener("click", (event) => {
    console.log("click");
    handleMove(cellIndex, event);
  });
});
