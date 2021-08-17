/*
    Callback function (Função sendo passada por uma função)
*/

function sayMyName(name) {
    console.log("Antes de executar o callback")
    name()

    console.log("Depois de executar o callback")
}

sayMyName(
    () => {
        console.log("Estou em uma callback")
    }
)