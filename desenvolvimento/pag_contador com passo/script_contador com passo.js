
function Contar() 
{
    
    let inicioInfo = document.getElementById('txtinicio')
    let passoInfo = document.getElementById('txtpasso')
    let fimInfo = document.getElementById('txtfim')
    let resInfo = document.getElementById('res')
        
    // extrai valor das variaveis informadas
    let inicio = Number(inicioInfo.value)
    let fim = Number(fimInfo.value)
    let passo = Number(passoInfo.value)

    //contagem de tamanho das variaveis informadas
    let sizeInicio = inicioInfo.value.length
    let sizePasso = passoInfo.value.length 
    let sizeFim = fimInfo.value.length 
  
    //=== PREVENÇÃO DE ERROS ===   
    // caso campos estejam vazios
    if (sizeInicio ==0 || sizePasso ==0 || sizeFim ==0 )
    {
        window.alert('[ERRO] Existem campos vazios, preencha todos os campos!')
        resInfo.innerHTML = `Impossivel contar apenas com esses dados`
    }  
    // caso usuario informe alguma condição irregular
     else if(passo == fim ||  inicio == fim || passo == 0 )
    {
        if (passo == 0)
        {
            window.alert('[ERRO] Valor do passo não pode ser zero.')
        }
        else if (passo == fim )
        {
            window.alert('[ERRO] Valor do passo igual do fim.')
        }
        else if (inicio == fim)
        {
            window.alert('[ERRO] Valor do inicio igual do fim.')
        }

        resInfo.innerHTML = `Impossivel contar apenas com esses dados`
    }// encerra prevenção de erros

    // Contagem progressiva
    if (fim > inicio)
    {
        resInfo.innerHTML = ``

        for (let c = inicio ; c <=fim ; c+= passo)
            {
                resInfo.innerHTML += ` ${c} \u{1F449} `
            }
        resInfo.innerHTML += '\u{1F3C1}'    
    }

    //contagem regressiva
    else if (fim < inicio)
    {
        resInfo.innerHTML = ``

        for (c = inicio ; c >= fim ; c-= passo)
            {
                resInfo.innerHTML += `${c} \u{1F449} `
            }
        resInfo.innerHTML += '\u{1F3C1}' 
    }
           
}//encerra function

