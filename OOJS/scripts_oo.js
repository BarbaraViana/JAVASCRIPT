class contaBanco {
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    get saldo() {
        return this._saldo
    }
    set saldo(valor) {
        this._saldo = valor;

    }
    saque(valor) {
        if (valor > this._saldo) {
            return "Operação Recusada"
        }
        this._saldo = this._saldo - valor;

        return this._saldo
    }

    deposito(valor) {
        this._saldo = this._saldo + valor;

        return this._saldo
    }
}

class contaCorrente extends contaBanco {
    constructor(agencia, numero, cartaoCredito) {
        super(agencia, numero);
        this.tipo = 'Corrente';
        this._cartaoCredito = cartaoCredito
    }


    get cartaoCredito() {
        return this._cartaoCredito;
    }
    set cartaoCredito(valor) {
        this._cartaoCredito = valor;


    }
}

class contaPoup extends contaBanco {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
        this._cartaoCredito = cartaoCredito
    }
}

class contaUniversit extends contaBanco {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'Universitária';
        this._cartaoCredito = cartaoCredito
    }
    saque(valor) {
        if (valor > 500) {
            return 'Operação Recusada';
        }

        this._saldo = this._saldo - valor;

    }
}