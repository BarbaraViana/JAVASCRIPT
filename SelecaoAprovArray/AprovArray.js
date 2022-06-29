const alunos = [{
        nome: 'Barbara',
        nota: 5,
        tuma: '5E'
    },
    {
        nome: 'Paulo',
        nota: 10,
        turma: '7D',
    },
    {
        nome: 'Gigi',
        nota: 8,
        tuma: '1A'
    },
    {
        nome: 'Liquinho',
        nota: 3,
        tuma: '2A'
    },

];

function AlunosAprov(arr, media) {
    let aprovados = [];

    for (let i = 0; i < arr.length; i++) {

        const { nota, nome } = arr[i];

        if (nota >= media) {
            aprovados.push(nome);
        }

    }
    return aprovados;
}

console.log(AlunosAprov(alunos, 5));