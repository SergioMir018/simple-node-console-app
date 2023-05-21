const { options } = require('yargs');

const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    default: 1,
                    describe: 'Es la base sobre al que se realiza la tabla de multiplicar'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)) {
                        throw 'La base tiene que ser un numero';
                    }
                    return true;
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla creada'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    default: 10,
                    describe: 'Establece hasta que multiplo se quiere la tabla'
                })
                .check((argv, options) => {
                    if (isNaN(argv.h)) {
                        throw 'El limite debe ser un numero';
                    }
                    if(argv.h < 0) {
                        throw 'El limite debe ser mayor a 0';
                    }
                    return true;
                })
                .argv;

module.exports = {
    argv
}