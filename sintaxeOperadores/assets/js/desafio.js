function desafio(a, b){
    let soma = a+b;
    let maior10;
    let maior20;
    let resposta;

    (soma>10)?maior10=true:maior10=false;
    (soma>20)?maior20=true:maior20=false;

    if(a>b){
        if (maior10){
            (maior20)?resposta="O numéro "+a+" é maior que "+b+" e sua soma é "+ soma+" que é maior que 20":resposta="O numéro "+a+" é maior que "+b+"e sua soma é "+ soma+", que é menor que 20 e maior que 10"; 
        } else {
            resposta="O numéro "+a+" é maior que "+b+" e sua soma é "+ soma+" que é menor ou igual que 10";
        }
    } else if (b>a) {
        if (maior10){
            (maior20)?resposta="O numéro "+a+" é menor que "+b+" e sua soma é "+ soma+" que é maior que 20":resposta="O numéro "+a+" é maior que "+b+"e sua soma é "+ soma+", que é menor que 20 e maior que 10"; 
        } else {
            resposta="O numéro "+a+" é menor que "+b+" e sua soma é "+ soma+" que é menor ou igual que 10";
        }
    } else {
        if (maior10){
            (maior20)?resposta="O numéro "+a+" é menor que "+b+" e sua soma é "+ soma+" que é maior que 20":resposta="O numéro "+a+" é maior que "+b+"e sua soma é "+ soma+", que é menor que 20 e maior que 10"; 
        } else {
            resposta="O numéro "+a+" é menor que "+b+" e sua soma é "+ soma+" que é menor ou igual que 10";
        }
    }

    console.log(resposta);
}

desafio(1,20);
