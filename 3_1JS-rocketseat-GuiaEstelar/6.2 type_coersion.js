/*
    Type conversion (Eu fazendo a troca) vs Type coersion (JS fazendo a troca)
    *Alteração de um tipo de dado para outro tipo
*/
console.log("9" + 5) // Coersion, o JS tá transformando o 5 em String
console.log(Number("9") + 5) // Conversion, eu estou trocando

/* 
    FALSY
        Quando um valor é considerado false em contextos aonde um booleano é obrigatório (condicionais e loop)
            false
            0
            -0
            ""
            null
            undefined
            NaN
*/


/* 
    TRUTHY
        Quando um valor é considerado true em contextos aonde um booleano é obrigatório (condicionais e loop)
            true
            {}
            []
            1
            3.23
            "0"
            "false"
            -1
            Infinity
            -Infinity
*/
