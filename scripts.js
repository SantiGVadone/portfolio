const hamburger = document.getElementById('hamburger')
const navLinks = document.getElementById('nav-links')

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active')
})

document.querySelectorAll('.header-button').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })
})

document.querySelectorAll('.container').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active')
  })
})
