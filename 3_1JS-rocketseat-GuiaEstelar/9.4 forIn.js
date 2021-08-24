/* 
    Estrutura de repetição for...in (Criando um loop em cima de um objeto, pegando as propriedades do objeto)
*/
let person = {
    name: "Chris",
    age: 19,
    weight: 50
}

for (let property in person) { // Pega as coisas que estão dentro de person e coloca em property e faz um loop até acabar o que mostrar
    console.log(property)
    console.log(person.name) // Pegar só o nome
}