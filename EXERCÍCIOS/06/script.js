function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        alert('Por favor, digite um número')        
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = '' // limpar o bloco a esquerda para a próxima pesquisa
        while (c <= 10) { // trava o c no número 10
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++ // faz o valor de c = 1 receber +1
        }        
    }
}
