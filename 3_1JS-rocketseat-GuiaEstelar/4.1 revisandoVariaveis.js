/*
    Variáveis e tipo de dados
*/
// Declaração / Declaration | Agrupando declarações
var nome
let age, isLinda

// Assignments / Atribuição de dados
nome = "Chris" // String
age = 18 // Number
isLinda = true // Boolean

// Que tipo de dado foi colocado na variavel
console.log(typeof nome)

// Multiplos argumentos na função
console.log(nome, age, isLinda)

// Concatenando texto + variáveis
console.log("A " + nome + " tem " + age + " anos.")

// Interpolando text + variáveis com template strings
console.log(`A ${nome} tem ${age} anos.`)