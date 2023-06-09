const msgEmail = document.querySelector('.email-sucess');
const submmited = document.querySelector('.btn-contact');
const date = document.querySelector('.date');



const fillCurrentYear = () => {
  const dateNow = new Date().getFullYear()
  date.textContent = dateNow;
}

submmited.addEventListener('click', () => {
  msgEmail.classList.add('btn-activate');

  setTimeout(() => {
    msgEmail.classList.remove('btn-activate');
  }, 5000);
});

window.addEventListener('load', fillCurrentYear)