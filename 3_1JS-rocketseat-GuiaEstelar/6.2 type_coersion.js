/*
    Type conversion (Eu fazendo a troca) vs Type coersion (JS fazendo a troca)
    *Alteração de um tipo de dado para outro tipo
*/
console.log("9" + 5) // Coersion, o JS tá transformando o 5 em String
console.log(Number("9") + 5) // Conversion, eu estou trocando

/* 
    FALSY (É tipo um falso, acontece quando eles esperam um booleano e você da um desses valores, ai ele recebe um type coersion e se tranforma em falsy)
            false
            0
            -0
            ""
            null
            undefined
            NaN
*/
console.log(null ? "verdadeiro" : "false")

/* 
    TRUTHY (É tipo um verdadeiro, acontece quando eles esperam um booleano e você da um desses valores, ai ele recebe um type coersion e se tranforma em truthy)
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
