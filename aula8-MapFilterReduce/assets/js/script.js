//Desfio Map

/*
    Pratique a sintaxe de multiplicação de números, 
    uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.
*/

const apple = {
    value: 2,
}
const orange = {
    value: 3,
}


function mapThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1,2];

console.log('this -> maçã', mapThis(nums, apple));
console.log('this -> orange', mapThis(nums, orange));

function mapNotThis(arr){
    return arr.map(function(item){
        return item *2;
    });
}

const nums2 = [2,4,6,8,10];

console.log(nums2);
console.log(mapNotThis(nums2));

//Desafio Filter

/*
    Filtre e retorne todos os números pares de um array.
*/

function filtraPar(arr){
    return arr.filter(callback);
}

function callback(item){
    return item%2===0;
}

const meuArray = [1,23,55,68,30,2,3,4];

console.log(filtraPar(meuArray));


//Desafio Reduce

/*
    1 - Some todos os números de um array
    2 - Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. Calcule 
    qual será o saldo final após subtrair todos os preços da lista enviada.
*/

// 1

function soma(arr){
    return arr.reduce(function(prev, current){
        console.log({prev});
        console.log({current});
        return prev+current;
    });
}

const arr = [1,2,65,4,6];

console.log(soma(arr));

//2

const lista = [
    {
        nome: 'sabao em po',
        preco: 25,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        nome: 'toalha',
        preco: 20,
    },
];

const saldoDisponivel = 100;

function consultaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada ', index);
        console.log({prev});
        console.log({current});
        return prev-current.preco;
    }, saldoDisponivel);
}

console.log(consultaSaldo(saldoDisponivel, lista));