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
function promptProperty() {
    // Pergunta ao usuário por uma propriedade de CSS
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        try {
            // Verifica se o usuário digitou "SAIR"
            if (property.toUpperCase() === 'SAIR') {
                rl.close(); // Fecha a interface readline
            } else {
                properties.push(property);  // Adiciona a propriedade no array
                promptProperty();   // Chama a função novamente para a próxima propriedade
            }
        } catch (error) {
            console.error('Ocorreu um erro na sua solicitação', error.message);
            rl.close();  // Fecha a interface readline em caso de erro
        }
    });
}

// Evento que é acionado quando a interface readline é fechada
rl.on('close', () => {
    properties.sort();  // Ordena as propriedades alfabeticamente
    console.log('\nPropriedades ordenadas de A-Z:');
    properties.forEach(prop => console.log(prop));  // Exibe as propriedades ordenadas
});

// Inicia a solicitação de propriedades chamando a função pela primeira vez
promptProperty();
