//Map: Uma coleção de arrays no format chave e valor
/*
const myMap = new Map();

myMap.set('apple', fruit); // seta um valor nop map

myMap.get('apple'); // pega um valor no map

myMap.delete('apple'); //deleta um valor no map
*/
//Map vs Object

/*
    - Maps podem ter chaves de qualquer tipo;
    - Maps possuem a propriedade length;
    - Maps são mais fáceis de iterar;
    - Utilizado quando o valor das chaves é desconhecido;
    - Os valores tem o mesmo tipo.
*/


// Set

const myArray = [1,1,2,2,3,4,5,6,7,8,2,1];

const mySet = new Set(myArray);


//Estrutura: sets são estruturas que que armazenam valores únicos

//Métodos

mySet.add(9);
console.log(mySet);

mySet.has(1);
mySet.has(11);
mySet.delete(1);
console.log(mySet);


//Set vs Array

/*
    - Set possui valores únicos;
    - Em vez da propriedade length, consulta-se os números pela propriedade size;
    - Não possui os métodos map, filter, reduce etc.
*/