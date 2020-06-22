import { _GAME } from "./game-settings.js";
import { configureBoard, displayLives } from "./board.js";
import { listenKeyboard, listenNextLevel } from "./events.js";

(function run() {
  var currentGame = {
    score: 0,
    lives: 3,
    round: 0,
    levels: [
      { cols: 1, rows: 1, startPos: {x: 0, y: 0}},
      { cols: 8, rows: 8, startPos: {x: 1, y: 0}},
      { cols: 4, rows: 4, startPos: {x: 3, y: 3}},
      { cols: 2, rows: 10, startPos: {x: 3, y: 3}},
    ],
  };

  const getCurrentLevel = () => currentGame.levels[currentGame.round];

  const setNextLevel = () => {
    currentGame.round++;
    if (currentGame.round === currentGame.levels.length) {
      alert("game over");
      resetGame();
    } else configureBoard(getCurrentLevel());
  };

  const resetGame = () => {
    currentGame.round = 0;
    configureBoard(getCurrentLevel());
  };

  configureBoard(getCurrentLevel());

  displayLives(
    document.getElementById("lives"),
    currentGame.lives,
    _GAME.maxLives
  );

  listenNextLevel(setNextLevel);

  listenKeyboard();
})();
