const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const properties = [];

function promptProperty() {
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        if (property.toUpperCase() === 'SAIR') {
            console.log('\nPropriedades ordenadas de A-Z:');
            properties.sort();
            properties.forEach(prop => console.log(prop));
            rl.close();
        } else {
            properties.push(property);
            promptProperty();
        }
    });
}

promptProperty();
