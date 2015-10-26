import {Canvas} from "./Canvas";

export class CanvasService {
  canvas: Canvas;

  constructor() {
    this.canvas = new Canvas;
  }

  getCanvas() {
    return this.canvas;
  }
}