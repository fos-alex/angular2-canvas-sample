import {ElementRef} from 'angular2/angular2';

export class Canvas {

  public shapes: number = 0;
  public element;
  public context;

  constructor() {

  }

  init(canvasEl) {
    this.element = canvasEl;
    this.context = this.element.getContext("2d");
  }

  getContext() {
    return this.context;
  }

  addBall(x: number = 95, y: number = 50, r: number = 10) {
    var ctx = this.getContext();
    var ball = {
      x: x,
      y: y,
      r: r,
      sAngle: 0,
      eAngle: 2 * Math.PI
    };
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.r, ball.sAngle, ball.eAngle);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.lineWidth = 2;
    ctx.stroke();
    this.shapes++;
  }

  addSquare(x: number = 95, y: number = 50, width: number = 10, height: number = 10) {
    var ctx = this.getContext();
    var square = {
      x: x,
      y: y,
      w: width,
      h: height
    };

    ctx.fillStyle = "blue";
    ctx.lineWidth = 2;
    ctx.fillRect(square.x, square.y, square.w, square.h);
    this.shapes++;
  }

}
