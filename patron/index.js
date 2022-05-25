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


