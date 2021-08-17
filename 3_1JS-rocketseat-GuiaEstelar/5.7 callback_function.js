/*
    Callback function (Função sendo passada por uma função)
*/

function sayMyName(name) {
    console.log("Antes de executar o callback")
    name()

    function name (){
        console.log("Estou numa callback")
    }
    name()

    console.log("Depois de executar o callback")
}