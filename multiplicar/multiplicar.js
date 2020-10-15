const fs = require('fs');


crearArchivo = (base) => {

    return new promise(() => {

        if (!Numero(base)) {
            reject('el valor base no es un número')
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += `${base } * ${ i } = ${ base * i }\n`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt `);


        });

    });
}

module.exports = {
    crearArchivo
}