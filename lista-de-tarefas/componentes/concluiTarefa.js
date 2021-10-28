const BotaoConclui = () => {
  const botaoConclui = document.createElement("button");

  botaoConclui.classList.add("check-button");
  botaoConclui.innerText = "concluir";
  botaoConclui.addEventListener("click", concluirTarefa);

  return botaoConclui;
};

const concluirTarefa = (evento) => {
  const botaoConclui = evento.target; //a propriedade target ten a função de indicar qual é o alvo do evento, no caso é o botão de concluir a tarefa;

  const containerBotoes = botaoConclui.parentElement;
  const tarefaCompleta = containerBotoes.parentElement;

  tarefaCompleta.classList.toggle("done"); //o toggle executa a classe css a partir do clique do botão/ devolve um boolean;
};

export default BotaoConclui;
