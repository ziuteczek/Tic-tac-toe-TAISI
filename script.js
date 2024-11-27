"use strict";

const moves = new Array(9);

const gameCells = document.querySelectorAll("button.game__cell");

const gameForm = document.querySelector("form.game");

const phpInput = document.querySelector("#send-php");

const getNextMoveIndex = () => moves.findIndex((el) => el === undefined);
const isCellAlreadyTaken = (cellIndex) => moves.some((el) => el === cellIndex);

function updateDisplay() {
  const nextMove = getNextMoveIndex();
  const cellsToUpdate = moves.slice(0, nextMove === -1 ? 9 : nextMove);

  cellsToUpdate.forEach((cell, i) => {
    const classToAdd = i % 2 ? "game__cell--picked-x" : "game__cell--picked-o";
    gameCells[cell].classList.add(classToAdd);
  });
}

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
  phpInput.value = moves.join(",");

  // if player % 2=== 0 then player is circle

  updateDisplay();
}

gameCells.forEach((cell, cellIndex) => {
  cell.addEventListener("click", (event) => {
    console.log("click");
    handleMove(cellIndex, event);
  });
});
