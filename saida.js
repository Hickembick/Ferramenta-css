function displayProperties(properties) {
    console.log('\nPropriedades ordenadas de A-Z:');
    properties.forEach(prop => console.log(prop));
}

module.exports = {
    displayProperties,
};
