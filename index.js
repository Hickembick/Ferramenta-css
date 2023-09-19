const entrada = require('./entrada');
const processamento = require('./processamento');
const saida = require('./saida');

const { promptProperty, rl } = entrada;
const { processProperties } = processamento;
const { displayProperties } = saida;

// Iniciar a solicitação de propriedades
promptProperty(() => {
    rl.on('close', () => {
        const properties = processProperties();
        displayProperties(properties);
    });
});
