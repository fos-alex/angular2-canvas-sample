var Canvas = (function () {
    function Canvas() {
        this.shapes = 0;
    }
    Canvas.prototype.init = function (canvasEl) {
        this.element = canvasEl;
        this.context = this.element.getContext("2d");
    };
    Canvas.prototype.getContext = function () {
        return this.context;
    };
    Canvas.prototype.addBall = function (x, y, r) {
        if (x === void 0) { x = 95; }
        if (y === void 0) { y = 50; }
        if (r === void 0) { r = 10; }
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
    };
    Canvas.prototype.addSquare = function (x, y, width, height) {
        if (x === void 0) { x = 95; }
        if (y === void 0) { y = 50; }
        if (width === void 0) { width = 10; }
        if (height === void 0) { height = 10; }
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
    };
    return Canvas;
})();
exports.Canvas = Canvas;
//# sourceMappingURL=Canvas.js.map