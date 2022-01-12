//operadores de atribuição

//= você atribui valor a uma variável
var x=y; // x recebe y
var y=23; // y recebe 0

console.log(x);

//+= voce soma duas variáveis
var z=2;
z+=y; //z é igual a z + y

console.log(z);

//*= voce multiplica duas variáveis
var a=5;
a*=y; //a é recebe a*y

console.log(a);

// /= voce divide duas variáveis
var b=46;
b/=y; //a recebe b=b/y

console.log(b);

// %= voce você pega a sobra da divisão entre dois números
var c=54;
c%=y; //a é recebe c=c%y

console.log(c);

// ** potenciação

var d = c**z;

console.log(d);

// == igual a 

console.log( c == a );//verifica se c é igual a a

// === igual em valor e tipo de dado

var e = "fala fiote";

console.log( c === e );//verifica se c é igual a a


// !== diferente em valor e tipo de dado

var e = "fala fiote";

console.log( c !== e );//verifica se c é igual a a

// && "e" lógico, você quer validar se as duas afirmações são verdadeiras
// || "ou" lógico, você quer validar se uma das afirmações são verdadeiras
// ! "não" lógico, você quer acessar os dados oposto ao valor booleano que temos


//Ifs ternário
var f = b;

(a!==b)? console.log("Diferente"):("igual"); 
//verifica se a é diferente de b, se sim dá a resposta "diferente", se não for diferente dá a resposta "igual"

(f===b)? console.log("Igual"):("Diferente");
//verifica se f é igual a b, se sim dá a resposta "igual", se não responde "diferente"

