// Importa os módulos necessários
const entrada = require('./model/entrada'); // Módulo para entrada de propriedades
const processamento = require('./model/processamento'); // Módulo para processamento das propriedades
const saida = require('./model/saida'); // Módulo para exibição das propriedades ordenadas

// Obtém a interface readline (rl) e cria um array para armazenar as propriedades
const rl = entrada.rl; // Obtém a interface readline do módulo de entrada
const properties = [];

// Inicia a função de entrada de propriedades, passando o array de propriedades e a interface readline como argumentos
entrada.promptProperty(properties, rl);

// Define um evento que é acionado quando a interface readline é fechada
rl.on('close', () => {
    // Processa as propriedades para ordená-las
    processamento.processProperties(properties);

    // Exibe as propriedades ordenadas no terminal
    saida.displayProperties(properties);
});
