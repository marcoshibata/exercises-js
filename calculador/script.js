
function inserir(valor){
    let val = document.getElementById(`resultado`).innerHTML
    document.getElementById(`resultado`).innerHTML=val + valor
}
function limpar(){
    document.getElementById(`resultado`).innerHTML=``
}
function voltar(){
    let resul = document.getElementById(`resultado`).innerHTML
    document.getElementById(`resultado`).innerHTML = resul.substring(0,resul.length -1)
}
function calcular(){
    let result = document.getElementById(`resultado`).innerHTML
    if(result){
        document.getElementById(`resultado`).innerHTML = eval(result)
    }
}