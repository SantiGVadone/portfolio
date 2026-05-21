const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

// Opcional: Cierra el menú cuando hacés clic en cualquier link
document.querySelectorAll('.header-button').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })
})
