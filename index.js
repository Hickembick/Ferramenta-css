// Importar o módulo readline para interação com o terminal
const readline = require('readline');

// Criar uma interface para leitura e escrita no terminal
const rl = readline.createInterface({
    input: process.stdin,   // Usar a entrada padrão (teclado)
    output: process.stdout  // Usar a saída padrão (terminal)
});

// Função para solicitar propriedades de CSS ao usuário
function promptProperty() {
    const properties = [];  // Inicia o array para armazenar as propriedades

    // Pergunta as propriedade de CSS
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        try {
            // Verifica se foidigitado o "SAIR"
            if (property.toUpperCase() === 'SAIR') {
                console.log('\nPropriedades ordenadas de A-Z com sucesso');
                properties.sort();  // Ordenar as propriedades de A-Z
                properties.forEach(prop => console.log(prop));  // Imprimir as propriedade
                rl.close();  // Fechar o readline
            } else {
                properties.push(property);  // Adicionar a propriedade no array
                promptProperty();  // Chama a função novamente para a próxima propriedade
            }
        } catch (error) {
            console.error('Ocorreu um erro na sua solicitação', error.message);
            rl.close();  // Fechar o readline em caso de erro
        }
    });
}

// Iniciar a solicitação de propriedades
promptProperty();
