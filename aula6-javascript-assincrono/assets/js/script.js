//Assincronicidade
//Algo que não ocorre ou não se efetiva ao mesmo tempo

//Promises

//Objeto de processamento assíncrono
//Inicialmente, seu valor é desconhecido. 
//Ela pode, então ser resolvida ou rejeitada

// Tem tres estados
//Pending, pendente
//Fulfilled, completo
//Rejected, rejeitado
//Async e await
//Funções assíncronas precisam dessas duas palavras chave.


async function resolvePromise(){
    const myPromise = new Promise((resolve, reject)=>{
        window.setTimeout(() => {
            resolve(console.log('Resolvida'));
        }, 2000);
    });

    const resolved = await myPromise
        .then((result) => result+' passando pelo then')
        .then((result) => result+' e agora acabou!')
        .catch((err) => console.log(err.message));

    return resolved; 
}

console.log(resolvePromise());

//Consumindo APIs

//API e Fetch
/*
    API(Application Programming Interface) é uma forma de intermediar os 
resultados do back-end com o que é apresentado no front-end
*/

/*
    É acessadoa por meio de URLs
*/

//JSON (Javascrip Object Notation)

/*
    É muito comum que APIs retornem seus dados no formato .json, 
portanto precisamos tratar esses dados quando os recebermos.

*/

//Fetch

/*
fetch(url, options)
    .then(response => response.json())
    .then(json => console.log(json));
*/


//Operações no banco(POST, GET, PUT, DELETE, etc)


/*
fetch('http://endereco-api.com/', {
    method: 'GET',
    catch: 'no-cache',
})
    .then(response => response.json())
    .then(json => console.log(json));
*/



/*
fetch('http://endereco-api.com/', {
    method: 'POST',
    catch: 'no-cache',
    body:JSON.stringify(data)
})
    .then(response => response.json())
    .then(json => console.log(json));

*/


