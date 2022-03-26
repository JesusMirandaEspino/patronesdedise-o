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