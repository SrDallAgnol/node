import { boasVindas, despedida, autorSistema } from './mensagens.js';

const usuario1 = "Mariana";
const usuario2 = "Lucas";

console.log("══════════════════════════════════════");
console.log(boasVindas(usuario1));
console.log(boasVindas(usuario2));
console.log("\n" + despedida(usuario1));
console.log(despedida("Visitante anônimo"));
console.log("══════════════════════════════════════");

console.log(`\nSistema desenvolvido por: ${autorSistema}`);