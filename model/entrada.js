// Importa o módulo readline para interação com o terminal
const readline = require('readline');

// Cria uma interface de leitura/escrita para o terminal
const rl = readline.createInterface({
    input: process.stdin,   // Configura a entrada padrão para leitura (teclado)
    output: process.stdout  // Configura a saída padrão para escrita (terminal)
});

// Array para armazenar as propriedades de CSS inseridas pelo usuário
const properties = [];

// Função que solicita ao usuário a entrada de propriedades de CSS
function promptProperty(callback) {
    // Pergunta ao usuário por uma propriedade de CSS
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        if (property.toUpperCase() === 'SAIR') {
            rl.close();
        } else {
            properties.push(property);
            promptProperty(callback);
        }
    });
}

// Exporta as funções e a interface readline para uso em outros módulos
module.exports = {
    promptProperty,
    rl,
};
