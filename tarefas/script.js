`use strict`;
let banco = [  // simulnado banco de dados
    {'tarefa':'Estudar','status':''},
    {'tarefa':'Netflix','status':'checked'},
    {'tarefa':'Amazon1','status':'checked'}
]

const criarItem  = (tarefa, status) => {
    const item = document.createElement(`label`)
    item.classList.add(`todo__item`)
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="x">
    `
    document.getElementById(`todoList`).appendChild(item)
}
const limparTarefas = () =>{ // nao permite que duplique dados quando atulizar tela dfor chamado
    const todoList = document.getElementById('todoList')
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}

const atualizarTela = () => { // cada vez que banco for atualizado, atualiza a tela
    limparTarefas()
    banco.forEach(item => criarItem(item.tarefa,item.status))
}

const inserirItem = (evento) =>{
    const tecla = evento.key
    if (tecla === 'Enter'){
        banco.push({'tarefa':'Criar desenho','status':''})
        atualizarTela()
    }
}

document.getElementById('newItem').addEventListener('Keypress',nserirItem)

atualizarTela()
