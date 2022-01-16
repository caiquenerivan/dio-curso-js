/* verificar palíndromo
*/
function palindromo(palavra){

}


/* Trocar todos os elementos pares de um array que são diferentes de 0 por 0
*/

function trocaPar(arrayNum){
    for(var i=0; i<arrayNum.length;i++){
        if(arrayNum[i]%2===0){
            arrayNum[i]=0;
        }
    }

    return arrayNum;
}