// mixin

let mixin = {
    saludar(){
        console.log( `Hola ${this.nombre}` );
    },

    despedir(){
        console.log( `Ten un buen dia ${this.nombre}` );
    }
}

class Usuario {
    constructor( nombre ){
        this.nombre = nombre;
    }
}

Object.assign( Usuario.prototype, mixin );

const user = new Usuario('Jesus');

user.saludar();


// Decorador
class MacBook {
    precio(){
        return 1000;
    }
}

const memoria = mac => {
    const v = mac.precio;

    mac.precio = () => {
        return v + 100;
    }

}

const macbook = new MacBook();
console.log(macbook.precio);
memoria( macbook );
console.log(macbook.precio);


// Facade

const https = require('http');



const get = url = new Promise( (resolve, reject) => {
    const comp = url.splice('/');
    const host = comp[0];
    const options = {
        hostname: host,
        path: `/${comp.join('/')}`,
        method: 'GET'
    }


    const req = https.request(options, res => {
        res.setEncoding('utf8');
        let body = '';
        res.on( 'data', d => {
            body += d;
        });

        res.on( 'end', d => {
            const parsed = JSON.parse(body);
            resolve(parsed);
        });
    });

    req.on( 'error', (e) => {
        reject(e);
    });

    req.end();
});



class Api2 {
    constructor(){
        this.get = (url, opts) => {
            //  code function
        };
        this.post = (url, opts) => {
            //  code function
        };
    }
}


// adaptador

class ApiAdapter {

    constructor(){
        const api2 = new Api2();

        this.operations = ( url, opts, verb ) => {
            switch( verb ){
                case 'get':
                    return api2.get( url, opts );
                case 'post':
                    return api2.post( url, opts );
                default: return;
            }
        }
    }
    
}