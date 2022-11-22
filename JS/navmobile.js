const hamburguer = document.querySelector('#header__hamburger');
const navAside = document.querySelector('.nav__aside');


hamburguer.addEventListener('click', ()=> {
    navAside.classList.toggle('nav__aside--display');
})
