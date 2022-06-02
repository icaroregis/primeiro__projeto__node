const fs = require('fs');
const path = require('path');

const caminhoArquivo = path.join('prova.txt');

/* escrever dentro dos arquivos */
/* sobescreve os dados toda vez que é executado */
fs.writeFileSync(caminhoArquivo, 'Prova 1');

/* inclui mas informações sem excluir as anteriores */
fs.appendFileSync(caminhoArquivo, 'Prova 2');
