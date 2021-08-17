/*
    function() constructor

    *Expressão new (new Person(parametro))
    *Criar um novo objeto (var Skonks = new Person(parametro))
    *this keyword (Sempre vai ser o Skonks)
*/

//this.skonks = parametro
function Person(name) {
    this.name = name
}
const skonks = new Person("Skonks")
console.log(skonks)