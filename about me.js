const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.left-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
