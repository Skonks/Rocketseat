/* 
    Estrutura de repetição for
*/
for (let i = 10; i > 0; i--) { // Iniciando variavel, condição de continuação do loop e por ultimo, expressão final para terminar o loop, incrementando de 1 em 1
    if (i === 5) {
        continue; // break: Para a execução do loop. continue: Pula a execução do momento
    }
    console.log(i)
}
