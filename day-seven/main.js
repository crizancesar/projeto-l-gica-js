const prompt = require('prompt-sync')();

// Funções da Calculadora
const operacoes = {
    somar: (n1, n2) => { return (n1 + n2) },
    subtrair: (n1, n2) => { return (n1 - n2) },
    multiplicar: (n1, n2) => { return (n1 * n2) },
    dividir: (n1, n2) => { return (n1 / n2).toFixed(3) },
    sair: () => { return console.log('Até a proxima...') }
}


// Entrada das opções da calculadora
function inputOption() {
    console.log('<SOMAR> <SUBTRAIR> <MULTIPLICAR> <DIVIDIR> <SAIR>');
    const optionClient = prompt('Digite uma das opções: ');

    if (optionClient === 'sair') {
        console.log('Até a proxima...');
    } else {
        valideOption(operacoes[(optionClient)]);
    }
}

// Valida a opção escolhida pelo usuário
function valideOption(option) {
    if (option) {
        inputNumbers(option);
    } else {
        console.log('Digite uma opção válida!');
        inputOption();
    }

}

// Entrada dos números
function inputNumbers(option) {
    const [num1, num2] = [
        parseInt(prompt('Digite o primeiro número: ')),
        parseInt(prompt('Digite o segundo número: '))
    ];
    valideNumbers(option, num1, num2);    
}

// Valida os números
function valideNumbers(option, n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        console.log('Digite números validos!');
        inputNumbers(option);
    } else {        
        showResult(option(n1, n2));
    }
}

// Calcula e mostra os resultados
function showResult(result) {
    console.log(result);
    inputOption();
}

inputOption();

