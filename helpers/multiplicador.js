const fs = require('fs');
const color = require('colors')

const createMultiTable = async(base, isList, limit) => {

    let output = '';

    for( let i = 0; i <= limit; i++) {
        output += `${base} * ${i} = ${base * i}\n`.yellow;
    }

    if (isList) {
        console.log('======================='.rainbow);
        console.log(`${'|'.rainbow}     ${`Tabla del ${color.red(base)}`.yellow}    ${'|'.rainbow}`);
        console.log('======================='.rainbow);
        console.log(output);
    }

    try {
        fs.writeFileSync(`./output/tabla-${base}.txt`, output);
        return `El archivo con la tabla del ${base} fue creado`.green;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createMultiTable
}