const f = (ruta, cb) = () => {
    const resultado = computacionPesada();
    cb(resultado);
}

const user = [
    { edad: 12, nombre: 'Ramo', apellido: 'ramo' },
    { edad: 34, nombre: 'Yisus', apellido: 'Miranda' },
    { edad: 31, nombre: 'miriaom', apellido: 'ponce' },
    { edad: 2, nombre: 'Bebe', apellido: 'baby' },
];

const manejaResultado = (resultado) => {
    // code
}

f('/user', manejaResultado);


const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const filtrar = f => xs => xs.filter(f);
const head = xs => xs[0];
const formateo = x => ({
    nombre: `${x.nombre} ${x.apellido}`,
    edad: x.edad
});
const ImprimirInfante = x => `El nombre del infante es ${x.nombre}, y su edad es de ${x.edad} años`;

const traeElPrimerInfante = compose(
        ImprimirInfante,
        formateo,
        head,
        filtrar(x => x.edad < 5)
    )
    // prueba ImprimirInfante(formateo(head(data.filter(x => x.edad < 5))));





// currying
const suma = a => a => a + b;
const suma1 = suma(1);
suma1(5);

suma(1)(5);