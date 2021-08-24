/* 
    Exercicio 1

    Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistema número para sistema de notas em caractere tipo A B C (if else)
    *-De 90 para cima = A
    *-Entre 80 - 89 = B
    *-Entre 70 - 79 = C
    *-Entre 60 - 69 = D
    *-Menor que 60 = F
*/
let notaA = 91
let notaB = 85
let notaC = 75
let notaD = 65
let notaF = 59

if (notaA > 90) {
    notaA = "A"
    console.log("A nota 1 virou: " + notaA)
} else {
    console.log("A nota não é valida")
}

if (notaB >= 80 && notaB <= 89) {
    notaB = "B"
    console.log("A nota 2 virou: " + notaB)
} else {
    console.log("A nota não é valida")
}

if (notaC >= 70 && notaC <= 79) {
    notaC = "C"
    console.log("A nota 3 virou: " + notaC)
} else {
    console.log("A nota não é valida")
}

if (notaD >= 60 && notaD <= 69) {
    notaD = "D"
    console.log("A nota 4 virou: " + notaD)
} else {
    console.log("A nota não é valida")
}

if (notaF < 60) {
    notaF = "F"
    console.log("A nota 5 virou: " + notaF)
} else {
    console.log("A nota não é valida")
}