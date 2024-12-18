//Pegando a canvas do documento HTML
const canvas = document.querySelector("canvas");

//Importando serviços locais
import { VECTOR2_SERVICE } from "./Vector2Service.js";

//Carregando serviços locais
const Vector2 = new VECTOR2_SERVICE();

//Importando objetos
import { FPS_COUNTER } from "./FpsCounter.js";

//Carregando objetos
let FpsCounter = new FPS_COUNTER(Vector2.new(canvas.width / 2, canvas.height / 2));

//Verificando se existe uma canvas no documento HTML
if (canvas) {
    //Usando o contexo 2D
    const ctx = canvas.getContext("2d");

    //Guardando onde estamos no programa
    let state = "helloWorld";

    //Atualização de valores
    function update() {
        switch (state) {
            case "helloWorld":
                FpsCounter.update();
            break;
        };

    };

    //Renderização de elementos na canvas
    function render() {
        //Limpando a canvas para desenhar o próximo quadro
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        switch (state) {
            case "helloWorld":
                FpsCounter.render(ctx);
            break;
        };
    };

    //Loop principal do programa
    function mainLoop() {
        render();
        update();

        //Chamando "mainLoop" a cada frame (60 vezes por segundo)
        window.requestAnimationFrame(mainLoop);
    };

    //Inicia o programa
    function start() {
        mainLoop();
    };

    start();
} else {
    //Caso não exista uma canvas no documento HTML
    console.error("Não foi possível localizar uma canvas neste documento. \n Tem certeza que você adicionou uma para começo de conversa?");
};