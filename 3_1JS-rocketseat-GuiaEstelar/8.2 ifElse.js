/* 
    if ... else
*/
// if (condicional) {bloco de código}
//Medir febre
let temperature = 37.1

if (temperature === 37) {
    console.log("Está com febre")
} else if (temperature < 37.5 && temperature >= 37) {
    console.log("Febre normal")
} else if (temperature >= 38) {
    console.log("Febre alta")
} else {
    console.log("Não está com febre")
}