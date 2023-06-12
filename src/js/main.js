const msgEmail = document.querySelector('.email-sucess');
const submmited = document.querySelector('.btn-contact');
const date = document.querySelector('.date');
const schollLinks = document.querySelectorAll('.scroll-link')


schollLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault()
    const id = e.target.getAttribute('href').slice(1)
    const element = document.getElementById(id);
    const position = element.offsetTop;
    window.scrollTo({
      top: position,
      behavior: 'smooth'
    })
  })
})

const fillCurrentYear = () => {
  const dateNow = new Date().getFullYear()
  date.textContent = dateNow;
}

window.addEventListener('load', fillCurrentYear)
submmited.addEventListener('click', () => {
  msgEmail.classList.add('btn-activate');

  setTimeout(() => {
    msgEmail.classList.remove('btn-activate');
  }, 5000);
});



