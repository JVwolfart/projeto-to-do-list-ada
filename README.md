# projeto-to-do-list-ada

## Lógica de Programação - Projeto final
### O que?
Desenvolver, utilizando os conceitos abordados ao longo do módulo, uma aplicação de lista de tarefas (ToDo List).

### Requisitos
Dentre as funcionalidades, espera-se que seja possível:

- Adicionar uma tarefa
- Editar uma tarefa salva
- Remover uma tarefa salva
- Listar todas as tarefas salvas
- Obter uma tarefa, através de um parâmetro (id)

  
### Observações
Não haverá a persistência das tarefas em banco de dados. Para isso, podem utilizar um array para armazenar a lista das tarefas cadastradas.

## Como desenvolvemos o nosso projeto

Apesar de não haver o requisito de ter um banco de dados, nosso grupo optou por salvar as tarefas em um arquivo texto simples para poder persistir os dados quando o sistema fosse encerrado.

Portanto, ao iniciar o sistema, a primeira coisa que o programa faz é carregar os dados do arquivo texto para dentro do array.

Após isso, o sistema carrega um menu com as opções, de acordo com o solicitado no escopo do projeto. Além das opções solicitadas no escopo, optamos por incluir uma opção extra de listar tarefas por um termo informado pelo usuário.

Também incluímos no menu, uma opção para sair do sistema, que quando selecionada, o programa vai salvar a lista de tarefas no arquivo texto, para assim persistir os dados e as alterações feitas durante a execução.

Após isso, o programa irá emitir uma mensagem de encerramento, e dar os créditos aos desenvolvedores.
