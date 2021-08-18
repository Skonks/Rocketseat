/*
    Manipulando Strings e Numbers

*/
//Transformar número em string e string em número
let string = "5"
console.log(Number(string))

let number = 3
console.log(String(number))

// ================================================================================================================
// Quero contar quantos caracteres tem uma palavra e quantos digitos tem um número
let word = "Paralelepipedo"
console.log(word.length)

let numero = 1234
console.log(String(numero).length) // Transformando em string para ver quantos números tem

// ================================================================================================================
//Transformar um número quebrado com 2 casa decimais e trocar ponto por vírgula
let quebrado = 4032232.101010
console.log(quebrado.toFixed(2))