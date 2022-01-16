//Partes 1 e 2 da aula


//função anonima, ela não tem nome e pode ser armazenada em uma variável.

const soma = function(a, b){
    return a+b;
}

console.log(soma(20, 30));

//função autoinvocável, ela é chamada entre parenteses, seguida por outro parênteses que representa sua chamada.


console.log((
    function(){
        let name = "Caique Nerivan"

        return name;
    }
)());

//Também pode ser usada com parâmetros e/ou armazenada em uma variável

const soma2 = (
    function(a, b){
        return a+b;
    }
)(2, 3);

console.log(soma2);

//Callbacks = função passada como argumento para outra
//Utilizando callbacks você tem maior controle da ordem de chamadas

const calc = function(operacao, num1, num2){
    return operacao(num1, num2);
}

const somar = function(num1, num2){
    return num1+num2;
}

const sub = function(num1, num2){
    return num1-num2;
}

const resultSoma = calc(somar, 10, 20);
const resultSub = calc(sub, 40, 20);

console.log(resultSoma);
console.log(resultSub);

//arguments = ele verifica todos os parâmetros que foi passado para função, 
//sem necessáriamente passar eles quando declara a função.

function findMax(){
    let max = -Infinity;

    for (let i=0; i<arguments.length;i++){
        if(arguments[i]>max){
            max=arguments[i];
        }
    }

    return max;
}

console.log(findMax(1,59,-30,55,90,805));

function showArgs() {
    return arguments;
}

console.log(showArgs(5, 3, 4, [2,5,63], "Fala Fiote"));

//Tratar arrays
//Spread: uma forma de lidar separadamente com elementos usando 'três pontinhos'...
//que são utilizados quando vamos chamar a função

function somando(x,y,z){
    return x+y+z;
}

const numbers = [1,2,3];

console.log(somando(...numbers));

//Rest: combina os elementos em um array
//Transforma elementos separados em um array
//Utiliza três pontinhos ... na declaração da função

function confereTamanho(...args){
    console.log(args.length);
}

confereTamanho();
confereTamanho(2,5);
confereTamanho(2,88,5,6);

//Objetos
//Object destructuring: desestrutura os objetos para utilizar só os dados que eu preciso do objeto

const user = {
    id: 32,
    displayName: 'cn94',
    fullName:{
        firstName: 'Caique',
        lastName: 'Nerivan'
    }
};


function getID({id}){
    return id;
}

function getName({fullName: {firstName: first, lastName: last} }){
    return `${first} ${last}`;
}

console.log(getID(user));
console.log(getName(user));