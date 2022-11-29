//fase 1
let form1 = document.querySelector("form");

form1.addEventListener("submit", savePlayerName);

function savePlayerName(e) {
  e.preventDefault();
  let playerName = document.querySelector(".main__first__input").value;
  localStorage.setItem("playerName", playerName);
  window.location.href = "game2.html";

}



