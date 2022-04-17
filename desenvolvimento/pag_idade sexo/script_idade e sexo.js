
function Verificar() 
{
    var anoUsuario = document.getElementById('txtano')
    var resultado = document.getElementById('res')
    var infoSexo = document.getElementsByName('radsex')
    var genero = ''
    var faixaEtaria = ''

        
    var data = new Date()
    var anoSistema = data.getFullYear()
    var idade = anoSistema-Number(anoUsuario.value);
      
    if ( anoUsuario.value.length == 0 ) // checka se o campo esta vazio 
    { 
        window.alert('[ERRO] Por favor informe um ano válido .Verifique os dados e tente novamente')
        
    }

    else if (  Number(anoUsuario.value) > anoSistema)
    {
        window.alert('[ERRO] O ano informa é maior que o ano atual .Verifique os dados e tente novamente')
    }
    
    else 
    {
        /* infoSexo na posição 0 é homem e na 1 é mulher conforme informado no html*/
        if (infoSexo[0].checked)
        {
            genero = ' homem'
            if (idade < 12)
                {
                faixaEtaria = 'criança'
                }
            else if (idade < 21)
                {
                faixaEtaria = 'jovem'
                }
            else if (idade < 50)
                {
                faixaEtaria = 'adulto'
                }
            else if (idade > 50)
                {
                faixaEtaria = 'idoso'
                }
        }

        else if (infoSexo[1].checked)
        {
            genero = 'a mulher'
            if ( idade >= 0 && idade <= 11 )
                {
                faixaEtaria = 'criança'
                }
            else if (idade > 11 && idade <= 21)
                {
                faixaEtaria = 'jovem'
                }
            else if (idade > 21 && idade <= 50)
                {
                faixaEtaria = 'adulta'
                }
            else if (idade > 50)
                {
                faixaEtaria = 'idosa'
                }
        }   

        resultado.innerHTML =  `Identificamos um${genero} ${faixaEtaria} com ${idade} anos de idade`
    }
    
     
}//encerra function



