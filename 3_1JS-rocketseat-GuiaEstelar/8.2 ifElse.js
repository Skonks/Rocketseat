/* 
    if ... else
*/
// if (condicional) {bloco de código}
// Medir febre
let temperature = 36.9
let highTemperature = temperature >=37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if (temperature === 37) {
    console.log("Está com febre")
} else if (mediumTemperature) {
    console.log("Febre normal")
} else if (highTemperature) {
    console.log("Febre alta")
} else {
    console.log("Não está com febre")
}