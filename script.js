// https://api.sheetmonkey.io/form/uN9zDmvy2LmfSugDNV5dRA

const form = document.querySelector('form')

const submitform = e => {
  e.preventDefault()
  addLoading()
  const nome = document.querySelector('#nome').value
  const email = document.querySelector('#email').value
  const assunto = document.querySelector('#assunto').value
  const mensagem = document.querySelector('#mensagem').value
  const url = 'https://api.sheetmonkey.io/form/uN9zDmvy2LmfSugDNV5dRA'
  fetch(url, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ nome, email, assunto, mensagem })
  }).then(() => {
    removeLoading()
    form.reset()
  })
}

const botao = document.querySelector('.formcontato__botao')
const enviarMensagem = document.querySelector('.enviar-mensagem')
function addLoading() {
  enviarMensagem.style.display = 'none'
  botao.innerHTML =
    '<img src="./assets/carregamento.png" alt="Carregamento" class="loading">'
}

function removeLoading() {
  botao.innerHTML = ''
  setTimeout(() => {
    botao.innerHTML = '<p class="enviar-mensagem">Enviar mensagem</p>'
  }, 100)
}

document.querySelector('form').addEventListener('submit', submitform)
