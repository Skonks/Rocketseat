/*
    Functions (Sempre retorna algo)

    ?Pra que serve? (Agrupamento de código, reutilização e dar significado ao código)
*/
// Função anônima / function expression

// Parâmetros só vão funcionar dentro da função (fruta1 e fruta2) 
function fazerSuco(fruta1, fruta2) {
    return fruta1 + fruta2
}

//fazerSuco(2, 3) // << Argumentos 
const copo = fazerSuco("banana", "maçã") // << Colocando coisas dentro da função
console.log(copo) // << Recebendo as coisas transformadas