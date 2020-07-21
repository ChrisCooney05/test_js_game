export default class block {
  constructor(gameHeight) {
    this.width = 100;
    this.heigh = 100;
    //sets the dims for the block

    this.position = {
      x: 0, // at the x position
      y: gameHeight - this.heigh, //base of square touching the base of the canvas
    };
  }

  draw(ctx) {
    ctx.fillStyle = "#00f";
    ctx.fillRect(this.position.x, this.position.y, this.width, this.heigh);
    //fillStyle gives the colour of the object and fillRect
    //makes a square at 20x 20y at the size of 100 x 100 px
  }
}
