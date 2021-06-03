//4 - Adicione uma lista ordenada de tarefas com o id="lista-tarefas"//
//O que será verificado://
//Será verificada a existência de um elemento ol com o id lista-tarefas.//

const listaDeTarefas = document.createElement('ol');
listaDeTarefas.id = 'lista-tarefas';
const minhaListaDeTarefas = document.getElementsByTagName('header')[0];
minhaListaDeTarefas.appendChild(listaDeTarefas);


//5 - Adicione um botão com id="criar-tarefa" e, ao clicar nesse botão, um novo item deverá// 
//ser criado ao final da lista e o texto do input deve ser limpo//

//O que será verificado://

//Será verificada a existência de um elemento do tipo button com o id criar-tarefa//
//No campo de input será digitado o texto de uma tarefa qualquer e, em seguida, clicar-se-á no botão de criar tarefa. //

//**Será verificado que, após o clique, o texto digitado aparece na lista e desaparece do input.////

//**A adição de elementos na lista será feita algumas vezes, e será checado se //
//todos os itens criados permanecem na lista na medida em que novos são adicionados.//

//Botão de adicionar
const button = document.createElement('button');
button.id  = 'criar-tarefa';
minhaListaDeTarefas.appendChild(button);
button.innerHTML = "Adicionar Tarefa"
//desenvolvimento do input


function displayList() {
  let textInput = document.querySelector('#texto-tarefa');
  let listaLi = document.createElement('li');
  listaLi.classList = 'tarefa';
  listaLi.innerHTML = textInput.value;
  let ol = document.getElementById('lista-tarefas');
  ol.appendChild(listaLi);
  textInput.value = '';
  
}

button.addEventListener('click', displayList);