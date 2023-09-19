// Criamos um array vazio chamado 'properties' para armazenar as propriedades CSS inseridas pelo usuário.
const properties = [];

// Definimos uma função chamada 'processProperties'.
function processProperties() {
    // Ordenamos o array 'properties' em ordem alfabética.
    properties.sort();
    
    // Retornamos o array 'properties' ordenado.
    return properties;
}

// Exportamos a função 'processProperties' para que ela possa ser utilizada em outros módulos.
module.exports = {
    processProperties,
};
