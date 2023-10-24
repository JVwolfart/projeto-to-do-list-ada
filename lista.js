const fs = require("fs");

function salvaLista(tarefas){
    if (tarefas.length !== 0) {
      const conteudoArquivo = tarefas.join("\n");
      fs.writeFile("dados.txt", conteudoArquivo, (err) => {
          if (err) {
            console.error(err);
            return;
          }
      });
    }
}

function carregaLista() {
    try {
      const data = fs.readFileSync("dados.txt", 'utf8');
      const linhas = data.split('\n');
      return linhas;
    } catch (err) {
      return [];
    }
}


module.exports = {
    salvaLista,
    carregaLista
}