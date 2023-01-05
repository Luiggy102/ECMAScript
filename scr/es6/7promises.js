// bolleano random
let seCumplePromesa = Math.random() > .5;

const miPromesa = new Promise((res, rej) => {
    if (seCumplePromesa) {
        res('si se cumple promesa')
    } else {
        rej('no se cumple promesa')
    }
});

miPromesa
    .then(respuesta => console.log(respuesta))
    .catch(err => console.log(err))
