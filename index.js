const entrada = require('./model/entrada');
const processamento = require('./model/processamento');
const saida = require('./model/saida');

const rl = entrada.rl;
const properties = [];

entrada.promptProperty(properties, rl); // Passe rl como argumento

rl.on('close', () => {
    processamento.processProperties(properties);
    saida.displayProperties(properties);
});
