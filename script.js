function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 08
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = './assets/manha.png'
        document.body.style.background = '#ECC07F'
    }
    else if (hora >= 12 && hora < 18) {
        img.src = './assets/tarde.png'
        document.body.style.background = '#A9A2A2'
    }
    else {
        img.src = './assets/noite.png'
        document.body.style.background = '#1B2645'
        
    }
}
