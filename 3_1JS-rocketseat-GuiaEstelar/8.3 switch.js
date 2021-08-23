/* 
    switch
*/
// switch (expressão) {blocos/cases}
function calculate(number1, operator, number2) {
    let result

    switch (operator) {
        case "+":
            result = number1 + number2
            break;
        case "-":
            result = number1 - number2
            break;

        case "*":
            result = number1 * number2
            break;
        case "/":
            result = number1 / number2
            break;

        default:
            console.log("Não implementado")
            break;
    }

    return result
}