/* require acessa os módulos nativos ou externos do projeto */
const fs = require('fs');
const moment = require('moment');
/* Módulo próprio. Deve-se especificar extamente o nome da pasta para exportar */
const superHerois = require('./superHerois/super-herois');
console.log(superHerois);

let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf-8');
console.log(dados);

let data = moment().format('MMM do YY');
console.log(data);
