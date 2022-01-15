const share = document.getElementById('link');
const social = document.querySelector('.social');
const footer = document.getElementById('footer');
const user = document.getElementById('user');

share.addEventListener('click', () => {
  social.classList.toggle('visible');
  footer.classList.toggle('bgc__2');
  user.classList.toggle('noVisible');
  if (window.innerWidth >= 700) {
    social.classList.toggle('opacity')
  }
})