export default class InputHandler {
  constructor(block) {
    document.addEventListener("keydown", (e) => {
      switch (e.keyCode) {
        case 37:
          block.moveLeft();
          break;
        case 39:
          block.moveRight();
          break;
        case 38:
          block.moveUp();
          break;
      }
    });

    document.addEventListener("keyup", (e) => {
      switch (e.keyCode) {
        case 37:
          if (block.speed < 0) block.stop();
          break;
        case 39:
          if (block.speed > 0) block.stop();
          break;
        case 38:
          if (block.speed > 0) block.stop();
          break;
      }
    });
  }
}
