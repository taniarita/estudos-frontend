//classe abstrata; não pode ser instanciada; só pode ser herdada;

class Conta {
    constructor(saldoInicial, cliente, agencia) {
       if(this.constructor == Conta) {
        throw new Error('Você não deveria instanciar um objeto do tipo Conta, pois é uma classe abstrata.');
       }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;
      }

      set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
          this._cliente = novoValor;
        }
      }
    
      get cliente() {
        return this._cliente;
      }
    
      get saldo() {
        return this._saldo;
      }
    
      //método abstrato
      sacar(valor) {
        throw new Error('!!!O método Sacar é abstrato!!!')
      }

      _sacar(valor, taxa) {
        const valorSacado = taxa * valor;  
        if (this._saldo >= valorSacado) {
          this._saldo -= valorSacado;
          return valorSacado;
        }

        return 0;
      }
    
      depositar(valor) {
        if (valor <= 0) {
          return; // early return: faz uma série de verificações do que não é desejado; se qualquer uma for vdd, para-se a execução da função no return; se qualquer uma passar quer dizer que tem-se as condições corretas;
        }
        this._saldo += valor;
      }
    
      transferir(valor, conta) {
        // pode-se receber um objeto como parâmetro de um método, no entanto, em js, qualquer alteração feita no objeto que está no método, vai se refletir no objeto original
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
      }
}

export{ Conta };