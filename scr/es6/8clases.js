// declarando
class user {
    
}

// instarcia
const newUser = new user();

//class User {
    //// metodos
    //saludo(){
        //return 'Hallo'
    //}
//}

//const lud = new User();
//console.log(lud.saludo());

// contructor

class User {
    // inicializa los elementos cuando son asignados con new
    // siempre se ejecuta
    constructor(){
        console.log('Nuevo usuario!');
    }
    saludo(){
        return 'Hallo'
    }
}

const david = new User();
