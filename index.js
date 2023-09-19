const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const properties = [];  // Array para armazenar as propriedades

function promptProperty() {
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        try {
            if (property.toUpperCase() === 'SAIR') {
                rl.close();
            } else {
                properties.push(property);  // Adiciona a propriedade no array
                promptProperty();   // Chama a função novamente para a próxima propriedade
            }
        } catch (error) {
            console.error('Ocorreu um erro na sua solicitação', error.message);
            rl.close();
        }
    });
}

rl.on('close', () => {
    properties.sort();  // Ordena as propriedades alfabeticamente
    console.log('\nPropriedades ordenadas de A-Z:');
    properties.forEach(prop => console.log(prop));
});

promptProperty();
