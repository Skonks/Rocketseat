/*
    Function scope
*/

let subject = "create video"
function createThink(subject) { // Parâmetro
    subject = "study" // Não estamos sobreescrevendo a subject de fora enquanto tivermos um parâmetro
    return subject
}

console.log(createThink(subject)) // << Retorno da função e atualiza o objeto
console.log(subject)