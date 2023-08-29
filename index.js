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
