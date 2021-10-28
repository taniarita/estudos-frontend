const BotaoDeleta = () => {
  const botaoDeleta = document.createElement("button");

  botaoDeleta.classList.add("delete-button");
  botaoDeleta.innerText = "deleta";
  botaoDeleta.addEventListener("click", deletarTarefa);

  return botaoDeleta;
};

const deletarTarefa = (evento) => {
  const botaoDeleta = evento.target;

  const containerBotoes = botaoDeleta.parentElement;
  const tarefaCompleta = containerBotoes.parentElement;
  tarefaCompleta.remove();

  return botaoDeleta;
};

export default BotaoDeleta;
