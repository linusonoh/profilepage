const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.left-nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});
