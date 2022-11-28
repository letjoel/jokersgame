import {knifeSlice,knock,playerDead,rollDice,screams}from "./audio.js"


//Variables
let exportArray = [];
let codersArray = [];
let avatarsArray = [
"/Assets/images/coder1.svg",
"/Assets/images/coder2.svg",
"/Assets/images/coder3.svg",
"/Assets/images/coder4.svg",
    
];
let newCoderName = "";
let idCounter = 0;

//Selectors
let section = document.querySelector('.main__second-b__play__container');
const addButton = document.querySelector('.main__second-b__add');
const listContainer = document.querySelector('.main__second-b__list');
const input = document.querySelector('.inputName');
let removeButtons = [];


if (removeButtons !== undefined) {
    
    removeButtons = document.querySelectorAll('.player-card__remove').parentElement;
}

//si hay algo en JSON CARGAR ANTES!!


//Listeners
addButton.addEventListener('click', addCoder);



//Functions
function addCoder() {
    let randomNumber = Math.floor(Math.random() *3);
    let idSelection = 0;


    let div = document.createElement('div');
    div.className = "player-card";
    idCounter++;
    div.id = idCounter;
    newCoderName = input.value;
    div.innerHTML = `
        <img class="player-card__image" src="/Assets/images/roudplayerbackground.svg" alt="card image">
        <img class="player-card__image__avatar" src="${avatarsArray[randomNumber]}">
        <p class="player-card__name">${newCoderName}</p>
        <div>
            <button class="player-card__remove"></button>
        </div>
    
    `;
    codersArray.push(div);
    renderHTML();
    knock();
    //add Listener
    div.addEventListener('click', function(e) {
        idSelection = e.target.parentElement.parentElement.id;
        console.log(idSelection);



    })

    

    if (codersArray.length >0) {
        renderPlayButton();
    }



    //Exportamos a Json
    let objectExported = {
        name: input.value,
        id: idCounter,
        avatar: avatarsArray[randomNumber]
    };

    exportArray.push(objectExported);
    sendToJason();
    input.value = "";

    //Create listeners
    // putRemoverListeners();
    removeButtons = document.querySelectorAll('.player-card__remove').parentNode;
}
// function removeCoder() {
    

//     let div = removeButtons.parentElement.parentElement;
//     idCounter--;
//     console.log(div);
//     Remove div in html
//     div.innerHTML = `
//     `;

//     Remove div in array
    
    

//     //Remove div in array exported

//     codersArray.push(div);
//     renderHTML();

//     //Remove arrow 
//     if (!codersArray.length) {
//         section.innerHTML = "";
//     }

//     //Exportamos a Json
//     let objectExported = {
//         name: input.value,
//         id: idCounter,
//         avatar: avatarsArray[randomNumber]
//     };

//     exportArray.push(objectExported);
//     sendToJason();
//     input.value = "";
// }


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
function sendToJason(){
    //enviar contador
    localStorage.setItem('codersCounter', JSON.stringify(idCounter));
    //enviar array de objetos
    localStorage.setItem('codersList', JSON.stringify(exportArray));
}

