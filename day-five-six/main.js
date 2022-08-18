const prompt = require('prompt-sync')();

const listaDeCompras = {
    'sacolao': [],
    'mistura': [],
    'congelados': [],
    'mantimentos': []
}

function editarItens() {
    let editar = prompt('Editar itens - Digite "s" ou "n": ');
    
    if (editar == 's') {
        perguntaAddOuRemove();
    } else {
        console.log(listaDeCompras);
    }

}

function adicionarItens() {
    let addItem = 's';
    while (addItem == 's') {
        let item = prompt('Digite o nome do item: ');
        listaDeCompras.push(prompt(`${item} vai para qual lista: `));      
        listaDeCompras[(nomeLista)].push(item);
        addItem = prompt('Add item - Digite "s" ou "n": ');

    }
    editarItens();
        
}

function removeItens() {
    let nomeLista = prompt('Digite a lista do item: ');
    console.log(listaDeCompras[(nomeLista)]);

    let removeItem = prompt('Digite o nome do item que será excluido: ');
    if (listaDeCompras[(nomeLista)].includes(removeItem)) {
        listaDeCompras[(nomeLista)].splice(0, 1, removeItem);
        console.log('Item exclúido com sucesso!');
        perguntaAddOuRemove();
    } else {
        console.log('Esse produto não existe na lista.');
        editarItens();
    }

}

function perguntaAddOuRemove() {
    let addOuRemove = prompt('Editar itens - Digite "add" ou "remove": ');
    if (addOuRemove == 'add') {
        adicionarItens();
    }
    if (addOuRemove == 'remove') {
        removeItens();
    }
}

let inicio = prompt('Nova lista de compras - Digite "s" ou "n": ');
if (inicio == 's') {
    adicionarItens();
}

console.log('Fim da execução...');
