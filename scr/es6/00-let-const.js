let fruit = 'Apple';
fruit = 'kiwi'

//console.log(fruit);

const animal = 'dog';
//animal = 'cat'
//console.log(animal);

const fruits = () => {
    if (true) {
        var fruit1 = 'Apple' // scope funcion
        let fruit2 = 'kiwi' ; // scope  block (solo if)
        const fruit3 = 'Banana'; // scope block (solo if)
        console.log(fruit2);
        console.log(fruit3);
    }
    console.log(fruit1);
    //console.log(fruit2);
    //console.log(fruit3);
};

fruits()

