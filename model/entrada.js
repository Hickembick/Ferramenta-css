const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const properties = []; // Array para armazenar as propriedades

function promptProperty(callback) {
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        if (property.toUpperCase() === 'SAIR') {
            rl.close();
        } else {
            properties.push(property);
            promptProperty(callback);
        }
    });
}

module.exports = {
    promptProperty,
    rl,
};
