function carregar () {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("image")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if(hora>= 0 && hora < 12){
        //bom dia
        img.src = `image/manha.png`
        document.body.style.background=`#daded0`
    } else if (hora>=12 && hora <18){
        //boa tarde
        img.src = `image/tarde.png`
        document.body.style.background=`#ffcf5e`
    }else{
        //boa noite
        img.src = `image/noite.png`
        document.body.style.background=`#6e9fc7`
    }
}

