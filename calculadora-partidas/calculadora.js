//Chamando a função 
finalRank (-20, 8)

// Criando a função
function finalRank(wins, loses){

    // Calculando o saldo de pontos de partida
    let totalPoints = wins - loses

    // Criando a variável para armazenar o nível do heroi;
    let level

    // Usando estrutura condicional (if e else) para avaliar em qual nível ele está.    
    if (totalPoints < 10){
        level = "Ferro"
    }
    else if (totalPoints < 20){
        level = "Bronze"
    }
    else if (totalPoints < 50){
        level = "Prata"
    }
    else if (totalPoints < 80){
        level = "Ouro"
    }
    else if (totalPoints < 90){
        level = "Diamante"
    }
    else if (totalPoints < 100){
        level = "Lendário"
    }
    else {
        level = "Imortal"
    }
    
    console.log ("O Herói tem " + totalPoints + " de saldo e está no nível " + level)
}
