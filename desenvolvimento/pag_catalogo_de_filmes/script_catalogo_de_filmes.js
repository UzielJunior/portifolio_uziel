
function adicionarFilme() 
{
  var filmeImagem = document.getElementById("filme").value;
  var filmeNome = document.getElementById("nome").value;

  var urlmg = document.getElementById("url").value;

  filmeImagem = 'https://br.web.img3.acsta.net/pictures/14/10/31/20/39/476171.jpg'
  filmeNome ='Interrestelar'
  urlmg ='magnet:?xt=urn:btih:1B8302C5E59B36671858F9BF0A7049093E25A22F&dn=interestelar+2014+brrip+imax+blu+ray+1080p+5+1+ch+dublado+andretpf&tr=udp%3A%2F%2Fopen.demonii.com%3A1337%2Fannounce'

  if (filmeImagem.endsWith(".jpg")) 
  {
    var cardFilme =

    "<div class='card'>" +
    "<li id='filmeNome'>" + "<span>" + filmeNome + "</span>" + "</li>" +
      "<li id='filmeImagem'>" + "<img src=" + filmeImagem + ">" +
      "<li>" + 
      `<a id='ancoraLink' href="${urlmg}" class="ancoraLink"> Baixar </a>`
      + "</li>" +
    "</div>" ;

    var elementoListaFilme = document.getElementById("listaFilme");
    elementoListaFilme.innerHTML =
    elementoListaFilme.innerHTML + cardFilme;
  }
  else
  {
    var elementoListaFilme = document.getElementById("error");
    elementoListaFilme.innerHTML = "O link inserido é inválido ou nulo.";
  }

  //limpa os campos dos inputs
  document.getElementById("filme").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("url").value = "";
}
