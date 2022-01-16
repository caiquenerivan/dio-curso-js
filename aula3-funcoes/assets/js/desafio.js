/*
    - Crie uma função que recebe o array alunos e um número que irá representar a média final;
    - Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
    - Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/
const alunos = [
	{
		nome: 'João',
		nota: 5,
		turma: '1B',
	},
	{
		nome: 'Sofia',
		nota: 9,
		turma: '1B',
	},
	{
		nome: 'Paulo',
		nota: 6,
		turma: '2C',
	},
    {
		nome: 'Pedro',
		nota: 2,
		turma: '2C',
	},
];

function alunosAprovados(alunos, media){
    let aprovados = [];

    for(let i = 0;i<alunos.length;i++){
        const {nota, nome} = alunos[i];

        if(nota>=media){
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(alunosAprovados(alunos, 5));

/*
    - Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. 
    - Crie seus próprios objetos para esta atividade!
*/

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome:'Caique',
    idade:27
}
const pessoa2 = {
    nome:'Pedro',
    idade:42
}
const pessoa3 = {
    nome:'Caio',
    idade:24
}

console.log(calculaIdade.call(pessoa1, 20));
console.log(calculaIdade.apply(pessoa2, [49]));