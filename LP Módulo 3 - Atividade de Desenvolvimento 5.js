/* Temos o array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7] e precisamos criar um código em JavaScript para encontrar o valor 20.

Para isso, temos que escolher entre realizar uma busca linear ou binária de acordo com a que for mais adequada para essa situação.

Codifique a solução mais eficiente para buscar o número 20 no array. */



/* Foi escolhido a forma de busca linear/sequencial. Pois ese tipo de busca é útil para utilizar quando a coleção de dados não está ordenada (como na atividade
    em questão) ou quando não se sabe a posição exata do elemento procurado. */

let numerosSemSequencia= [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]

function buscaNumero(array, numeroBuscado) { // a função recebe o array e o número que quer encontar
    for (let i = 0; i < array.length; i++) { // o loop "for" percorre todo o array em busca do número que quer encontrar
        if (array[i] === numeroBuscado){
            return i // se achar uma correspondência, a função retorna o índice onde o número foi encontrado
        }
        
    }
    return -1 // se não achar nenhuma correspondência, a função retorna -1
}

console.log(buscaNumero(numerosSemSequencia, 20)) // Retorna o índice do número 20. Saída: [7]
console.log(buscaNumero(numerosSemSequencia, 25)) // Retorna o índice do número 25. Saída: [3]
console.log(buscaNumero(numerosSemSequencia, 11)) // Busca exemplificativa. Retorna "-1", pois não tem esse número no array