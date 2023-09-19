// Importa os módulos necessários
const entrada = require('./model/entrada');
const processamento = require('./model/processamento');
const saida = require('./model/saida'); 


// Obtém a interface readline (rl) e cria um array
const rl = entrada.rl;
const properties = [];

// Inicia a função de entrada de propriedades
entrada.promptProperty(properties, rl);

// Define um evento que é acionado quando a interface readline é fechada
rl.on('close', () => {
    // Processa as propriedades para ordená-las
    processamento.processProperties(properties);

    // Exibe as propriedades ordenadas no terminal
    saida.displayProperties(properties);
});
