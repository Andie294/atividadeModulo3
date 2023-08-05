/* Nesta atividade, você deve criar um código em JavaScript com uma matriz bidimensional para armazenar informações sobre animais e as suas características.

Cada linha deve representar um animal e cada coluna terá as diferentes informações sobre ele, como nome, espécie e idade. */



// Array bidimensional sobre os animais e suas características
let animais = [
    // Nome, espécie, idade
    ["Francisco", "Gato", 3], 
    ["Rebecca", "Cachorro", 8],
    ["Bóris", "Peixe", 4], 
    ["Epaminhondas", "Papagaio", 25],  
    ["Roberto", "Leão", 10],  
    ["Dorothy", "Elefante", 30],  
    ["Matilda", "Píton", 6],  
    ["Humberto", "Hamster", 1], 
    ["Pietra", "Coelho", 5], 
    ["Estela", "Calopsita", 2]
]

//Encontrando elementos dos animais
console.log(animais[2][2]) // Busca na coluna 2, na linha 2. Retorna 4
console.log(animais[9][0]) // Busca na coluna 9, na linha 0. Retorna "Estela"
console.log(animais[6][1]) // Busca na coluna 5, na linha 1. Retorna "Píton"