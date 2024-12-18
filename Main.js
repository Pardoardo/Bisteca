const canvas = document.querySelector("canvas");

import { VECTOR2_SERVICE } from "./Vector2Service.js";

const Vector2 = new VECTOR2_SERVICE();

import { FPS_COUNTER } from "./FpsCounter.js";

let FpsCounter = new FPS_COUNTER(Vector2.new(canvas.width / 2, canvas.height / 2));

if (canvas) {
    const ctx = canvas.getContext("2d");

    let state = "helloWorld";

    function update() {
        switch (state) {
            case "helloWorld":
                FpsCounter.update();
            break;
        };

    };

    function render() {
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        switch (state) {
            case "helloWorld":
                FpsCounter.render(ctx);
            break;
        };
    };

    function mainLoop() {
        render();
        update();

        window.requestAnimationFrame(mainLoop);
    };

    function start() {
        mainLoop();
    };

    start();
} else {
    console.error("Não foi possível localizar uma canvas neste documento. \n Tem certeza que você adicionou uma para começo de conversa?");
};