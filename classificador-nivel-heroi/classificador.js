// Primeira etapa: Definição das variáveis necessárias (nome, qnt de experiência e nível do herói)

let heroName = "Mestre dos codigos";
let totalXP = 10000;
let level;

// Usando estrutura condicional (if e else) para avaliar em qual categoria a quantidade de XP se escaixaria.

if (totalXP <= 1000) {
    level = "Ferro";

} else if (totalXP <= 2000){
    level = "Bronze";

} else if (totalXP <= 5000){
    level = "Prata";

} else if (totalXP <= 7000){
    level = "Ouro";
    
} else if (totalXP <= 8000){
    level = "Platina";
    
} else if (totalXP <= 9000){
    level = "Ascendente";
    
} else if (totalXP <= 10000){
    level = "Imortal";

} else if (totalXP > 10000){
    level = "Radiante";

} else {
    level = "'Indefinido'. Você precisa adicionar um nivel válido ao Herói";
}

// Resultado final: exibindo mensagem com nome do herói e seu nível
console.log("O Herói " + heroName + " está no nível " + level)