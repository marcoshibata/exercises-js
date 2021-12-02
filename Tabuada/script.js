function tabuada(){
    let num = document.getElementById(`txtn`)
    let tab = document.getElementById(`seltab`)
    if(num.value.length == 0){
        window.alert(`Por favor, digite um numeo`)
    }else{
        let n = Number(num.value)
        let c = 1
        tab.innerHTML=`` //limpa o select
        while(c<=10){
            let item = document.createElement(`option`)  // cria um elem,ento option
            item.text = `${n} x ${c} = ${n*c}` //
            item.value = `tab${c}`  // acrescenta o value no option
            tab.appendChild(item)
            c++
        }
    }
}