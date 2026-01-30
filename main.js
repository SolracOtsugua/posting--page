const form = document.querySelector("#form-post");
const titulo = document.querySelector("#titulo");
const conteudo = document.querySelector("#conteudo");

const renderizadorTitulo = document.querySelector("#renderizador-titulo");
const renderizadorConteudo = document.querySelector("#renderizador-conteudo");

//Evento de submit 
form.addEventListener('submit', function (event) {
  event.preventDefault()

  //Objeto Obrigatório
  const data = {
    title: titulo.value,
    body: conteudo.value,
    userId: 1
  }

  //Fetch POST
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-type': 'application/json; charset=UTF-8'
    }
  })
    .then(response => response.json())
    .then(data => {
      renderizadorTitulo.innerHTML = data.title
      renderizadorConteudo.innerHTML = data.body

      titulo.value = ''
      conteudo.value = ''
    })
    .catch(error => {
      console.error('Erro ao postar:', error)
    })
})