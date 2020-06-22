const board = document.getElementById("board");

function setGridStyle(cols, rows) {
  board.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
}


const getCellsTemplate = (cellCount, colCount) => {
  var row = -1;
  return [...new Array(cellCount)].reduce((acc, v, i) => {
    if (i % colCount === 0) row++;
    return (
      acc +
      `<div class="cell" data-x="${
        i % colCount
      }" data-y="${row}">${i}</div>`
    );
  }, "");
};

export function configureBoard(level) {
  const cols = level.cols;
  const rows = level.rows;
  const cells = cols * rows;
  setGridStyle(cols, rows);
  board.innerHTML = getCellsTemplate(cells, cols);
  spawPlayer(level.startPos.x, level.startPos.y);
}

export function displayLives(target, lives, maxLives) {
  var count = 0;
  while (count < maxLives) {
    target.innerHTML += `<i class="icon fa ${
      lives > count ? "fa-heart" : "fa-heart-broken"
    }"></i>`;
    count++;
  }
}

export function spawPlayer(x, y) {
  console.log(x, y)
  const prevTarget = document.querySelector(".cell.is-active");
  if (prevTarget) prevTarget.classList.remove("is-active")
  const target = document.querySelector(`[data-x='${x}'][data-y='${y}']`);
  target.classList.add("is-active");
  const playerElement = document.createElement("div");
  playerElement.id = "player";
  playerElement.className = "player";
  target.appendChild(playerElement)
  console.log(target);
  
}

export function spawnRocks(count = 10) {}
