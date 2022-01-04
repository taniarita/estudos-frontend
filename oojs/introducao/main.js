/* 
Conceitos: Classes | atributos | operador new | instancia | Objeto | métodos (encapsulamento)|
atributo privado _ (convenção da comunidade) | early return | módulos | composição de classes |
get e set | 
*/

import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./Conta/ContaCorrente.js";
import { ContaPoupanca } from "./Conta/ContaPoupanca.js";
import { ContaSalario } from "./Conta/ContaSalario.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

//instanciando e chamando objetos cliente e contas
const cliente1 = new Cliente("Tânia", 5122142980); //chamando o construtor

const contaCorrente1 = new ContaCorrente(cliente1, 6523);
contaCorrente1.depositar(500);
contaCorrente1.sacar(100);

const contaPoupanca = new ContaPoupanca(50, cliente1, 6523);
contaPoupanca.sacar(10);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

//instanciando e chamando objeto funcionarios
const diretor = new Diretor("Luana", 8000, 658974123);
diretor.cadastrarSenha("1234567");
const gerente = new Gerente("Luiza", 5000, 245698713);
gerente.cadastrarSenha("7654321");
const cliente2 = new Cliente("Ana", 654789321, "123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "1234567");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "7654321");
const clienteEstaLogado = SistemaAutenticacao.login(cliente2, "123");

console.log("--------------------CONTAS--------------------");
console.log(contaSalario);
console.log(contaCorrente1);
console.log(contaPoupanca);
console.log("--------------------LOGIN---------------------");
console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
