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
            *var é global e também local e poderá para de funcionar fora de um escopo de bloco (Global = tudo que está dentro da tag <script> | Local = o que existe dentro do escopo apenas) & (Javascript tem um conceito chamado "Hoisting" que é basicamente jogar as variáveis pra cima (?))

                console.log("> Existe x antes do bloco?", x)
                {
                    var x = 0
                }
                console.log("> Existe x depois do bloco?", x)
=========================================================================================================================

    ?let & const
        JS
            *let e const são locais e só funcionam no escopo onde
*/
console.log("> Existe x antes do bloco?", x)
{
    var x = 0
}
console.log("> Existe x depois do bloco?", x)