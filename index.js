const chalk = require('chalk');
const fs = require('fs');
const { text } = require('stream/consumers');

function tratarErro(erro) {
    throw new Error(chalk.red(erro.code, 'arquivo não encontrado'));
}

//async/await com tratamento de erros try..catch
async function pegaArquivo(caminho) {
    const encoding = 'utf-8';
    try {
        const texto = await fs.promises.readFile(caminho, encoding);
        console.log(chalk.green(texto));
    } catch (error) {
        tratarErro(error);
    }        
}

//Promisse
/*function pegaArquivo(caminho) {
    const encoding = 'utf-8';
    fs.promises
        .readFile(caminho, encoding)
        .then(texto => console.log(chalk.green(texto)))
        .catch(erro => tratarErro(erro))
}*/

//Sem promisse
/*function pegaArquivo(caminho) {
    const encoding = 'utf-8';
    fs.readFile(caminho, encoding, (erro , texto) => {
        if (erro) {
            tratarErro(erro);
        }
        console.log(chalk.green(texto));
    })
}*/

pegaArquivo('./arquivos/texto1.md');