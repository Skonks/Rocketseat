/*
    Function hoisting (É como se o JS estivesse mudando a posição do código)
*/

//Não usar var, const ou let porque se não vai dar erro
sayMyName()

function sayMyName() {
    console.log("Skonks")
}