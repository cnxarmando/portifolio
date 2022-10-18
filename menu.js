const btnMobile = document.querySelector('#btn-mobile')

const toggleMenu = () => {
  const menu = document.querySelector('.content-header')
  menu.classList.toggle('active')
  btnMobile.innerHTML = menu.classList.contains('active')
    ? 'Fechar menu'
    : 'Menu'
}

btnMobile.addEventListener('click', toggleMenu)
