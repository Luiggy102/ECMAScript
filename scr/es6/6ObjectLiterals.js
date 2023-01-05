// forma antigua

function oldUser(user, age, country) {
    return {
        user: user,
        age: age,
        country: country
    }
}

// forma nueva

function newUser(user, age, country, uId = 0000) {
    // si el mismo nombre que pasamos va a regresar, no hace falta poner de nuevo
    return { user, age, country,
        id: uId 
    }
}

const Lud = new newUser('Lud', 18, "US", 123)

let {user: usuario, age: edad} = Lud;

console.log(usuario, edad);
