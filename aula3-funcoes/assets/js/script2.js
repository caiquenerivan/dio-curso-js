//Partes 3 e 4 da aula

//Loops

//for: loop dentro de elementos iteraveis

function dobraValor(arr){
    let dobrados=[];

    for (let  i=0; i< arr.length;i++){
        dobrados.push(arr[i]*2);
    }

    return dobrados;
}

let array = [2,4,6,89];

console.log(dobraValor(array));

//for...in: loop entre propriedades de um objato

function verificaObj(obj){
    for(prop in obj){
        console.log(prop);
    }
}

const user = {
    nome: 'Caique',
    idade: 27,
    cidade:  'São Paulo'
}

verificaObj(user)

//A primeira mostrou o titulo da propriedade

function verificaObj(obj){
    for(prop in obj){
        console.log(obj[prop]);
    }
}

verificaObj(user)

//Agora mostra os valores das propriedades

//For..of = loop entre estruturas iteráves(arrays, strings)

function logLetras(palavra) {
    for(letra of palavra){
        console.log(letra);
    }
}

logLetras("Caique");

function logNumeros(nums) {
    for(num of nums){
        console.log(num);
    }
}
const nums=[2,4,6.5,89*30];
logNumeros(nums);


//While: executa instruções até que a condição se torne falsa
/*
var num=0;

while (num<=5){
    console.log(num);

    num++;
}
*/
//DO..while: Igual o while, porém ele roda pelo menos uma vez

var num2 = 6;

do {
    console.log(num2);
    num2++;
} while (num2<5);

//This
// é uma referência de contexto



//Call: mostra ao qual objeto o his está se referindo

const pessoa={
    nome: 'Caique',
}


const animal={
    nome: 'Boleta',
}

function getNome(){
    console.log(this.nome);
}

getNome.call(animal);
getNome.call(pessoa);

//Com parâmetros

const numObj={
    num1: 50,
    num2: 59,
}

function soma2(a,b){
    console.log(this.num1 +this.num2 +a+b);
}

soma2.call(numObj, 5, 9);

//Apply: Parece com a call, com uma diferença que os parametros devem ser enviados dentro de um array


soma2.apply(numObj, [5, 9]);

//Bind: clona a estrutura da função e aplica o valos do objeto passado como parâmetro

const retornaNomes = function () {
    return this.nome;
};

let caique = retornaNomes.bind({nome:'Caique'});

console.log(caique());