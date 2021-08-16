/*
    Functions (Sempre retorna algo)

    ?Pra que serve? (Agrupamento de código, reutilização e dar significado ao código)
*/
// Função anônima / function expression

// Parâmetros só vão funcionar dentro da função (number1 & number2) 
const sum = function (number1, number2) {
    total = number1 + number2
    return total
}

//sum(2, 3) // << Argumentos 

let number1 = 39
let number2 = 50

console.log(`O número 1 é ${number1}`)
console.log(`O número 2 é ${number2}`)
console.log(`A soma é ${sum(number1, number2)}`)