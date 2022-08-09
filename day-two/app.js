// Dia 2

function perguntas() {
    const name = prompt('Digite seu nome:');
    const age = prompt('Digite sua idade:');
    const lang = prompt('Digite qual linguagem de programação está estudando:');

    document.querySelector('.text-name').innerHTML = `Olá ${name}`;
    document.querySelector('.text-age').innerHTML = `Você tem ${age} anos.`;
    document.querySelector('.text-lang').innerHTML = `Você estuda ${lang}, muito legal!`;
}
