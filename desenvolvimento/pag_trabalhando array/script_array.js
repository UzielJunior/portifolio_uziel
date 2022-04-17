
var array = []
var soma = 0

function Inserir() 
{     
    var valorInfo = document.getElementById('txtvalor')
    // extrai valor das variaveis informadas
    var valor = Number(valorInfo.value)
    soma += valor

    var avisoInfo = document.getElementById('aviso')
    avisoInfo.style.color = 'yellow'
    
    var campoExibeElementos = document.getElementById('selectArray')

    //contagem de tamanho das variaveis informadas
    let sizeValor = valorInfo.value.length
  
    //=== PREVENÇÃO DE ERROS ===   
    // caso campos estejam vazios
    if (sizeValor ==0  )
    {
        window.alert('[ERRO] Existem campos vazios, preencha todos os campos!')
        document.getElementById("txtvalor").value = "";
    }  
    
    else if (array.indexOf(valor) in array)
    {
        document.getElementById("txtvalor").value = "";
        document.getElementById('resultados').style.visibility = 'visible';
        avisoInfo.innerHTML = 'Valor ja cadastrado'
    }

    else
    {
       if (valor > 100)
       { 
            window.alert = (`Valor maior que o permitido`)
            document.getElementById("txtvalor").value = "";
            document.getElementById('resultados').style.visibility = 'visible';
            avisoInfo.innerHTML = 'Valor maior que o permitido'
       }
       else if (0 > valor )
       {
            window.alert = (`Valor menor que o permitido`)
            document.getElementById("txtvalor").value = "";
            document.getElementById('resultados').style.visibility = 'visible';
            avisoInfo.innerHTML = 'Valor menor que o permitido'
       }
       else 
       {
            //== adicionando na array === 
            array.push(valor)

            //== exibição da adição na array ===
            // criando um elemento em html
            let item = document.createElement('option') 
            item.text = `O valor ${valor} foi inserido`  
            campoExibeElementos.appendChild(item) 

            //limpando os campos campo
            document.getElementById("txtvalor").value = "";
            avisoInfo.innerHTML = ''
            
            document.getElementById('resultados').style.visibility = 'hidden';
        }//else
    } // else              
}//encerra function Inserir

function exibirResultado()
{       
    document.getElementById('resultados').style.visibility = 'visible';
    var contagemInfo = document.getElementById('contagem')
    var maiorInfo = document.getElementById('maior')
    var menorInfo = document.getElementById('menor')
    var somaInfo = document.getElementById('soma')
    var mediaInfo = document.getElementById('media')
    var avisoInfo = document.getElementById('aviso')
    
    var sizeArray = array.length

    if (sizeArray == 0 )
    {
        avisoInfo.innerHTML = 'Nenhum valor foi encontrado'
    }

    else if (sizeArray > 0 )
    {
        avisoInfo.innerHTML = ''

        contagemInfo.innerHTML = `Ao todo temos ${sizeArray} numeros cadastrados `

        var maior = Math.max(...array);
        maiorInfo.innerHTML = `O maior numero cadastrado foi ${maior} `
    
        var menor = Math.min(...array);
        menorInfo.innerHTML = `O menor numero cadastrado foi ${menor}`

        somaInfo.innerHTML = `Somando todos os valores temos ${soma} `
    
        var media = soma/sizeArray
        mediaInfo.innerHTML = `A media dos numeros cadastrado foi ${media.toFixed(1)}`
    }// else if
}//encerra function exibirResultado

