
function carregar () {

    var conteudoMsg = document.getElementById('infoHoras')
    var conteudoImg = document.getElementById('imagem')
    var conteudoSaudacao = document.getElementById('saudação')
    var sectionCard = document.getElementById('card')

    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    conteudoMsg.innerHTML =  `Agora são  ${hora} horas e ${minutos}.`

    if ( hora < 5 && hora >= 0) { 

        conteudoImg.src = 'imagens editadas/foto de noite.png'
        conteudoSaudacao.innerHTML =  `Boa madrugada`
        sectionCard.style.background = 'var(--backCardNoite)'
    }// madrugada > foto de madrugada = foto de noite

    else if ( hora < 12) {

        conteudoImg.src = 'imagens editadas/foto de dia.png'
        conteudoSaudacao.innerHTML =  `Bom dia !`
        sectionCard.style.background = 'var(--backCardDia)'
    }//dia

    else if ( hora < 18) {

        conteudoImg.src = 'imagens editadas/foto de tarde.png'
        conteudoSaudacao.innerHTML =  `Boa tarde !`
        sectionCard.style.background = 'var(--backCardTarde)'
    }//tarde

    else if ( hora <= 24){

        conteudoImg.src = 'imagens editadas/foto de noite.png'
        conteudoSaudacao.innerHTML =  `Boa noite !`
        sectionCard.style.background = 'var(--backCardNoite)'
    }// noite

    else {

        conteudoImg.src = ''
        conteudoSaudacao.innerHTML =  `Horario informado corretamente`
    }
     
}//encerra function



