class Miclase {
    constructor(pro1, pro2) {
        this.propiedad = pro1;
        this.propiedad = pro2;
    }
    metodo = () => {
        console.log('Hola Mundo');
    }
}

const instancia = new Miclase(4, 7);
console.log(instancia);
instancia.metodo();

// Prototipos

Object.prototype.mostrar = function() {
    console.log(this);
}

String.prototype.cortar = function() {
    try {
        return this.replace(/^\s+|\s+$/g, '');
    } catch (error) {
        return this;
    }
}

const x = {
    a: 1
};
const y = '    jajaja   '.cortar();
x.mostrar();
y.mostrar();