import Block from "./block.js";
import InputHandler from "./inputHandler.js";

const canvas = document.getElementById("game_area");
const ctx = canvas.getContext("2d");
//.getContext() gives us the internal rendering context so we can draw on our canvas

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

const block = new Block(GAME_WIDTH, GAME_HEIGHT);
const inputHandler = new InputHandler(block);

let lastTime = 0;
//each time requestAnimationFrame() is run the timestamp is passed back into gameLoop
function gameLoop(timestamp) {
  let deltaTime = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
  //clears the screen after each move
  block.update(deltaTime);
  block.draw(ctx);

  requestAnimationFrame(gameLoop);
  // The requestAnimationFrame() method tells the browser to run a callback function
  // right before the next repaint happens.so each refresh gameLoop is ran
}

gameLoop();
