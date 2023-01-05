//En este deafío recibirás dos objetos JSON por parámetros.
//Usando el spread operator, deberás combinar ambos objetos en uno solo. Es posible que no se te envíe alguno de los dos objetos o ninguno, por lo que deberás usar estos por defecto, en su respectivo orden:

//JSON 1:
let json1 = {
    name: "Mr. Michi",
    food: "Pescado"
};
//JSON 2:

let json2 = {
    age: 12,
    color: "Blanco"
}

//

function juntarDosJson(js1 = {name: 'Mr. Michi', food: 'Pescado'},
                        js2 = {age: 12, color: 'Blanco'}) {
    return {...js1, ...js2}
}

console.log(juntarDosJson());

let JsonDemo = {
    name: "Bigotes",
    food: "Pollito"
}

console.log(juntarDosJson(JsonDemo));
