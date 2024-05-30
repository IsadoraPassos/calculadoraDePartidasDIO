let nivel = "";

function calcularSaldo(vitorias, derrotas){
    return vitorias - derrotas;
}

function classificaNivelDoJogador(saldo){
    if(saldo <= 10){
        nivel = "Ferro";
    } 
    else if(saldo > 10 && saldo <= 20){
        nivel = "Bronze";
    }
    else if(saldo > 20 && saldo <= 50){
        nivel = "Prata";
    }
    else if(saldo > 50 && saldo <= 80){
        nivel = "Ouro";
    }
    else if(saldo > 80 && saldo <= 90){
        nivel = "Diamante";
    }
    else if(saldo > 90 && saldo <= 100){
        nivel = "Lendário";
    }
    else if(saldo > 100){
        nivel = "Imortal";
    }

    return nivel;
}

function exibirMensagem(vitorias, derrotas){
    
    let saldoJogador =  calcularSaldo(vitorias, derrotas);
    let nivelJogador = classificaNivelDoJogador(saldoJogador);

    console.log("O Herói tem de saldo de " + saldoJogador + " está no nível de " + nivelJogador);
}

exibirMensagem(110, 40);