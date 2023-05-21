const {createMultiTable} = require('./helpers/multiplicador')
const {argv} = require('./config/yargs')
const color = require('colors')

console.clear();

const base = argv.base;
const isList = argv.listar;
const limit = argv.hasta;

createMultiTable(base, isList, limit)
    .then(output => console.log(output))
    .catch(err => {
        console.log(err);
        console.log(color.red(`Fallo de escritura`));
    });