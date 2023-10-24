const colors = require('colors');

function incluirTarefa(tarefas, novaTarefa){
    tarefas.push(novaTarefa);
    console.log("Tarefa '" + novaTarefa + "' incluída com sucesso!");
}

function alterarTarefa(tarefas, indice, novaTarefa){
    tarefas[indice] = novaTarefa;
    console.log("Tarefa '" + novaTarefa + "' alterada com sucesso!");
    
}

function excluirTarefa(tarefas, indice){
    let tarefaExcluida = tarefas.splice(indice, 1);
    console.log("Tarefa '" + tarefaExcluida[0] + "' excluída com sucesso!");
}

function exibirTarefas(tarefas){
    for (const t in tarefas) {
        console.log(`${t} - ${tarefas[t]}`.red);
    }
}

function buscaTarefaIndice(tarefas, indice){
    let tarefa = tarefas[indice];
    if (tarefa) {
        console.log(`Tarefa nº ${indice}: ${tarefa}`.cyan)
    } else {
        console.log("Índice não encontrado");
    }
}

function filtrar(tarefas, frase){
    let tarefasFiltradas =  tarefas.filter(tarefa => tarefa.toLowerCase().includes(frase.toLowerCase()));
    if (tarefasFiltradas.length > 0){
        console.log(`Segue abaixo todas as suas tarefas cadastradas que incluem o termo '${frase}': `.bgBlue);
        for (const t in tarefas) {
            if (tarefasFiltradas.includes(tarefas[t])){
                console.log(`${t} - ${tarefas[t]}`.yellow);
            }
        }
    } else {
        console.log(`Nenhuma tarefa encontrada com o termo '${frase}'`.red);
    }
}

module.exports = {
    incluirTarefa,
    alterarTarefa,
    excluirTarefa,
    exibirTarefas,
    buscaTarefaIndice,
    filtrar
}