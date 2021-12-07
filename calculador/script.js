let result = document.getElementById(`resultado`)
let element= document.getElementById(`elementos`)
let observando = document.getElementById(`observando`)
let transicao = ``
let visor = ``
let calculando =``
function numero1(){
    transicao +=`1`
    visor +=`1`
    result.innerHTML=transicao
    element.innerHTML=visor
}
function numero2(){
    transicao +=`2`
    visor +=`2`
    result.innerHTML=transicao
    element.innerHTML=visor
}
function somar(){
    if(transicao != ``){
    visor+=`+`
    calculando = Number(calculando)+Number(transicao)
    transicao=``
    element.innerHTML=visor
    result.innerHTML=calculando
    }
}