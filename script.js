// script.js
window.addEventListener('scroll', () => {
  const navbarHeight = document.querySelector('.navbar').offsetHeight;
  document.querySelectorAll('.scroll-animate').forEach((el) => {
    const rect = el.getBoundingClientRect();
    const isVisible = rect.top < window.innerHeight - 100 && rect.top > navbarHeight;
    if (isVisible) {
      el.classList.add('visible');
    } else {
      el.classList.remove('visible');
    }
  });
});

const modal = document.querySelector('.modal');
const closeButton = document.querySelector('.close-button');
const okButton = document.querySelector('.modal-ok');
const planButtons = document.querySelectorAll('.plans button');
const modalText = document.getElementById('modal-plan-text');

planButtons.forEach(button => {
  button.addEventListener('click', () => {
    const plan = button.textContent;
    modalText.innerHTML = `<strong>${plan}</strong> Plan selected. Details and pricing will be shared shortly.`;
    modal.classList.add('show');
  });
});

[closeButton, okButton].forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.remove('show');
  });
});

// Smooth scroll for all navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
