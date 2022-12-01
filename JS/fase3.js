//Variables
let newCodersArray = [];

//Traemos array de localstorage
newCodersArray = JSON.parse(localStorage.getItem("codersList")) || [];

//Funciones
function renderHTMLenemies(newCodersArray) {
  newCodersArray.forEach((element) => {
    let name = element.name;
    let avatar = element.avatar;
    let div = document.createElement("div");
    div.className = "player-card highlightSelected";
    div.id = element.id;
    div.innerHTML = `
        <img class="player-card__image" src="./Assets/images/roudplayerbackground.svg" alt="card image">
        <img class="player-card__image__avatar" src="${avatar}">
        <p class="player-card__name">${name}</p>
        `;
    div.addEventListener("click", saveSelectedPlayer);
    document.querySelector(".join").appendChild(div);
    /* div.className = "player-card"; */
  });
}

function saveSelectedPlayer(e) {
  let playerId = e.target.parentElement.id;
  localStorage.setItem('selectedPlayer', playerId);
  window.location.href = "game4.html";
  /* highlightSelectedPlayer(); */
}

//Llamamos funciones
renderHTMLenemies(newCodersArray);








