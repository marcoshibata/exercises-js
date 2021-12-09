`use strict`;
/*<label class="todo__item">
                <input type="checkbox">
                <div>Teste de item 2</div>
                <input type="button" value="x">
</label>*/

const criarItem  = () => {
    const item = document.createElement(`lavel`)
    item.classList.add(`todo__item`)
    item.innerHTML = `
    <input type="checkbox">
    <div>Teste de item 3</div>
    <input type="button" value="x">
    `
    document.getElementById(`todoList`).appendChild(item)
}
