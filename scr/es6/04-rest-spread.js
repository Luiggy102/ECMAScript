// Asignación de desestructuración

// arrays destructuring

let fruits = ['Apple', 'Banana'];
let [a,b] = fruits;

// op 1
console.log(a,b);
// op 2
console.log(a, fruits[1])

// Object destructuring

let user = {
    username: 'Charles', 
    age: 20
};

let {username, age} = user
// op 1
console.log(username, user.age);
// op 2
console.log(username, age);
console.log('\n');

// Ejemplo 1

const cliente03 = {
  a: 'Ezequiel',
  b: 'Das',
  c: 'Av Rivadavia 1540',
  d: 'Centro',
  e: 1586902510
}

// Podemos asignar con qué key del objeto queremos que se guarde el valor de la variable sin importar el orden
const {c: address, a: names, b: lastname} = cliente03;

console.log (names);
console.log (lastname);
console.log (address);
