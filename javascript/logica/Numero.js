function Numero(x, y, nivel, juncao){

    //Atributos
    if(nivel == undefined || nivel < 1){tamanho = 50; cor = color(0, 0, 0, 200);}
    else{tamanho = 50+nivel*2; cor = color(nivel*7, nivel*12, nivel*3, 200);}
    Entidade.call(this, x, y, tamanho, tamanho, cor);
    if(nivel == undefined || nivel < 1){this.nivel = 1;}
    else{this.nivel = nivel;}
    if(!juncao){this.y = windowHeight-((this.nivel-menorNivelAtual+1)*windowHeight/(maiorNivelAtual-menorNivelAtual+2));}

    //Metodos
    this.desenhar = function(){
        if(this != foco){this.vibrar();}
        strokeWeight(2);
        if(this == foco){stroke(255);}
        else{stroke(255, 0, 0);}
        fill(this.cor);
        ellipse(this.x, this.y, this.largura, this.altura);
        if(this == foco){fill(255);}
        else{fill(255, 0, 0);}
        noStroke();
        textAlign(CENTER);
        textSize(15+this.nivel);
        text(this.nivel, this.x, this.y+7);
    }

    /*this.desenhar = function(){
        noStroke();
        //fill(255);
        //ellipse(this.x, this.y, this.largura, this.altura);
        image(imagens[this.nivel-1], this.x-imagens[this.nivel-1].width/2, this.y-imagens[this.nivel-1].height/2);
    }*/

    this.juntar = function(outro){
        if(this.nivel == outro.nivel){
            if(this.nivel+1 > maiorNivelAtual){mudarMaiorNivel(this.nivel+1);}
            numeros.push(new Numero(this.x, this.y, this.nivel+1, true));
            numeros.splice(numeros.indexOf(this), 1);
            numeros.splice(numeros.indexOf(outro), 1);
            return true;
        }
        else{return false;}
    }

    this.arrastar = function(x, y){
        this.x = x;
        this.y = y;
    }

    this.checarJuncao = function(){
        foco.arrastar(mouseX, mouseY);
        for(var i=0; i<numeros.length; i++){
            hit = this.checarColisao(numeros[i]);
            if(hit){
                if(this.juntar(numeros[i])){break;}
            }
        }
        foco = null;
    }

    this.alterarNivel = function(nivel){
        this.nivel = nivel;
        this.largura = 50+nivel*2;
        this.altura = 50+nivel*2;
        this.cor = color(nivel*7, nivel*12, nivel*3, 200);
    }

}