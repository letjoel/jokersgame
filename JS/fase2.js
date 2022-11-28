/*SelectCoder(name): Creates method that modifies a variable SelectedCoder with the selected name and make some visible render that highlight the avatar*/
/*
1 debe haber una variable selectedCoder
2 la variable debe ser modificada por un Input que provendra de FASE 1
3 con el metodo Push tendre que ir agregando al nuevo player a la lista
4 tiene que haber un array donde esten los "div" de jugadores predeterminados y se pueda ir pusheando los q ingrese el usuario

*/

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
    div.className = "player-card";
    document.querySelector(".enemy-chosen").appendChild(div);
    div.addEventListener("click", turnOnPlayer);
  });
}
renderHTMLenemies(newCodersArray);

export let selectedPlayer = -1;
function turnOnPlayer(e) {
  selectedPlayer = e.target.parentElement.id;
  highlightSelectedPlayer();
}

