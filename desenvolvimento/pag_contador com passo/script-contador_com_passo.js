
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
    }
    else if (passo < 0)// passo negativo
    {
        window.alert(`[ERRO] passo menor que 0`)
    }// passo negativo

    // ==== ENECERRA A PREVENÇÃO DE ERROS ====

    // ==== EFETUA A CONTAGEM ====
    else if (passo > 0)// passo positivo o
    {   
        let contador = 0 //

        if (fim > inicio)// Contagem progressiva positiva
        {
            resInfo.innerHTML = ``
            for (let c =  inicio ; c <=fim ; c+= passo)
            {
                if( contador < 100) //impede que seja exibido mais de 100 termos na <div> res
                {
                    resInfo.innerHTML += ` ${c} \u{1F449} `
                }
                contador++
            }  
            resInfo.innerHTML += '\u{1F3C1}'
        }// Contagem progressiva positiva

        else if (fim < inicio)//contagem progressiva negativa
        {
            resInfo.innerHTML = ``
            for (let c = inicio ; c >= fim ; c-= passo)
            {
                if( contador < 100) //impede que seja exibido mais de 100 termos na <div> res
                {
                    resInfo.innerHTML += ` ${c} \u{1F449} `
                }
                contador++
            }
            resInfo.innerHTML += '\u{1F3C1}'  
        }// contagem progressiva negativa
    }// passo positivo
}// encerra function

