
function Contar() 
{    
    let inicioInfo = document.getElementById('txtinicio')
    let resInfo = document.getElementById('res')
    resInfo.innerHTML = ``
    let tabuada = document.getElementById('selectTAbuada')
        
    // extrai valor das variaveis informadas
    let inicio = Number(inicioInfo.value)
    
    //contagem de tamanho das variaveis informadas
    let sizeInicio = inicioInfo.value.length
  
    //=== PREVENÇÃO DE ERROS ===   
    // caso campos estejam vazios
    if (sizeInicio ==0  )
    {
        window.alert('[ERRO] Existem campos vazios, preencha todos os campos!')
        resInfo.style.color = 'yellow'
        resInfo.innerHTML = `Impossivel realizar o calculo, insira algum valor`
        tabuada.innerHTML = ''
    }  
    
    // Calculo da tabuada
    else
    {
       tabuada.innerHTML = '' //se tabuade nao for limpa a tabuada anterior se manterá na select

        var c = 0;
        while (c <= 10 )
        {
            let item = document.createElement('option')     // criando um elemento em html
            item.text = `${inicio} x ${c} = ${c * inicio}`  //escrevendo dentro da option com comando text
            tabuada.appendChild(item)   // com elemento "item" criado imformamos que
                                        //será adicionado na "tabuada" um filho"child" de item   
            c++  // incremento
        }//while
    } // else              
}//encerra function



