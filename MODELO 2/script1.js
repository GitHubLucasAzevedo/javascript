function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // Criança
               img.setAttribute('src', 'crianca.png')
               } else if (idade < 21){
                // Jovem
                img.setAttribute('src', 'jovem.png')
               } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'adulto.png')
               } else {
                // Idoso   
                img.setAttribute('src', 'idoso.png')           
               }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade < 10) {
                // Criança
               } else if (idade < 21){
                // Jovem
               } else if (idade < 50) {
                // Adulto
               } else {
                // Idoso
               }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
   
}