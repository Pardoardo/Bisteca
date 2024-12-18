//Pegando a canvas do documento HTML
const canvas = document.querySelector("canvas");

//Verificando se existe uma canvas no documento HTML
if (canvas){
    //Usando o contexo 2D
    const ctx = canvas.getContext("2d");

    //Guardando onde estamos no programa
    let state = "helloWorld"; 

    //Contra a piscagem do texto "Hello World" (Apenas um teste)
    var textClock = 0;

    //Atualização de valores
    function update(){
        if(textClock < 100){
            textClock++;
        } else {
            textClock = 0;
        };
    };

    //Renderização de elementos na canvas
    function render(){
        //Limpando a canvas para desenhar o próximo quadro
        ctx.clearRect(0, 0, canvas.width, canvas.height)

        switch (state) {
            case "helloWorld":

                if(textClock < 50){
                    ctx.fillStyle = 'white';
                    ctx.font = "30px Arial";
                    ctx.textAlign = "center";
                    ctx.fillText("Olá mundão bom! :]", canvas.width/2, canvas.height/2);  
                }
                  
            break
        };
    };

    //Loop principal do programa
    function mainLoop(){
        render();
        update();

        //Chamando "mainLoop" a cada frame (60 vezes por segundo)
        window.requestAnimationFrame(mainLoop);
    };

    //Inicia o programa
    function start(){
        mainLoop();
    }

    start();
} else {
    //Caso não exista uma canvas no documento HTML
    console.error("Não foi possível localizar uma canvas neste documento. \n Tem certeza que você adicionou uma para começo de conversa?");
};