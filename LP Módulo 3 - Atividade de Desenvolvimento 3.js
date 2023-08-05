/* Considere o array [3, 7, 9, 1, 0].

O primeiro elemento inserido foi o 3, o segundo foi o 7 e assim por diante, seguindo a ordem.

Levando em conta as três estruturas de dados (fila, lista e pilha) e as suas regras de operações,
qual seria a sequência dos números removidos em cada uma delas para esvaziá-las completamente utilizando o array mencionado? */



// ** Removendo os elementos - Fila **

/*Segue o princípio "Primeiro a entrar, primeiro a sair". Ou seja, o primeiro elemento inserido é o primeiro a ser removido.
Dessa forma, como o enunciado traz que o primeiro elemento foi o 3, o segundo foi o 7 e assim sucessivamente,
a ordem para remoção dos númmeros seria: [3, 7, 9, 1, 0]*/

let filaNumeros = [3, 7, 9, 1, 0]

function desenfileirarNumeros() { // Não recebe parâmetro porque desenfileira o primeiro da lista
    return filaNumeros.shift()
}

console.log(desenfileirarNumeros(filaNumeros)) // Removeu o 3. Saída: 3
console.log(filaNumeros) // Saída: [7, 9, 1, 0]

// Ao chamar a função novamente, o array é atualizado e ela remove o primeiro elemento dele.
console.log(desenfileirarNumeros(filaNumeros)) // Removeu o 7. Saída: 3
console.log(filaNumeros) // Saída: [9, 1, 0]

console.log(desenfileirarNumeros(filaNumeros)) // Removeu o 9. Saída: 9
console.log(filaNumeros) // Saída: [1, 0]

console.log(desenfileirarNumeros(filaNumeros)) // Removeu o 1. Saída: 1
console.log(filaNumeros) // Saída: [0]

console.log(desenfileirarNumeros(filaNumeros)) // Removeu o 0. Saída: 0
console.log(filaNumeros) // Saída: []


// ** Removendo os elementos - Lista **

/*Pode-se inserir e remover elementos em qualquer posição. Assim, a ordem para remoção dos números pode ser:
[3, 7, 9, 1, 0]*/

let listaNumeros = [3, 7, 9, 1, 0]

function remocaoNumeros(numero) { // O parâmetro é o elemento que se quer remover
    let indiceLista = listaNumeros.indexOf(numero) // Essa função busca a posição do número na lista
    if (indiceLista !== -1) { // Se o número for encontrado na lista, ou seja, diferente de -1, o "splice" será usado para removê-lo
        listaNumeros.splice(indiceLista, 1) // Vai remover um número, na posição indicada 
        return true
    } else {
        return false // Retornará "false" caso o número escolhido para remoção não exista no array
    }
}

console.log(remocaoNumeros(3)) // O console.log, retorna "true"
console.log(listaNumeros) // Saída: [7, 9, 1, 0]

remocaoNumeros(7)
console.log(listaNumeros) // Saída: [9, 1, 0]

remocaoNumeros(9)
console.log(listaNumeros) // Saída: [1, 0]

console.log(remocaoNumeros(4)) // Remoção exemplificativa. Como não tem o número 4, o cosole.log retorna "false".
console.log(listaNumeros) // Saída: [1, 0]

remocaoNumeros(1)
console.log(listaNumeros) // Saída: [0]

remocaoNumeros(0)
console.log(listaNumeros) // Saída: []


// ** Removenod os elementos - Pilha **

/*Segue o princípio "Último a entrar, primeiro a sair". Ou seja, o último elemento inserido é o primeiro a ser removido.
Então, como o enunciado traz que o primeiro elemento foi o 3, o segundo foi o 7 e assim por diante,
a ordem para remoção dos númmeros seria: [0, 1, 9, 7, 3]
*/

let pilhaNumeros = [0, 1, 9, 7, 3]

function desempilharNumeros(){ // Não recebe parâmetro pois desempilha o último da lista
    return pilhaNumeros.pop()
}

console.log(desempilharNumeros(pilhaNumeros)) // Removeu o 3. Saída: 3
console.log(pilhaNumeros) // Saída: [0, 1, 9, 7]

// Ao chamar a função novamente, o array é atualizado e ela remove o último elemento dele.
console.log(desempilharNumeros(pilhaNumeros)) // Removeu o 7. Saída: 7
console.log(pilhaNumeros) // Saída: [0, 1, 9]

console.log(desempilharNumeros(pilhaNumeros)) // Removeu o 9. Saída: 9
console.log(pilhaNumeros) // Saída: [0, 1]

console.log(desempilharNumeros(pilhaNumeros)) // Removeu o 1. Saída: 1
console.log(pilhaNumeros) // Saída: [0]

console.log(desempilharNumeros(pilhaNumeros)) // Removeu o 0. Saída: 0
console.log(pilhaNumeros) // Saída: []