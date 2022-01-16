//Parte 5 (final)

//Arrow Functions
//é como se fosse uma abreviação de uma função
//precisa ser feita dentro de uma const
//Se for uma linha, pode dispensar as chaves e o return
//caso exista apenas um parâmetro, pode dispensar os parênteses 

//Sintaxe

const helloWorld = () => {
    return "Hello world";
}

//ou

const helloWorld2 = () => "Hello world";
const soma1 = (a, b) => a+b;
const soma2 = a => a;

console.log(helloWorld);
console.log(helloWorld2);
console.log(soma1(2,5));
console.log(soma2(6));



//Restrições

//não faz hoisting
//"this" sempre será o objeto global. 
//Métodos para modificar seu valor não irão funcionar(call, bind, aplly)
//não existe objeto "arguments"
//Não pode ser utilizado constructor(ex: new meuObj())