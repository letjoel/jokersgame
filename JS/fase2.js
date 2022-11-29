

/* renderiza el coder creado para matarlo en el DIV que queda abajo.
Tiene un event para leer el click, que haga un hover, y que lo rendericq en el main 3  */

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

export let selectedPlayer = -1;
function turnOnPlayer(e) {
  selectedPlayer = e.target.parentElement.id;
  /* highlightSelectedPlayer(); */
}

