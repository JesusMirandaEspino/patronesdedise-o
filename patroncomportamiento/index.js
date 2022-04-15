// Observador



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