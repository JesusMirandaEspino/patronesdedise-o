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

