import {bootstrap, Component, View, FORM_DIRECTIVES} from 'angular2/angular2';
import {CanvasService} from "./CanvasService";
import {Canvas} from "./Canvas";

@Component({
  selector: 'control-panel'
})

@View({
  template: `
    <div>
      <div>
        <span><strong>Shapes:</strong> {{canvas.shapes}}</span>
        <span> | </span>
        <span><strong>Shapes per minute:</strong> {{((60 * 1000) / funcCallAvgTime).toFixed()}}</span>
        <span> | </span>
        <span><strong>Average time per shape:</strong> {{drawingAvgTime}}</span>
        <span> | </span>
        <span><strong>Average time per call:</strong> {{funcCallAvgTime}}</span>
      </div>
      <div>
        <input type="range" [(ng-model)]="ballRadius" min="1" max="50" step="0.5">
        <button type="button" (click)="addBall()">Add Ball</button>
      </div>

      <div>
        <input type="range" [(ng-model)]="squareSize" min="1" max="50" step="0.5">
        <button type="button" (click)="addSquare()">Add Square</button>
      </div>


      <div style="padding: 10px;">
        <button type="button" (click)="slower()">Slower</button>
        <button type="button" (click)="recursiveRandomBalls()">Recursive Random Shapes</button>
        <button type="button" (click)="faster()">Faster</button>
        <span><strong>Speed: </strong> {{recursiveSpeed}}</span>
      </div>
    </div>
  `,
  directives: [FORM_DIRECTIVES]
})

export class ControlPanelComponent {

  canvas: Canvas;

  ballRadius: number;

  squareSize: number;

  recursiveAdd: boolean = false;
  recursiveSpeed: number = 500;

  private addStack: number[]= [];
  private maxAddStack: number = 100;
  private drawingSumTime: number = 0;
  private tmpFuncCallTimer: number = performance.now();
  private tmpTimer: number = performance.now();

  public  funcCallAvgTime: number = 0;
  public  drawingAvgTime: number  = 0;

  constructor(canvas: CanvasService) {
    this.canvas = canvas.getCanvas();
  }

  addBall() {
    this.startAddShape();
    this.canvas.addBall(
        Math.floor(Math.random() * 800),
        Math.floor(Math.random() * 400),
        this.ballRadius
    );
    this.endAddShape();
  }

  addSquare() {
    this.startAddShape();
    this.canvas.addSquare(
        Math.floor(Math.random() * 800),
        Math.floor(Math.random() * 400),
        this.squareSize,
        this.squareSize
    );
    this.endAddShape();
  }

  startAddShape() {
    this.tmpTimer = performance.now();
  }

  endAddShape() {
    var now = performance.now();
    var shapeAddTime = (now - this.tmpTimer);
    this.addStack.push(shapeAddTime);
    this.drawingSumTime += shapeAddTime;

    if (this.addStack.length >= this.maxAddStack) {
      this.drawingSumTime -= this.addStack.shift();
    }
    this.drawingAvgTime = parseFloat((this.drawingSumTime / this.maxAddStack).toFixed(4));

    this.funcCallAvgTime  = parseFloat((this.funcCallAvgTime * 0.9 + (now - this.tmpFuncCallTimer) * 0.1).toFixed(4));
    this.tmpFuncCallTimer = performance.now();
  }

  recursiveRandomBalls() {
    var that = this;
    this.recursiveAdd = !this.recursiveAdd;
    var shapeFuncs: (() => void)[] = [this.addBall, this.addSquare];
    var length = shapeFuncs.length;
    (function add() {
      if (!that.recursiveAdd) {
        return;
      }
      shapeFuncs[Math.floor(Math.random() * length)].apply(that);
      setTimeout(() => {
        add();
      }, that.recursiveSpeed)
    })();
  }

  faster () {
    this.recursiveSpeed -= 50;
  }

  slower () {
    this.recursiveSpeed += 50;
  }
}