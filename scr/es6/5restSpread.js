console.group("\n===== Asignación de desestructuración (destructuring) =============");
// DESEMPACAR DATOS EN DISTINTAS VARIABLES
// Extraer los valores de arrays o propiedades de objetos en distintas variables

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

// Ejemplo 1: llave-objeto

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

// Ejemplo 2: acceder a otros elementos de un arreglo que no sean los primeros

let moreFruits = ['Apple', 'Banana', 'Orange'];
let [,,fruit] = moreFruits;

console.log('\n');
console.log(fruit); /*arroja "Orange"*/



console.groupEnd();

console.group("\n========= Operador de propagación (spread operator)========== ");
// SEPERAR EL ELEMENTOS EN MUCHOS ARGUMENTOS

// Propagar los elementos de un iterable, ya sea un array o string utilizando tres puntos (...) dentro de un array.

// spread operator
let person = {
  name: 'Jhon',
  age: 22
};
let country = 'CA';

let data = { id: 1, ...person, country };
console.log(data);

// rest

// poner muchos argumentos
function sum(num, ...values) {
  console.log(values);
  return num + values[0]
}

console.log(sum( 10, 2, 3, 4)); // 12

// Ej 1: sum y array

let nums = [5,5,5];

function sumConSpread(a, b, c) {
  return a + b + c
}

console.log(sumConSpread(1, 1, 2));
// si se usa un array no coge
// undfined
//console.log(sumConSpread(nums));
// ... para separar en varios argumentos
console.log(sumConSpread(...nums)); // se separó en varios argumento!!!!

// Ej 2: varios argumentos

let largerNumbers = [230, 43566, 34, 3488];

// console.log(Math.max(largerNumbers)); // NaN == Not a number
console.log(Math.max(...largerNumbers)); // pasar como varios argumento

console.groupEnd();

