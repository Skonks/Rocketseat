// throw
function sayMyName(name = "") {
    if (name === "") {
        throw "Nome é obrigatório" // Vai parar a execução
    }

    console.log(name)
}

// try...catch (Vai capturar o erro e vai continuar a aplicação)
try { // Tentando a função
    sayMyName("Yukie")
} catch (e) { // Capturando o erro (?)
    console.log(e)
}

console.log("Após o try/catch")