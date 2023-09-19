// Importa o módulo readline para interação com o terminal
const readline = require('readline');

// Cria uma interface de leitura/escrita para o terminal
const rl = readline.createInterface({
    input: process.stdin,   // Configura a entrada padrão para leitura (teclado)
    output: process.stdout  // Configura a saída padrão para escrita (terminal)
});

// Esta função solicita ao usuário a entrada de propriedades de CSS e as armazena em um array
function promptProperty(properties, rl) { // Adicione a variável rl como argumento
    // Pergunta ao usuário por uma propriedade de CSS
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        try {
            // Verifica se o usuário digitou "SAIR"
            if (property.toUpperCase() === 'SAIR') {
                rl.close(); // Fecha a interface readline
            } else {
                properties.push(property); // Adiciona a propriedade no array
                promptProperty(properties, rl); // Chama a função novamente para a próxima propriedade
            }
        } catch (error) {
            console.error('Ocorreu um erro na sua solicitação', error.message);
            rl.close(); // Fecha a interface readline em caso de erro
        }
    });
}

// Exporta a função promptProperty e a interface readline (rl) para uso em outros módulos
module.exports = {
    promptProperty,
    rl,
};
