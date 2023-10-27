const prompt = require("prompt-sync")();
const colors = require('colors');
const {incluirTarefa, alterarTarefa, excluirTarefa, exibirTarefas, buscaTarefaIndice, filtrar} = require("./crud");
const { salvaLista, carregaLista } = require("./lista");
const readline = require('readline-sync');
const {execSync} = require('child_process');
var op;
try {
    var tarefas = carregaLista();
} catch (error) {
    var tarefas = [];
}

const boasVindas = `
        ${"###################### BEM VINDO A SUA LISTA DE TAREFAS! ####################".bgGreen.white}
`
console.log("Carregando a sua lista de tarefas...".yellow);
execSync("sleep 1");
console.log("Lista de tarefas carregada com sucesso".green);

const menu = `
        ${"*****************************************************************************".bgWhite.magenta}
        ${"********************         MENU DO SISTEMA         ************************".bgWhite.magenta}
        ${"*****************************************************************************".bgWhite.magenta}
        ${"Para acessar as funcionalidades do sistema, selecione uma das opções abaixo: ".black}
        ${"1 - Adicionar uma nova tarefa".green}
        ${"2 - Alterar uma tarefa".green}
        ${"3 - Excluir uma tarefa".green}
        ${"4 - Exibir todas as tarefas".green}
        ${"5 - Exibir uma tarefa".green}
        ${"6 - Filtrar tarefas".green}
        ${"99 - Sair do sistema".green}
            `

//console.log("############# BEM VINDO A SUA LISTA DE TAREFAS! #############".bgWhite);
console.log(boasVindas);

do {
    readline.question("Pressione ENTER para continuar ");
    console.log(menu);

    op = parseInt(prompt("O que você deseja fazer? ".grey));
    console.log();

    switch (op) {
        case 1:
            let novaTarefa = prompt("Digite a nova tarefa ".green);
            console.log();
            incluirTarefa(tarefas, novaTarefa);
            break;
        case 2:
            console.log("Segue abaixo todas as suas tarefas cadastradas: ".bgBlue);
            exibirTarefas(tarefas);
            let indiceAlterar = parseInt(prompt("Digite o índice da tarefa que deseja alterar ".cyan));
            console.log();
            let tarefaAnterior = tarefas[indiceAlterar];
            if (tarefaAnterior) {
                let tarefaAlterada = prompt("Digite a nova tarefa ".green);
                console.log();
                alterarTarefa(tarefas, indiceAlterar, tarefaAlterada);
            } else {
                console.log("Índice não encontrado");
            }
            break;
        case 3:
            console.log("Segue abaixo todas as suas tarefas cadastradas: ".bgBlue);
            exibirTarefas(tarefas);
            let indiceExcluir = parseInt(prompt("Digite o índice da tarefa que deseja excluir ".green));
            console.log();
            let tarefaExcluir = tarefas[indiceExcluir];
            if (tarefaExcluir) {
                let confirma = prompt(("ATENÇÃO! Você está prestes a excluir a tarefa '" + tarefaExcluir + "'! Deseja continuar? [S/N] ").yellow);
                console.log();
                if (confirma[0].toUpperCase() === "S"){
                    excluirTarefa(tarefas, indiceExcluir);
                }
            } else {
                console.log("Índice não encontrado");
            }
            break;
        case 4:
            console.log("Segue abaixo todas as suas tarefas cadastradas: ".bgBlue);
            exibirTarefas(tarefas);
            console.log();
            console.log();
            break;
        case 5:
            let indiceBusca = parseInt(prompt("Digite o índice da tarefa que deseja conferir ".green));
            console.log();
            buscaTarefaIndice(tarefas, indiceBusca);
            break;
        case 6:
            let frase = prompt("Informe a palavra pela qual você deseja filtrar: ");
            filtrar(tarefas, frase);
            break;
        case 99:
            console.log("Salvando suas tarefas...".blue);
            execSync('sleep 1');
            console.log("Tarefas salvas com sucesso".green);         
            readline.question("Pressione ENTER para sair do sistema ");
            break;
        default:
            console.log("Por favor selecione uma opção válida (apenas números de 1 a 6 ou 99 para sair)\n".red);
    }

} while(op !== 99);
if (tarefas.length !== 0){
    salvaLista(tarefas);
}

console.log("Até a próxima! Obrigado por usar nossa lista de tarefas".blue);
execSync("sleep 1");
console.log();
console.log("EQUIPE DE DESENVOLVEDORES".bgRed);
execSync("sleep 1");
console.log();
console.log("João Vitor Wolfart");
execSync("sleep 1");
console.log("Priscilla de Araújo");
execSync("sleep 1");
console.log("Pietra Almeida");
execSync("sleep 1");
console.log();
console.log();
console.log();
console.log("Turma 1090 Vem Ser Tech Back End - Ada iFood".bgGreen);
console.log();
console.log();
console.log();