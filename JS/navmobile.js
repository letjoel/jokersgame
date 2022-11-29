const hamburguer = document.querySelector('#header__hamburger');
const navAside = document.querySelector('.nav__aside');


hamburguer.addEventListener('click', ()=> {
    navAside.classList.toggle('nav__aside--display');
})
var backgroundaudio = document.getElementById("backgroundMusic")

function pauseMusic() {
    console.log(backgroundaudio.play);
    if(backgroundaudio.paused){
        backgroundaudio.play();
    } else {
    backgroundaudio.pause()
    
  };}