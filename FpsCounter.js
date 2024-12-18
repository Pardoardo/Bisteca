export class FPS_COUNTER {
    constructor({ x, y }) {
        this.x = x; 
        this.y = y;
        this.fps_cache = 0;
        this.fps = 0;

        this.update = this.update.bind(this);
        this.render = this.render.bind(this);
        this.calculateFps = this.calculateFps.bind(this);

        setInterval(this.calculateFps, 1000);
    }

    update() {
        this.fps_cache++;
    }

    calculateFps() {
        this.fps = this.fps_cache;
        this.fps_cache = 0;
    }

    render(ctx) {
        ctx.fillStyle = 'white';
        ctx.font = "30px Arial";
        ctx.textAlign = "center";
        ctx.fillText(`FPS: ${this.fps}`, this.x, this.y);
    }
}
