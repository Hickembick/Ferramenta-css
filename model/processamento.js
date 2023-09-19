// Esta função recebe um array de propriedades CSS, ordena-o alfabeticamente e o retorna
function processProperties(properties) {
    properties.sort(); // Ordena o array de propriedades em ordem alfabética
    return properties; // Retorna o array ordenado
}

// Exporta a função processProperties para que ela possa ser usada em outros módulos
module.exports = {
    processProperties,
};
