/* 
    Exercicio 2

    Sistema de gastos familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
        *-receitas: []
        *-despesas: []

    Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a familia está com saldo positivo ou negativo, seguido do valor do saldo
*/
let gastosFamiliar = {
    incomes: [100, 200, 4000, 300],
    expenses: [200, 100, 300, 300]
}

function balance(incomes, expenses) {
    if (incomes > expenses) {
        console.log("O saldo é maior")
    } else {
        console.log("O custo é maior")
    }
}