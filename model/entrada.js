const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptProperty(properties, rl) { // Adicione a variável rl como argumento
    rl.question('Digite uma propriedade de CSS (ou "SAIR" para finalizar): ', (property) => {
        try {
            if (property.toUpperCase() === 'SAIR') {
                rl.close();
            } else {
                properties.push(property);
                promptProperty(properties, rl); // Passe rl como argumento
            }
        } catch (error) {
            console.error('Ocorreu um erro na sua solicitação', error.message);
            rl.close();
        }
    });
}

module.exports = {
    promptProperty,
    rl,
};
