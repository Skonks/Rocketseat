/* 
    Operadores lógicos (logical operators)
*/

// - 2 valores booleanos, quando verificados, resultará em verdadeiro ou falso
let pao = true
let queijo = false

// and = && (Os dois precisam ser verdadeiros)
if (pao && queijo == true) {
    console.log("Delicia")
} else {
    console.log("Ew")
}

// or = || (Só um precisa ser verdadeiro)
console.log(pao || queijo)

// not = !
