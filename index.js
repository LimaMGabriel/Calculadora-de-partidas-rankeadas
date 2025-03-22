function calculadoraRankeada (vitorias, derrotas) {
    const resultado = vitorias - derrotas;
        if (resultado <= 10) {
            return "Ferro"            
        } else if (resultado <= 20) {
            return "Bronze"
        } else if (resultado <= 50) {
            return "Prata"
        } else if (resultado <= 80) {
            return "Ouro"
        } else if (resultado <= 90) {
            return "Diamante"
        } else if (resultado <= 100) {
            return "Lendário"
        } else {
            return "Imortal"
        }
}

const vitorias = 36;
const derrotas = 12;

const resultado = calculadoraRankeada(vitorias, derrotas);
const saldo = vitorias - derrotas;
console.log(`O Herói tem de saldo de ${saldo} e está no nível ${resultado}.`);