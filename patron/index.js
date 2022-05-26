const expres = require('express');
const axios = require('axios');
const { get } = require('./handler');
const app = express();
const port = 3000;

app.get('/', get(axios) );


app.listen( port, (  ) => { console.log('ejemplo') });




// IIFE
const resultados12 = (()=>{
    const x = 'hola';
    console.log(x);
})()


const saludar = name => console.log( `hola soy ${name}` );
const despedirse = nombre => console.log( `nos vemos ${nombre}` );

class Persona {
    constructor(){
        this.nombre = 'Jesus';
        this.otro = 'Mutuelo';
    }

    saludar(){
        saludar(this.nombre);
    }

    despedir(){
        despedirse(this.otro);
    }
}


const personajes = {
    a: 1
}

personajes.c = 3;

const personajes2 = { ...personajes, b: 2 }

