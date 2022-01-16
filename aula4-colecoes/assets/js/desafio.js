/*

    Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

    - Crie uma função getAdmins que recebe um Map;
    - Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
    - Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

*/

function getAdmins(map){
    let ademirs = [];

    for([key, value] of map){
        if(value === 'ademir'){
            ademirs.push(key);
        }
    }

    return ademirs;
}

const users = new Map();

users.set('Caique', 'ademir');
users.set('Milhaça', 'ademir');
users.set('Bola', 'ademir');
users.set('Adailton', 'peao');

console.log(getAdmins(users));

//Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

const myArray2 = [30, 30, 40, 5, 223, 2049, 3034, 5];

const mySet2 = new Set(myArray2);

console.log([...mySet2]);