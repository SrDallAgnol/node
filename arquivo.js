const fs = require('fs');

function criarArquivo(nome, conteudo) {
    try {
        fs.writeFileSync(nome, conteudo, 'utf-8');
        console.log(`Arquivo "${nome}" criado com sucesso!`);
    } catch (erro) {
        console.error('Erro ao criar arquivo:', erro.message);
    }
}

function lerArquivo(nome) {
    try {
        const conteudo = fs.readFileSync(nome, 'utf-8');
        return conteudo;
    } catch (erro) {
        console.error('Erro ao ler arquivo:', erro.message);
        return null;
    }
}

module.exports = {
    criarArquivo,
    lerArquivo
};