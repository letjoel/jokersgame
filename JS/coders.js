let codersArray = [];
let avatarsArray = [
"/Assets/images/coder1.svg\" alt=\"avatar1\"",
"/Assets/images/coder2.svg\" alt=\"avatar2\"",
"/Assets/images/coder3.svg\" alt=\"avatar3\"",
"/Assets/images/coder4.svg\" alt=\"avatar4\"",
    
];
let newCoderName = "";
let idCounter = 0;

let section = document.querySelector('.main__second-b__play__container');

const addButton = document.querySelector('.main__second-b__add');
const listContainer = document.querySelector('.main__second-b__list');
const input = document.querySelector('.inputName');

addButton.addEventListener('click', addCoder);

function addCoder() {
let randomNumber = Math.floor(Math.random() *3);
console.log(randomNumber);

    let div = document.createElement('div');
    div.className = "player-card";
    idCounter++;
    div.id = idCounter;
    newCoderName = input.value;
    div.innerHTML = `
     <img class="player-card__image" src="/Assets/images/roudplayerbackground.svg" alt="card image">
                        <img class="player-card__image__avatar" src="${avatarsArray[randomNumber]}>
                        <p class="player-card__name">${newCoderName}</p>
                        <div>
                            <button class="player-card__remove"></button>
                        </div>
    
    
    
    
    `;
    codersArray.push(div);
    renderHTML();

    if (codersArray.length >0) {
        renderPlayButton();
    }
}



function renderHTML(){
    listContainer.innerHTML = "";

    for(let i=0; i<codersArray.length; i++){
        listContainer.appendChild(codersArray[i]);
    }


}
function renderPlayButton(){
    section.innerHTML = "";

    let div = document.createElement('button');
    div.className = "main__second-b__play";

    section.appendChild(div);
  


}