const entrada = require("prompt-sync")({sigint: true});
let nivel = "";
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

const nomeHeroi = entrada("Digite o nome do seu Herói: ");
let xpHeroi = entrada("Digite o valor do XP de seu herói. O valor deve iniciar em 1000: ");

while(Number(xpHeroi) < 1000) {
    xpHeroi = entrada("O valor do XP deve iniciar em 1000. Digite o valor novamente: ");
}

switch(true) {
    case Number(xpHeroi) >= 10001:
        nivel = niveis[7];
        break;
    case Number(xpHeroi) >= 9001 && Number(xpHeroi) <= 10000:
        nivel = niveis[6];
        break;
    case Number(xpHeroi) >= 8001 && Number(xpHeroi) <= 9000:
        nivel = niveis[5];
        break;
    case Number(xpHeroi) >= 7001 && Number(xpHeroi) <= 8000:
        nivel = niveis[4];
        break;
    case Number(xpHeroi) >= 5001 && Number(xpHeroi) <= 7000:
        nivel = niveis[3];
        break;
    case Number(xpHeroi) >= 2001 && Number(xpHeroi) <= 5000:
        nivel = niveis[2];
        break;
    case Number(xpHeroi) >= 1001 && Number(xpHeroi) <= 2000:
        nivel = niveis[1];
        break;
    default:
        nivel = niveis[0];
}

console.log(`O herói de nome ${nomeHeroi} está no nível de ${nivel}.`);
