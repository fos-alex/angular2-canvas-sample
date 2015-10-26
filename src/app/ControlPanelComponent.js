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
var CanvasService_1 = require("./CanvasService");
var ControlPanelComponent = (function () {
    function ControlPanelComponent(canvas) {
        this.recursiveAdd = false;
        this.recursiveSpeed = 500;
        this.canvas = canvas.getCanvas();
    }
    ControlPanelComponent.prototype.addBall = function () {
        this.canvas.addBall(Math.floor(Math.random() * 800), Math.floor(Math.random() * 400), this.ballRadius);
    };
    ControlPanelComponent.prototype.addSquare = function () {
        this.canvas.addSquare(Math.floor(Math.random() * 800), Math.floor(Math.random() * 400), this.squareSize, this.squareSize);
    };
    ControlPanelComponent.prototype.recursiveRandomBalls = function () {
        var that = this;
        this.recursiveAdd = !this.recursiveAdd;
        var shapeFuncs = [this.addBall, this.addSquare];
        var length = shapeFuncs.length;
        (function add() {
            if (!that.recursiveAdd) {
                return;
            }
            shapeFuncs[Math.floor(Math.random() * length)].apply(that);
            setTimeout(function () {
                add();
            }, that.recursiveSpeed);
        })();
    };
    ControlPanelComponent.prototype.faster = function () {
        this.recursiveSpeed -= 50;
    };
    ControlPanelComponent.prototype.slower = function () {
        this.recursiveSpeed += 50;
    };
    ControlPanelComponent = __decorate([
        angular2_1.Component({
            selector: 'control-panel'
        }),
        angular2_1.View({
            template: "\n    <div>\n      <div>\n        <span><strong>Shapes:</strong> {{canvas.shapes}}</span>\n        <span> | </span>\n        <span><strong>Shapes per minute:</strong> {{canvas.shapes}}</span>\n      </div>\n      <div>\n        <input type=\"range\" [(ng-model)]=\"ballRadius\" min=\"1\" max=\"50\" step=\"0.5\">\n        <button type=\"button\" (click)=\"addBall()\">Add Ball</button>\n      </div>\n\n      <div>\n        <input type=\"range\" [(ng-model)]=\"squareSize\" min=\"1\" max=\"50\" step=\"0.5\">\n        <button type=\"button\" (click)=\"addSquare()\">Add Square</button>\n      </div>\n\n\n      <div style=\"padding: 10px;\">\n        <button type=\"button\" (click)=\"slower()\">Slower</button>\n        <button type=\"button\" (click)=\"recursiveRandomBalls()\">Recursive Random Shapes</button>\n        <button type=\"button\" (click)=\"faster()\">Faster</button>\n      </div>\n    </div>\n  ",
            directives: [angular2_1.FORM_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [CanvasService_1.CanvasService])
    ], ControlPanelComponent);
    return ControlPanelComponent;
})();
exports.ControlPanelComponent = ControlPanelComponent;
//# sourceMappingURL=ControlPanelComponent.js.map