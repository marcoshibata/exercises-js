let num = document.querySelector(`input#fnum`) // funciona igual getElementById
let lista = document.querySelector(`select#flista`)
let res = document.querySelector(`div#res`)
let valores = []

function isNumero(n){
    if(Number(n) >=1 && Number(n) <=100){
        return true
    }else{
        return false
    }

}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1){ // verificar se esta na lista
        return true
    }else{
        return false
    }
}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value)) // adiciona ao vetor "valores"
        let item = document.createElement(`option`) // cria option dentro do select
        item.text = `Valor ${num.value} adicionado` // valor do item sera um texto
        lista.appendChild(item) // adiciona a lista
        res.innerHTML=`` // limpar
    }else{
        window.alert(`Valor invalido ou ja encontrado na lista`)
    }
    num.value =``  //limpa o campo
    num.focus()    // define o foco ao campo
}
function finalizar(){
        if(valores.length == 0){
            window.alert(`Adicione valores`)
        }else{
            let tot = valores.length
            let maior = valores[0] // no inicio o primeiro valor eh o maior
            let menor = valores[0] // no inicio o primeiro valor tambem eh o menor
            let soma = 0
            let media = 0
            for(let pos in valores){
                soma += valores[pos]
                if(valores[pos]> maior)
                maior = valores[pos]
                if(valores[pos]<menor)
                menor = valores[pos]
            }
            media = soma/tot
            res.innerHTML= ``
            res.innerHTML+= `<p>Ao todo temos ${tot} numeros cadastrados</p>`
            res.innerHTML+= `<p>O maior valor adicionado foi ${maior}</p>`
            res.innerHTML+= `<p>O menor valor adicionado foi ${menor}.</p>`
            res.innerHTML+= `<p>Somando todos os valores , temos ${soma}</p>`
            res.innerHTML+= `<p>A media doas valores digitados e ${media}</p>`
        }
    }
