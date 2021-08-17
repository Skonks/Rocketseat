/*
    Function hoisting (É como se o JS estivesse mudando a posição do código)
*/

//Não usar var, const ou let porque se não vai dar erro no hoisting
sayMyName()

function sayMyName() {
    console.log("Skonks")
}