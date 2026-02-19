/**
 * @param {*} valor 
 * @returns {boolean}
 */
function ehNumeroValido(valor) {
    if (valor === null || valor === undefined || valor === '') {
        return false;
    }

    const numero = Number(valor);
    return !isNaN(numero);
}

/**
 * @param {*} a 
 * @param {*} b 
 * @returns {Object} 
 */
function validarEntradas(a, b) {
    if (!ehNumeroValido(a)) {
        return { valido: false, erro: "O primeiro valor não é um número válido" };
    }
    if (!ehNumeroValido(b)) {
        return { valido: false, erro: "O segundo valor não é um número válido" };
    }

    return { valido: true };
}

module.exports = {
    ehNumeroValido,
    validarEntradas
};