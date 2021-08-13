/*
    Exercícios
*/

// 1.Declare uma variável de nome weight e veja qual é o tipo da variável
var weight = 100.00
console.log(typeof weight)

// 2.Declare uma variável e atribua valores para cada um dos dados
/*
    name: String
    age: Number (integer)
    star: Number (float)
    isSubscribed (boolean) 
*/

let nome = "Yukie"
let age = "18"
let star = "5.0"
let isSubscribed = false

console.log(nome, age, star, isSubscribed)

// Crie uma variável chamada student, veja qual é o tipo dela, atribua as mesmas propriedades e valores do exercicio acima, e mostre no console a seguinte mensagem : "name" de idade "age" pesa "weight" kg's

let student = {
    nome: "Chris",
    age: 18,
    star: 5.0,
    weight: 60.00,
    isSubscribed: true
}

console.log(`${student.nome} de idade ${student.age} pesa ${student.weight}`)