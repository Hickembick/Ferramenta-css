// Esta função exibe as propriedades ordenadas no terminal
function displayProperties(properties) {
    console.log('\nPropriedades ordenadas de A-Z:'); // Exibe um cabeçalho
    properties.forEach(prop => console.log(prop)); // Itera sobre as propriedades e as exibe no console
}

// Exporta a função displayProperties para que ela possa ser usada em outros módulos
module.exports = {
    displayProperties,
};
