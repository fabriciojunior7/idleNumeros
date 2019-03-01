function Entidade(x, y, largura, altura, cor){

    //Atributos
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;
    if(cor == undefined){this.cor = color(255);}
    else{this.cor = cor;}

    //Metodos
    this.desenhar = function(){
        noStroke();
        fill(this.cor);
        rect(this.x, this.y, this.largura, this.altura);
    }

    this.vibrar = function(){
        this.x += random(-1, 1);
        yBase = windowHeight-((this.nivel-menorNivelAtual+1)*windowHeight/(maiorNivelAtual-menorNivelAtual+2));
        if(this.y <= yBase){this.y += random(2);}
        else{this.y -= random(2);}
        this.checarPosicao();
    }

    this.checarPosicao = function(){
        //Eixo X
        if(this.x < this.largura/2){this.x = this.largura/2}
        else if(this.x > windowWidth-this.largura/2){this.x = windowWidth-this.largura/2;}
        //Eixo Y
        if(this.y < this.altura/2){this.y = this.altura/2;}
        else if(this.y > windowHeight-this.altura/2){this.y = windowHeight-this.altura/2;}
    }

    this.checarColisao = function(outro){
        if(this == outro){return false;}
        else{
            //hit = collideRectRect(this.x, this.y, this.largura, this.altura, outro.x, outro.y, outro.largura, outro.altura);
            hit = collideCircleCircle(this.x, this.y, this.largura, outro.x, outro.y, outro.largura);
            return hit;
        }
    }

}