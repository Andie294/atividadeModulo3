/* Crie uma lista encadeada em que cada elemento representa uma pessoa.

Ela precisa conter informações como nome, idade e referência ao filho dela. */



class PessoasNo{ // Criação de classe para ser cada nó da lista.
    constructor (nome, idade){
        this.nome = nome
        this.idade = idade
        this.filho = null
    }
}

class ListaPessoas{ // Criação de uma classe para ser a lista encadeada. 
    constructor(){
        this.primeiro = null // Referência de vazio para primeiro nó da lista
    }

    addLast(nome, idade){ // Adciona uma nova pessoa à lista encadeada, no final da lista
        let novaPessoa = new PessoasNo(nome, idade)

        if (!this.primeiro){ // Verifica se a lista está vazia e se o nó for o primeiro da lista, ele se tornará a nova cabeça
            this.primeiro = novaPessoa
        } else { // Se não for, ele vai ser adicionado após o último da lista
            let atual = this.primeiro // Tem como referência o primeiro nó
            while (atual.filho){ // Percorre a lista encadeada até achar o último nó, atualiza e adiciona uma nova pessoa
                atual = atual.filho // Usado para armazenar a referência para o próximo nó da lista. O último nó da lista tem "filho" igual a "null", significando que não há um próximo nó 
            }
            atual.filho = novaPessoa // Atualiza "filho" do último nó para apontar para o objeto novaPessoa, adicionando assim a nova pessoa ao final da lista.
        } 
    }
}

let informacoesPessoas = new ListaPessoas()

informacoesPessoas.addLast("Marta", 91)
informacoesPessoas.addLast("Enrique", 68)
informacoesPessoas.addLast("Mariane", 37)
informacoesPessoas.addLast("André", 4)