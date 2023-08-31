const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const properties = [];  // Array para armazenar as propriedades

function promptProperty() {
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        try {// Importar o módulo readline para interação com o terminal
            const readline = require('readline');
            
            // Criar uma interface para leitura e escrita no terminal
            const rl = readline.createInterface({
                input: process.stdin,   // Configura a entrada padrão para leitura (teclado)
                output: process.stdout  // Configura a saída padrão para escrita (terminal)
            });
            
            // Array para armazenar as propriedades inseridas pelo usuário
            const properties = [];
            
            // Função para solicitar propriedades de CSS ao usuário
            function promptProperty() {
                // Pergunta ao usuário por uma propriedade de CSS
                rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
                    try {
                        // Verifica se o usuário digitou "SAIR"
                        if (property.toUpperCase() === 'SAIR') {
                            properties.sort();  // Ordena as propriedades alfabeticamente
                            console.log('\nPropriedades ordenadas de A-Z:');
                            properties.forEach(prop => console.log(prop));
                            rl.close();  // Fecha a interface readline
                        } else {
                            properties.push(property);  // Adiciona a propriedade no array
                            properties.sort();  // Ordena as propriedades imediatamente
                            promptProperty();   // Chama a função novamente para a próxima propriedade
                        }
                    } catch (error) {
                        console.error('Ocorreu um erro na sua solicitação', error.message);
                        rl.close();  // Fecha a interface readline em caso de erro
                    }
                });
            }
            
            // Iniciar a solicitação de propriedades, chamando a função pela primeira vez
            promptProperty();
            
            if (property.toUpperCase() === 'SAIR') {
                properties.sort();
                console.log('\nPropriedades ordenadas de A-Z:');
                properties.forEach(prop => console.log(prop));
                rl.close();
            } else {
                properties.push(property);
                properties.sort();  // Ordenar as propriedades imediatamente
                promptProperty();   // Chamar a função novamente para a próxima propriedade
            }
        } catch (error) {
            console.error('Ocorreu um erro na sua solicitação', error.message);
            rl.close();
        }
    });
}

promptProperty();
