import BotaoDeleta from "./componentes/deletaTarefa.js";
import BotaoConclui from "./componentes/concluiTarefa.js";

const criarTarefa = (evento) => {
  evento.preventDefault(); //pesquisar mais sobre isso aqui

  const lista = document.querySelector("[data-list]");
  const input = document.querySelector("[data-form-input]");
  const valor = input.value;

  const tarefa = document.createElement("li");
  tarefa.classList.add("task");
  const conteudo = `<p class="content">${valor}</p>`;

  tarefa.innerHTML = conteudo; //o conteúdo de tarefa é o mesmo conteúdo de p.

  input.setAttribute("required", "");
  
  const containerBotoes = document.createElement("div");
  containerBotoes.appendChild(BotaoDeleta());
  containerBotoes.appendChild(BotaoConclui());

  tarefa.appendChild(containerBotoes);
  lista.appendChild(tarefa);

  input.value = ""; //ao igualar o valor do input a uma string vazia, tem a função de fazer o campo do input ficar vazio após o clique no botão de criar nova tarefa.
  botao.disabled = true; //relacionado com a função verificaInput;

};

const novaTarefa = document.querySelector("[data-form-button]");
novaTarefa.addEventListener("click", criarTarefa);


const content = document.querySelector("[data-form-input]");
const botao = document.querySelector("[data-form-button]")
content.addEventListener("change", verificaInput); // "change" verifica toda vez que altera alguma coisa dentor do input;

botao.disabled = true;

function verificaInput() {
  if(content.value === "") {
    botao.disabled = true;
  } else {
    botao.disabled = false;
  }
}

