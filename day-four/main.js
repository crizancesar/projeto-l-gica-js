const prompt = require('prompt-sync')();
const numeroSorteado = Math.floor(Math.random()*10);

let tentativas = 3;

while (tentativas) {
    const numeroEscolhido = prompt('Digite um número de 0 á 10:')
    if (numeroSorteado == numeroEscolhido) {
        console.log('Parabéns você acertou!')
        break;
    } else {
        tentativas--
        console.log(`Você errou... Restam ${tentativas} tentativas.`)
        
    }
}