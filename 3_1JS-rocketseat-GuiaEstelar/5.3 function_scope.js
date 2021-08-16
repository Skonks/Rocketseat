/*
    Function scope
*/

let subject = "create video"
function createThink(subject) {
    subject = "study" // Não estamos sobreescrevendo a subject de fora
    return subject
}

console.log(createThink(subject))
console.log(subject)