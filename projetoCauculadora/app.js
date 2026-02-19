const { validarEntradas } = require('./utils/validacoes');
const { calcular } = require('./utils/operacoes');

const numero1 = 48;
const numero2 = 7;

console.log("=== Calculadora Modular ===\n");

console.log(`Valores informados:`);
console.log(`  → número 1 = ${numero1}`);
console.log(`  → número 2 = ${numero2}\n`);

const validacao = validarEntradas(numero1, numero2);

if (!validacao.valido) {
    console.log("ERRO →", validacao.erro);
    console.log("Encerrando cálculo.");
    process.exit(1);
}

const resultados = calcular(numero1, numero2);

console.log("Resultados:");
console.log("──────────────────────────────");
console.log(`Soma:              ${resultados.soma}`);
console.log(`Subtração:         ${resultados.subtracao}`);
console.log(`Multiplicação:     ${resultados.multiplicacao}`);

if (resultados.divisao !== null) {
    console.log(`Divisão:           ${resultados.divisao.toFixed(4)}`);
    console.log(`Divisão inteira:   ${resultados.divisaoInteira}`);
    console.log(`Resto:             ${resultados.resto}`);
} else {
    console.log("Divisão:           IMPOSSÍVEL (divisão por zero)");
    console.log("Divisão inteira:   —");
    console.log("Resto:             —");
}

console.log(`Potenciação:       ${resultados.potencia}`);
console.log("──────────────────────────────\n");

console.log("Cálculo finalizado com sucesso.");