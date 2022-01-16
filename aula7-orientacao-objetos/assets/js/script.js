//Orientação a objetos

//Paradigmas
//São as formas de se programar
//Existem dois paradigmas na programação
/*

    Imperativo(Procedural, Orientado a objetos e parallel processing)


*/

/*
    Declarativo(lógica, funcional, database)
*/

//Orientação a objeto

/*

    Os programas são objetos que possuem uma série de propriedades.

    Pilares:

    - Herança
    - Polimorfismo
    - Encapsulamento
    - Abstração

*/

//Abstração

/*

    Processo mental que consiste em isolar um aspecto determinado de um 
estado de coisas relativamente complexo, a fim de simlificar a sua avaliação,
classificação ou para permitir a comunicação do mesmo.
    Abstrair é generalizar e simplificar cada vez mais

*/


//Herança

/*

    É você ter objetos filhos que herdam propriedades e métodos
    do objeto pai, mas também tem seus próprios métodos e propriedades.

*/

//Encapsulamento

/*

    Cada classe tem propriedades e métodos independentes do restante
    do código.
    Uma propriedade pertence a uma classe e não influencia o restante do código

*/

//Polimorfismo

/*

    Objetos podem herdar a mesma classe pai, mas se comportarem de forma 
    diferente quando invocamos seus métodos.

*/

//OOJS (oriented object JavaScript)

//Protótipos

/*

    Todos os objetos JS herdam propriedades e métodos de um prototype.
    O objeto Object.prototype está no topo desta cadeia

*/


//Classes

/*

    Não existe nativamente.
    É uma syntatic sugar: uma sintaxe feita para facilitar a escrita.
    Todas as classes são objetos e a herança se dá por protótipos.

*/

class Meal{
    constructor(food) {
        this.food=food;
    }

    eat(){
        return 'bora cume';
    }
}

class Animal{
    constructor(type='animal'){
        this.type = type;
    }

    get type(){
        return this._type;
    }

    set type(val){
        this._type = val.toUpperCase();
    }

    makeSound(){
        console.log('Fazendo um barulho de animal.');
    }
}

let a = new Animal();
console.log(a.type);

class Cat extends Animal {
    constructor(){
        super('cat');
    }

    makeSound(){
        super.makeSound();
        console.log('miau');
    }
}

let b = new Cat();

console.log(b.type);
console.log(b.makeSound());