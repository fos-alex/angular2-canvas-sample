import {bootstrap, Component, View, ElementRef} from 'angular2/angular2';
import {ControlPanelComponent} from "./ControlPanelComponent";
import {CanvasService} from "./CanvasService";
import {Canvas} from "./Canvas";

@Component({
  selector: 'my-canvas'
})

@View({
  template: `
  <div>
    <canvas id="my-canvas" height="400" width="800"></canvas>
    <control-panel></control-panel>
  </div>
  `,
  directives: [ControlPanelComponent]
})

export class CanvasComponent {
  public canvas;

  constructor(canvasService: CanvasService, element: ElementRef) {
    this.canvas = canvasService.getCanvas();
    this.initCanvas(element);
  }

  initCanvas(element: ElementRef) {
    this.canvas.init(element.nativeElement.getElementsByTagName('canvas')[0]);
  }

}