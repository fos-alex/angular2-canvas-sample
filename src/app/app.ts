import {bootstrap, Component} from 'angular2/angular2';
import {CanvasComponent} from "./CanvasComponent";
import {CanvasService} from "./CanvasService";

@Component({
  selector: 'my-app',
  template: `
      <h1>{{title}}</h1>
      <h2>My Games</h2>
      <div>
        <my-canvas></my-canvas>
      </div>
  `,
  directives: [CanvasComponent]
})

class AppComponent {
}

bootstrap(AppComponent, [CanvasService]);



