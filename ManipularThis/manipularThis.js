function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pess1 = {
    nome: 'Maria',
    idade: 25,
};

const pess2 = {
    nome: 'José',
    idade: 30,
};
const pet = {
    nome: 'Liquinho',
    idade: 7,
    tipo: 'Frajola',
};

//console.log(calculaIdade.call(pet, 5))

console.log(calculaIdade.apply(pet, [5])) //no apply as infomaçoes são enviadas entre colchetes