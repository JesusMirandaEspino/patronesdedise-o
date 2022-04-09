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

