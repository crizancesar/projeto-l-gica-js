
// Funções da Calculadora
const operations = {
    somar: (n1, n2) => { return (n1 + n2) },
    subtrair: (n1, n2) => { return (n1 - n2) },
    multiplicar: (n1, n2) => { return (n1 * n2) },
    dividir: (n1, n2) => { return (n1 / n2).toFixed(3) },
    sair: () => { return alert('Até a proxima...') }
}

const button = document.querySelector('.button');

// Entrada das opções da calculadora
function inputOption() {
    const optionClient = prompt('<SOMAR> <SUBTRAIR> <MULTIPLICAR> <DIVIDIR> <SAIR>\n Digite uma das opções: ');
    
    if (optionClient === 'sair') {
        alert('Até a proxima...');
    } else {
        valideOption(optionClient);
    }
}

// Valida a opção escolhida pelo usuário
function valideOption(option) {
    if (option) {
        inputNumbers(option);
    } else {
        alert('Digite uma opção válida!');
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
        alert('Digite números validos!');
        inputNumbers(option);
    } else {        
        showResult(option, n1, n2);
    }
}

// Calcula e mostra os resultados
function showResult(option, n1, n2) {
    const calcular = operations[(option)]
    const result = calcular(n1, n2);
    alert(`O resultado de ${option} é: ${result}`);
    inputOption();
}

button.onclick = () => {inputOption()};
