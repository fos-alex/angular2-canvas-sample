var Canvas_1 = require("./Canvas");
var CanvasService = (function () {
    function CanvasService() {
        this.canvas = new Canvas_1.Canvas;
    }
    CanvasService.prototype.getCanvas = function () {
        return this.canvas;
    };
    return CanvasService;
})();
exports.CanvasService = CanvasService;
//# sourceMappingURL=CanvasService.js.map