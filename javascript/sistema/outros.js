function textos(){
    noStroke();
    textSize(24);
    textAlign(LEFT);
    fill(255);
    text(numeros.length, 5, 25);
    textSize(12);
    text("Fabricio Junior", 5, windowHeight-10);
    
    fill(150);
    textSize(18);
    text(maiorNivelAtual, 7, 50);

    fill(255, 255, 0);
    textAlign(RIGHT);
    textSize(18);
    text(total, windowWidth-10, 25);
}

function novoNumero(nivel){
    if(nivel == undefined){
        if(maiorNivelAtual > 5){
            r = round(random(1, 5));
            if(r == 1 || r == 2){
                nivelBase = round(random((menorNivelAtual+1), (maiorNivelAtual-3)));
            }
            else{nivelBase = (menorNivelAtual);}
        }
        else{nivelBase = (menorNivelAtual);}
        numeros.push(new Numero(random(0, windowWidth), random(0, windowHeight), nivelBase, false));
    }
    else{
        numeros.push(new Numero(random(0, windowWidth), random(0, windowHeight), nivel, false));
    }
    total++;
}

function mudarMaiorNivel(nivel){
    maiorNivelAtual = nivel;
    menorNivelAtual = maiorNivelAtual-5;
    if(menorNivelAtual < 1){menorNivelAtual = 1;}

    abaixo = 0;
    menor = maiorNivelAtual;
    for(var i=numeros.length-1; i>=0; i--){
        //if(numeros[i].nivel < menorNivelAtual){numeros[i].alterarNivel(menorNivelAtual);}
        if(numeros[i].nivel < menorNivelAtual){abaixo++;}
        if(numeros[i].nivel < menor){menor = numeros[i].nivel;}
        if(numeros[i].nivel <= menorNivelAtual-2){numeros.splice(i, 1); menor = menorNivelAtual-1; abaixo -= 1;}
    }
    print(abaixo+" - "+menor);
    if(abaixo % 2 != 0){novoNumero(menor);}
    //novoLimite = nivel+2;
    //limite = novoLimite+10;
    //if(limite > 32){limite = 32;}
}