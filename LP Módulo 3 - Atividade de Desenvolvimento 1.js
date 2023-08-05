/* Você deve criar três listas em JavaScript:

1. para guardar os nomes de dez pessoas;
2. para guardar as suas idades;
3. para guardar as suas cores favoritas.

Em seguida, imprima essas listas. Depois, faça algumas modificações, alterando uma cor e uma idade.
Ao terminar, imprima novamente todas as informações das três listas. */



// Criação das listas
let pessoas = [ 'Cecília', 'Pedro', 'Jorge', 'Ana', 'Cláudia', 'Afonso', 'Bóris', 'Pandora', 'Luiza', 'Bruce']
let idadePessoas = [24, 35, 22, 18, 72, 41, 57, 63, 30, 28]
let corFavoritaPessoas = ['Azul-marinho', 'Rosa', 'Esmeralda', 'Turquesa', 'Lilás', 'Coral', 'Âmbar', 'Violeta', 'Ocre', 'Verde']

// Impressão das listas - cada informação em uma linha
for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i]); 
}

for (let i = 0; i < idadePessoas.length; i++) {
    console.log(idadePessoas[i])
}

for (let i = 0; i < corFavoritaPessoas.length; i++) {
    console.log(corFavoritaPessoas[i]);
}

// Alteração nas listas
pessoas.pop() // Remoção do nome "Bruce" que estava no final do array
pessoas.push("Eduardo") // Adicionando "Eduardo" no final do array

idadePessoas.splice(1, 2, 36, 48) // Removeu as idades que estavam na posição 1 e 2 (35, 22) e colocou 36 e 48

corFavoritaPessoas.splice(8, 1, 'Cereja') // Removeu e trocou apenas a cor que estavam na posição 8 (Ocre) por "Cereja"

// Reimpressão das listas com as novas informações - cada uma em uma linha
    for (let i = 0; i < pessoas.length; i++) {
        console.log(pessoas[i]); 
}

for (let i = 0; i < idadePessoas.length; i++) {
    console.log(idadePessoas[i])
}

for (let i = 0; i < corFavoritaPessoas.length; i++) {
    console.log(corFavoritaPessoas[i]);
}