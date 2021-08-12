/*
    Scope
    *Escopo determina a visibilidade de alguma variável no JS

    ?Block Statment (Declaração de bloco)
        JS
            *Vamos iniciar um bloco:
                {
                    Aqui dentro é um bloco e posso colocar qualquer código
                } Aqui fechamos o bloco

    *O bloco também criará um novo escopo. Chamamos ele de `block-scoped`
=========================================================================================================================
    
    ?var
        JS
            *var é global e poderá para de funcionar fora de um escopo de bloco

            console.log("> existe x antes do bloco?", x)
            {
                var x = 0
            }
=========================================================================================================================

    ?let & const
        JS
            *let e const são locais e só funcionam no escopo onde
*/

{
    let x = 0
    console.log(x)
}