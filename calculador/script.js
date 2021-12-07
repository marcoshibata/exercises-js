function inserir(valor){
    let val = document.getElementById(`resultado`).innerHTML
    document.getElementById(`resultado`).innerHTML=val + valor
}
function limpar(){
    document.getElementById(`resultado`).innerHTML=``
}
