const button = document.createElement('button');
button.id = 'criar-tarefa';
const minhaListaDeTarefas = document.getElementsByTagName('header')[0];
minhaListaDeTarefas.appendChild(button);
button.innerHTML = 'Adicionar Tarefa';

const listaDeTarefas = document.createElement('ol');
listaDeTarefas.id = 'lista-tarefas';
minhaListaDeTarefas.appendChild(listaDeTarefas);

//ativiada numero 5 // 

function blackGroundColor(evento) {
  const event= evento.target
  // console.log(event);
  let listaLi = document.getElementsByClassName('tarefa');
  for (let index = 0; index < listaLi.length; index += 1) {
    listaLi[index].style.backgroundColor = '';
  }
  event.style.backgroundColor = 'rgb(128, 128, 128)';
}
function lineRisc(evento) {
  const eventLi = evento.target;
  // se evento listaLi estiver marcado com completed, desmarcar
  if(eventLi.classList.contains('completed')) {
    eventLi.classList.remove('completed') 
  }else {  
    eventLi.classList.add('completed');
  }
  
} 

function displayList() {
  const textInput = document.querySelector('#texto-tarefa');
  const listaLi = document.createElement('li');
  listaLi.classList = 'tarefa';
  listaLi.innerHTML = textInput.value;
  const ol = document.getElementById('lista-tarefas');
  ol.appendChild(listaLi);
  textInput.value = '';
  listaLi.addEventListener('click', blackGroundColor);
  listaLi.addEventListener('dblclick', lineRisc);
}

/* Desafio 6*/


//Clicar duas vezes em um item, faz com que ele seja riscado, indicando que foi completo. //
//Deve ser possível desfazer essa ação clicando novamente duas vezes no item.//

let listaLi = document.getElementsByClassName('tarefa');
let completo = document.getElementsByClassName('completed');

// 10 - Adicione um botão com id="apaga-tudo" que quando clicado deve apagar todos os itens da lista
//     1) Será verificado que existe um elemento `button` com o id `apaga-tudo`
//     2) Será verificado que, dado que uma lista possui tarefas, um clique no botão a deixa vazia

let buttons = document.querySelector('#buttons');
let deleteAll = document.createElement('button');
buttons.appendChild(deleteAll);
deleteAll.id = 'apaga-tudo';
deleteAll.innerHTML = 'Apagar Tudo';

function delAll() {
  
  if(listaLi){
    listaDeTarefas.remove(listaLi);
  }
}
deleteAll.addEventListener('click', delAll);
button.addEventListener('click', displayList);

let buttonRemove = document.createElement('button');
buttonRemove.id = ('remover-finalizados');
buttonRemove.innerHTML = ('Remover Finalizados')
buttons.appendChild(buttonRemove);

buttonRemove.addEventListener('click', function(){
  for(let index = 0; index < listaLi.length; index += 1){
    if(listaLi[index].classList.contains('completed')){
      listaDeTarefas.removeChild(listaLi[index]);
    }
  }
})