/*
    function() constructor

    *expressão new (new Person())
    *criar um novo objeto (var Skonks = new Person())
    *this keyword (Sempre vai ser o Skonks)
*/
function Person(name) {
    this.name = name
}
const Skonks = new Person()