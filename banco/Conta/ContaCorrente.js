import { Conta } from "./Conta.js";

class ContaCorrente extends Conta {
  static numeroDeContas = 0; // faz a qdd de contas ser alterada em todas as contas, não só dentro da instância.

  constructor(cliente, agencia) {
    super(0, cliente, agencia);
    ContaCorrente.numeroDeContas += 1;
  }

  //sobrescrevendo o comportamento de sacar
  sacar(valor) {
    let taxa = 1.1;
    return this._sacar(valor, taxa);
  }
}

export { ContaCorrente };
