/* 
    Operadores Unários
        *-typeof
        *-delete
*/
const person = {
    name: "Yukie",
    age: "18"
}

delete person.age
console.log(person) // Vai deletar uma propriedade dentro do objeto
console.log(typeof "Christiane")