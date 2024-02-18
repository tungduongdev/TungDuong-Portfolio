const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const toggleMenu = () => {
    menu.addEventListener('click', () => {
        navbar.classList.toggle('open');
        menu.classList.toggle('bx-x');
    });
};