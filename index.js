const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function promptProperty() {
    const properties = [];

    rl.question('Digite ou "SAIR" para finalizar: ', (property) => {
        try {
            if (property.toUpperCase() === 'SAIR') {
                console.log('\nPropriedades ordenadas de A-Z com sucesso');
                properties.sort();
                properties.forEach(prop => console.log(prop));
                rl.close();
            } else {
                properties.push(property);
                promptProperty();
            }
        } catch (error) {
            console.error('Ocorreu um erro na sua solicitação', error.message);
            rl.close();
        }
    });
}

promptProperty();
