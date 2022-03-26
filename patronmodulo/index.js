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