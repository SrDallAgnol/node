/**
 * @param {number} a 
 * @param {number} b 
 * @returns {Object}
 */
function calcular(a, b) {
    a = Number(a);
    b = Number(b);

    return {
        soma: a + b,
        subtracao: a - b,
        multiplicacao: a * b,
        divisao: b !== 0 ? a / b : null,
        divisaoInteira: b !== 0 ? Math.floor(a / b) : null,
        resto: b !== 0 ? a % b : null,
        potencia: Math.pow(a, b)
    };
}

module.exports = {
    calcular
};