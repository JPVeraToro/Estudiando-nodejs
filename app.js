// require
//const fs = require('express');
//const fs = require('./fs');
const colors = require('colors');
const { crearArchivo } = require('./multiplicar/multiplicar')

let comando = 9;
//console.log(process.argv);
let argv = process.Argv;
let parametro = argv[2];
let base = parametro.split('=')[1]
    //console.log(base);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e));