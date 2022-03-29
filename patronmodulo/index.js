const modulo1 = {
    prop: 'mi prop',
    config: {
        languaje: 'es',
        cache: true
    },
    setConfig: conf => {
        modulo1.config = conf;
    },
    isEnableCache: () => {
        return (modulo1.config.cache) ? 'si' : 'no';
    }
}

// Modulo revelador

const resultado = (() => {
    const x = {};
    return {
        a: () => { console.log(x) },
        b: (key, val) => { x[key] = val }
    }
})();

resultado.a();
resultado.b('queso', 'cabra');
resultado.a();

const user = (() => {
    const recurso = '/user';
    return {
        listar: async() => {
            return await fetch(recurso).then(x => x.json);
        },
        crear: async(data) => {
            return await fetch(recurso, {
                    type: POST,
                    body: JSON.stringify(data)
                })
                .then(x => x.json);
        }
    }
})();


const perro = {
    raza: 'Perro loco',
    ladrar: function() {
        console.log(`hola soy un ${perro.raza}`);
    }
}

const killman = Object.create(perro);

killman.ladrar();
killman.raza = 'Super perro';
killman.ladrar();