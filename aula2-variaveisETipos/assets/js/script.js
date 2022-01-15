//var é para o escopo global
//let registra uma variável num escopo de bloco

var a = 10;
var b = 5;

if(a===10){
    var a = 1;
    let b = 10;

    console.log(a);
    console.log(b);
}


console.log(a);
console.log(b);

/* variavel b apareceria com dois valores diferentes 
pois a let só funciona dentro do if */

/* const é uma variavel que não pode ser alterada, escopo de bloco,
declarada com letra maíuscula e separada por underline _*/

const FIRST_NAME = "Caique";


// typeof
console.log(typeof FIRST_NAME);


//Strings

let nome = "Caique";
let sobrenome = "Nerivan";

let fullName = `Nome Completo: ${nome} ${sobrenome}`

console.log(fullName);

//split separa os argumentos da frase,serve para pegar uma palavra, letra da frase

let frase = "Hello, Peter!";

console.log(frase.split(""));
console.log(frase.split(" "));


