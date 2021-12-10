`use strict`;
let banco = [  // simulnado banco de dados
    {'tarefa':'Estudar','status':''},
    {'tarefa':'Netflix','status':'checked'}
]

const criarItem  = (tarefa, status) => {
    const item = document.createElement(`label`)
    item.classList.add(`todo__item`)
    item.innerHTML = `
    <input type="checkbox" ${status}>
    <div>${tarefa}</div>
    <input type="button" value="x">
    `
    document.getElementById('todoList').appendChild(item)
}

const limparTela = () => {
    const todoList = document.getElementById('todoList')
    while (todoList.firstChild){
        todoList.removeChild(todoList.lastChild)
    }
}
const atualizarTela = () => { // cada vez que banco for atualizado, atualiza a tela
    limparTela()
    banco.forEach(item => criarItem(item.tarefa,item.status))
}

const inserirItem = (evento) => {
    const tecla = evento.key
    const texto = evento.target.value
    if ( tecla === 'Enter'){
        banco.push({'tarefa':texto,'status':''})
        atualizarTela()
        evento.target.value = ''
    }
}
document.getElementById('newItem').addEventListener('keypress',inserirItem)

atualizarTela()
