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

// 3.Crie uma variável chamada student, veja qual é o tipo dela, atribua as mesmas propriedades e valores do exercicio acima, e mostre no console a seguinte mensagem : "name" de idade "age" pesa "weight" kg's

let student = {
    nome: "Chris",
    age: 18,
    star: 5.0,
    weight: 60.00,
    isSubscribed: true
}

console.log(`${student.nome} de idade ${student.age} pesa ${student.weight}`)

// 4.Declare uma variável array de nome student e atribua a ela nenhum valor
let students = []

// 5.Reatribua valor para variável acima colocando dentro dela o objeto student da questão 3
students = [
    student
]

console.log(students)

// 6.Coloque no console o valor da posição zero no array acima
console.log(students[0])

// 7.Crie um novo student e coloque na posição 1 do array students

const margit = {
    nome: "Margit",
    age: 22,
    weight: 80.00,
    isSubscribed: true
}

students[1] = margit
console.log(students)

// 8.Sem rodar o código, diga qual vai ser o resultado = Undefined acertei heheheheh
console.log(a)
var a = 1