// skills.js
const hamburger = document.createElement('div');
hamburger.classList.add('hamburger');
for (let i = 0; i < 3; i++) {
    const bar = document.createElement('div');
    hamburger.appendChild(bar);
}
document.body.appendChild(hamburger);

const nav = document.querySelector('.left-nav');

hamburger.addEventListener('click', () => {
    nav.classList.toggle('active');
});
