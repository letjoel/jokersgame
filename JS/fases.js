

//fase 1
let form1 = document.querySelector("form");

form1.addEventListener("submit", savePlayerName);

function savePlayerName() {
  let playerName = document.querySelector(".main__first__input").value;
  localStorage.setItem("playerName", playerName);
  window.location.href = "./game2.html";
  console.log("holaaaaaa")

}


//fase 2
let newCodersArray = [];

newCodersArray = JSON.parse(localStorage.getItem("codersList")) || [];

function renderHTMLenemies(newCodersArray) {
  newCodersArray.forEach((element) => {
    let name = element.name;
    let avatar = element.avatar;
    let div = document.createElement("div");
    div.className = "player-card highlightSelected";
    div.id = element.id;
    div.innerHTML = `
        <img class="player-card__image" src="/Assets/images/roudplayerbackground.svg" alt="card image">
        <img class="player-card__image__avatar" src="${avatar}">
        <p class="player-card__name">${name}</p>
        `;
    document.querySelector(".join").appendChild(div);
    /* div.className = "player-card"; */
    document.querySelector(".enemy-chosen").appendChild(div);
    div.addEventListener("click", turnOnPlayer);
  });
}
renderHTMLenemies(newCodersArray);

let selectedPlayer = -1;
function turnOnPlayer(e) {
  selectedPlayer = e.target.parentElement.id;
  /* highlightSelectedPlayer(); */
}


//fase 3

let newCodersArray2 = [];

newCodersArray2 = JSON.parse(localStorage.getItem("codersList")) || [];


function renderHTMLenemies2(newCodersArray) {
  newCodersArray2.forEach((element) => {
    if (element.id == selectedPlayer){
        document.querySelector("playing-characters").appendChild(div);
    } else {
    let name = element.name;
    let avatar = element.avatar;
    let div = document.createElement("div");
    div.className = "player-card";
    div.id = element.id;
    div.innerHTML = `
        <img class="player-card__image" src="/Assets/images/roudplayerbackground.svg" alt="card image">
        <img class="player-card__image__avatar" src="${avatar}">
        <p class="player-card__name">${name}</p>
        `;
    document.querySelector("#non-playing-characters").appendChild(div);
} });
}
renderHTMLenemies2(newCodersArray2);