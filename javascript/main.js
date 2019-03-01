var tela;
var fps = 30;

var numeros = [];
var iniciar = 1;
var limite = 16;
var maiorNivelAtual = 1;
var menorNivelAtual = 1;
var total = iniciar;
var tempoDeQueda = 2;

var foco = null;

var imagens = [];

function preload(){
    imagem1 = loadImage("imagens/1.png");
    imagem2 = loadImage("imagens/2.png");
    imagem3 = loadImage("imagens/3.png")
    imagens.push(imagem1);
    imagens.push(imagem2);
    imagens.push(imagem3);
}

function setup(){
    tela = createCanvas(windowWidth, windowHeight);
    frameRate(fps);
    textAlign(CENTER);
    textSize(24);

    for(var i=0; i<iniciar; i++){
        numeros.push(new Numero(random(0, windowWidth), random(0, windowHeight)));
        numeros[i].checarPosicao();
    }
}

function draw(){
    background(0);
    if(foco != null){foco.arrastar(mouseX, mouseY);}
    for(var i in numeros){numeros[i].desenhar();}
    if(frameCount % (fps*tempoDeQueda) == 0){ciclo();}
    textos();
}

// ======================================== P5 ========================================

function windowResized(){
    tela = createCanvas(windowWidth, windowHeight);
}

function keyPressed(){
    //print(keyCode);
    if(keyCode == 13){novoNumero();}
    else if(keyCode == 32){
        for(var i=numeros.length-1; i>=0; i--){
            hit = collidePointCircle(mouseX, mouseY, numeros[i].x, numeros[i].y, numeros[i].largura, numeros[i].altura);
            if(hit){foco = numeros[i]; break;}
        }
    }
}

function keyReleased(){
    if(foco != null){foco.checarJuncao();}
    foco = null;
}

function mousePressed(){
    if(foco != null){
        foco.checarJuncao();
    }
    else{
        for(var i=numeros.length-1; i>=0; i--){
            hit = collidePointCircle(mouseX, mouseY, numeros[i].x, numeros[i].y, numeros[i].largura, numeros[i].altura);
            if(hit){foco = numeros[i]; break;}
        }
    }
}

function mouseReleased(){
    /*if(foco != null){foco.checarJuncao();}
    foco = null;*/
}