function verificar(){
    var data = new Date() // data atual
    var ano = data.getFullYear() // pega ano com 4 digitos
    var fano = window.document.getElementById(`txano`)
    var res = window.document.querySelector(`div#result`) // mesmo efeito do geyElementById
    if(fano.value.length == 0 || fano.value > ano){
        window.alert(`[ERRO] Verifique os dados e tente novamente!`)
    }else{
        var fsex = window.document.getElementsByName(`radsex`)
        var idade = ano - Number(fano.value) //calcula idade
        //res.innerHTML = `Idade calculada: ${idade}` // mostra indade na tela
        var genero = ""
        var img = window.document.createElement(`img`) // coloca imagem dinamicamente
        img.setAttribute(`id`,`foto`) // coloca id na tag img
        if(fsex[0].checked){
            genero = `Homem`
            if(idade >= 0 && idade < 10 ){ //testar faixa etaria
                //crianca
                img.setAttribute(`src`, `image/menino.png`)
            }else if(idade < 21){
                //jovem
                img.setAttribute(`src`, `image/mocinho.png`)
            }else if(idade < 50){
                // adulto
                img.setAttribute(`src`, `image/rapaz.png`)
            }else{
                //idoso
                img.setAttribute(`src`, `image/senhor.png`)
            }
        }else if(fsex[1].checked){
            genero = `Mulher`
            if(idade >= 0 && idade < 10 ){ //testar faixa etaria
                //crianca
                img.setAttribute(`src`, `image/menina.png`)
            }else if(idade < 21){
                //jovem
                img.setAttribute(`src`, `image/mocinha.png`)
            }else if(idade < 50){
                // adulto
                img.setAttribute(`src`, `image/moca.png`)
            }else{
                //idoso
                img.setAttribute(`src`, `image/senhora.png`)
            }
        }
        res.style.textAlign =`center` //comando para centralizar teexto
        res.innerHTML = `Detectamos ${genero} , com ${idade} anos`
        res.appendChild(img) // faz aparecer img na tela

    }
}