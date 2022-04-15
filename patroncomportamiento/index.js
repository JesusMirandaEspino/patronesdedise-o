// Observador

const { listeners } = require("process");

const user = new user();

const init = () => {
    user.on( 'login', userLoggedIn );
    user.on( 'login', retrieveinit );
}

const userLoggedIn = () => {
    // code
}

const retrieveinit = () => {
    // code
}

app.init();

const login  = () => {

    user.trigger('login');
}

login();


// Mediador
const emiter = ( () => {
    const topic = {};
    const hOp = topic.hasOwnProperty; 
    return {
        on: (topic, _listeners) => {
            if( !hOp.call(topic, topics ) ) topics[topic] = [];
            topics[topic].push(_listeners);
        },
        emmit: ( topic, info ) => {
            if( !hOp.call(topic, topics ) ) return
            topics[topic].forEach(item => {
                item(info != undefined ? info : {})
            })
        }
    }
})();


emiter.on( 'hola', x => console.log(x) );
emiter.emit('event', { hola: 'hola' });