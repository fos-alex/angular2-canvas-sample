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
        <span><strong>Shapes per minute:</strong> {{canvas.shapes}}</span>
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

  constructor(canvas: CanvasService) {
    this.canvas = canvas.getCanvas();
  }

  addBall() {
    this.canvas.addBall(
        Math.floor(Math.random() * 800),
        Math.floor(Math.random() * 400),
        this.ballRadius
    );
  }

  addSquare() {
    this.canvas.addSquare(
        Math.floor(Math.random() * 800),
        Math.floor(Math.random() * 400),
        this.squareSize,
        this.squareSize
    );
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