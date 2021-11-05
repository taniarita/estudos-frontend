/* função que faz a verificação no localStorage para ver se determinada data já foi inserida; 
o indexof faz a verificação e filtra as datas repetidas para que elas não sejam mais exibidas na tela */

const removeDatasRepetidas = (datas) => {
  const datasUnicas = [];
  datas.forEach((data) => {
    if (datasUnicas.indexOf(data.dataFormatada) === -1) {
      datasUnicas.push(data.dataFormatada);
    }
  });
  return datasUnicas;
};

/* algoritmo de ordenação que utiliza o método sort para colocar as datas (e respectivas tarefas) em ordem crescente */

const ordenaDatas = (data) => {
  data.sort((a, b) => {
    const primeiraData = moment(a, "DD/MM/YYYY").format("YYYYMMDD");
    const segundaData = moment(b, "DD/MM/YYYY").format("YYYYMMDD");
    return primeiraData - segundaData;
  });
};

export { removeDatasRepetidas, ordenaDatas };
