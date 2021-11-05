import BotaoDeleta from "./deletaTarefa.js";
import BotaoConclui from "./concluiTarefa.js";
import { carregaTarefa } from "./carregaTarefa.js";

/*  Função que recebe os dados dos inputs/pega os dados que o usuário preenche e salva no localStorage  */
const handleNovoItem = (evento) => {
  evento.preventDefault();

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []; //pega itens do localStorage; pega as strings e transforma em objeto novamente;
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const calendario = document.querySelector("[data-form-date]");
  const data = moment(calendario.value);
  const horario = data.format("HH:mm");
  const dataFormatada = data.format("DD/MM/YYYY");
  const concluida = false;

  const dados = {
    valor,
    dataFormatada,
    horario,
    concluida,
  };

  const tarefasAtualizadas = [...tarefas, dados];

  localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas)); //coloca itens no localStorage, que só aceita string;

  input.value = ""; //ao igualar o valor do input a uma string vazia, tem a função de fazer o campo do input ficar vazio após clicar no botão de criar nova tarefa.
  botao.disabled = true; //relacionado com a função verificaInput;
  carregaTarefa();
};

/*  Componente responsável pela criação da tarefa, função que vai montar como os dados do localStorage serão exibidos na tela  */
const Tarefa = ({ valor, horario, concluida }, id) => {
  const tarefa = document.createElement("li");
  const conteudo = `<p class="content">${horario} - ${valor}</p>`;

  if (concluida) {
    tarefa.classList.add("task");
    tarefa.classList.add("done");
  } else {
    tarefa.classList.add("task");
  }

  tarefa.innerHTML = conteudo; //o conteúdo de tarefa é o mesmo conteúdo de p.

  const containerBotoes = document.createElement("div");
  containerBotoes.appendChild(BotaoDeleta(carregaTarefa, id));
  containerBotoes.appendChild(BotaoConclui(carregaTarefa, id));
  tarefa.appendChild(containerBotoes);

  return tarefa;
};

/*  Função que impede que se crie uma nova tarefa caso nada seja digitado no input  */
const content = document.querySelector("[data-form-input]");
const botao = document.querySelector("[data-form-button]");
content.addEventListener("change", verificaInput); // "change" verifica toda vez que altera alguma coisa dentor do input;

botao.disabled = true;

function verificaInput() {
  if (content.value === "") {
    botao.disabled = true;
  } else {
    botao.disabled = false;
  }
}

export { handleNovoItem, Tarefa };
