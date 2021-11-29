function contar(){
    var ini = document.getElementById("txti")
    var fim = document.getElementById( "txtf")
    var passo = document.getElementById("txtp")
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = `Impossivel contar!`
        //window.alert("[ERRO] Faltam dados!")
    }else{
        res.innerHTML = "Contandto...<br>" 
        var i = Number(ini.value)  // converte os valores em numero
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p<=0){ // se o passo for "0" , considera como passo 1
            window.alert(`Passo inválido, considerando " passo 1"`)
            p=1
        }

        if(i<f){ // contagem crescente
        for(var c=i;c<=f;c+=p){  // o "for" irá fazer a contagem
            res.innerHTML += `${c} \u{1F449}` // acrescentando emoji ( unicode emoji list)
        }
    }else{ // contagem regressiva
        for(var c= i; c>= f;c-=p){
            res.innerHTML += `${c} \u{1F449}` 
        }
    }
    res.innerHTML += `\u{1F3C1}` // insere bandeira no final da contagem
    }
}
