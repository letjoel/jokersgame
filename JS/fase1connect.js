let form1 = document.querySelector("form");

form1.addEventListener("submit", renderUserName);

function renderUserName(event) {
  document.querySelector(".player-card__name").textContent =
    document.querySelector(".main__first__input").value;
    event.preventDefault();
    console.log(document.querySelector(".player-card__name").textContent);
    console.log(document.querySelector(".main__first__input").value);
}


