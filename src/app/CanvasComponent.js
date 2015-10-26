var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var ControlPanelComponent_1 = require("./ControlPanelComponent");
var CanvasService_1 = require("./CanvasService");
var CanvasComponent = (function () {
    function CanvasComponent(canvasService, element) {
        this.canvas = canvasService.getCanvas();
        this.initCanvas(element);
    }
    CanvasComponent.prototype.initCanvas = function (element) {
        this.canvas.init(element.nativeElement.getElementsByTagName('canvas')[0]);
    };
    CanvasComponent = __decorate([
        angular2_1.Component({
            selector: 'my-canvas'
        }),
        angular2_1.View({
            template: "\n  <div>\n    <canvas id=\"my-canvas\" height=\"400\" width=\"800\"></canvas>\n    <control-panel></control-panel>\n  </div>\n  ",
            directives: [ControlPanelComponent_1.ControlPanelComponent]
        }), 
        __metadata('design:paramtypes', [CanvasService_1.CanvasService, angular2_1.ElementRef])
    ], CanvasComponent);
    return CanvasComponent;
})();
exports.CanvasComponent = CanvasComponent;
//# sourceMappingURL=CanvasComponent.js.map