/*
    Manipulando Strings e Numbers

*/
// Transformar número em string e string em número
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
// Transformar um número quebrado com 2 casa decimais e trocar ponto por vírgula
let quebrado = 403.1010
console.log(quebrado.toFixed(2).replace(".", ","))

// ================================================================================================================
// Transforme letras minúsculas em maísculas. Faça o contrário disso também
let maiscula = "Yukie Mayuzumi"
console.log(maiscula.toUpperCase())
console.log(maiscula.toLowerCase())

// ================================================================================================================
// Separe o texto que contem espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços, coloque _
let phrase = "Eu amo a Yukie e a Chris"
let myArray = phrase.split(" ")
console.log(myArray) // Separando o texto
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore) // Colocando _

// ================================================================================================================
// Verificando se o testo contém a palavra "amor"
let frase = "Christiane Friedrich"
console.log(frase.includes("Christiane")) // includes é case sensitive

// ================================================================================================================
// Manipulando arrays e criar um array com construtor
let meuArray = new Array(10)
console.log(meuArray)

// Contar elementos dentro de um array
console.log(["a", "b", "c"].length) // Da pra colocar outros tipos de dados dentro do array tipo: function() { return "Eu amo a yukie" } | ou objeto {type: "array" }

// Transformando uma cadeia de caracteres em elemento de um array
let frases = "Christiane"
console.log(Array.from(frases))