import letSele
let newCodersArray = [];

newCodersArray = JSON.parse(localStorage.getItem("codersList")) || [];


function renderHTMLenemies(newCodersArray) {
  newCodersArray.forEach((element) => {
    if (element.id == selectedPlayer){
        pintar el jugador en playing
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
renderHTMLenemies(newCodersArray);

/* let selectedPlayer = -1;
function turnOnPlayer(e) {
  selectedPlayer = e.target.parentElement.id; */
  /* highlightSelectedPlayer(); */
}