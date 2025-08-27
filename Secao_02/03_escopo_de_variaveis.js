/*
Escopo:
    - Local onde a variável foi declarada
    - Variáveis declaradas dentro de uma função só podem ser acessadas dentro dessa função
    - Variáveis declaradas fora de uma função podem ser acessadas dentro e fora de funções
*/
let nome = "Julio" // Variável global

{
    var idade = 25 // Variável global (var não respeita escopo de bloco)
    let nome = "Cesar"
    console.log(nome) // Acessando variável global dentro de um bloco
}
console.log(nome) // Acessando variável global fora de um bloco
console.log(idade) // Acessando variável global fora de um bloco