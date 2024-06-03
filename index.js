const entrada = require("prompt-sync")({sigint: true});
let nivel = "";
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];

const nomeHeroi = entrada("Digite o nome do seu Herói: ");
let xpHeroi = +entrada("Digite o valor do XP de seu herói. O valor deve iniciar em 1000: ");

while(xpHeroi < 1000) {
    xpHeroi = +entrada("O valor do XP deve iniciar em 1000. Digite o valor novamente: ");
}

switch(true) {
    case xpHeroi >= 10001:
        nivel = niveis[7];
        break;
    case xpHeroi >= 9001 && xpHeroi <= 10000:
        nivel = niveis[6];
        break;
    case xpHeroi >= 8001 && xpHeroi <= 9000:
        nivel = niveis[5];
        break;
    case xpHeroi >= 7001 && xpHeroi <= 8000:
        nivel = niveis[4];
        break;
    case xpHeroi >= 5001 && xpHeroi <= 7000:
        nivel = niveis[3];
        break;
    case xpHeroi >= 2001 && xpHeroi <= 5000:
        nivel = niveis[2];
        break;
    case xpHeroi >= 1001 && xpHeroi <= 2000:
        nivel = niveis[1];
        break;
    default:
        nivel = niveis[0];
}

console.log(`O herói de nome ${nomeHeroi} está no nível ${nivel}.`);
