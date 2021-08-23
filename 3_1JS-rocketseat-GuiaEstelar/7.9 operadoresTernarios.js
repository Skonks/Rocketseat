/* 
    Operador condicional (ternário)
    Dependendo da condição, recebemos valores diferentes

    Condição então valor 1 se não, valor 2
        condition ? value1 : value2

Exemplos: 
*/

// Café da manhã top
let pao = false
let queijo = true
const niceBreakfast = pao || queijo ? "Café doido" : "Café feio"
console.log(niceBreakfast)

// Maior que 18
let age = 18
const canDrive = age >= 18 ? "can drive" : "can't drive"
console.log(canDrive)