# Documentação da Aplicação Web de Lista de Tarefas
# Visão Geral

Esta aplicação web permite aos usuários adicionar e gerenciar uma lista de tarefas. Os itens da lista podem ser alterados assim que você clica neles, indicando que a tarefa foi concluída. Esta aplicação utiliza HTML, CSS e JavaScript com jQuery para a implementação.

# Funcionalidades

## Adicionar Tarefa

- O usuário pode adicionar uma nova tarefa preenchendo o campo de texto e clicando no botão "Cadastrar".
- A nova tarefa é adicionada à lista e exibida na página.

## Ocultar/Mostrar Lista de Tarefas
- O container da lista de tarefas (`task-list-container`) é ocultado inicialmente.
- Quando uma tarefa é adicionada, o container é exibido.

## Riscar Tarefas
- Ao clicar em um item da lista, ele fica riscado, indicando que a tarefa foi concluída.
- Um novo clique no item remove o riscado.

# Tecnologias Utilizadas
- HTML
- CSS
- JavaScript

## Como Usar

1. Clone o repositório:
    ```bash
    git clone https://github.com/Kleberzito/M9_Lista_de_Tarefas.git 
    ```

2. Navegue até o diretório do projeto:
    ```bash
    cd seu-repositorio
    ```

3. Abra o Arquivo HTML: Abra o arquivo `index.html` em um navegador web.
4. Adicionar Tarefa: Preencha o campo "Nome da tarefa" e clique em "Cadastrar".
5. Clique em um item da lista para riscar ou remover o riscado.
6. A lista de tarefas ficará oculta se não houver itens na lista de tarefas.

Esta aplicação serve como um exemplo simples para entender a manipulação do DOM, uso de eventos e manipulação de estilos com CSS.

## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:
```plaintext
.
/project-root
    |-- index.html
    |-- main.css
    |-- main.js
```

## Contribuição
Se você quiser contribuir com este projeto, sinta-se à vontade para fazer um fork do repositório e enviar um pull request.
