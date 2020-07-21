import Block from "./block.js";

const canvas = document.getElementById("game_area");
const ctx = canvas.getContext("2d");
//.getContext() gives us the internal rendering context so we can draw on our canvas

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;

ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
//clears the screen after each move

const block = new Block(GAME_HEIGHT);
block.draw(ctx);
