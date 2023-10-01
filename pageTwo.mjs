const nameTxt = document.getElementById("name-txt");
const searchNameBtn = document.getElementById("search-name-btn");
const positionTxt = document.getElementById("position-txt");
const positionBtn = document.getElementById("search-position-btn");
const clubSelect = document.getElementById("club-select");
const outputSection = document.getElementById("output-section");

// Arrays
const getAllPlayers = () => {

  let arrayOfPlayers = []

  Object.keys(localStorage).forEach(function (key) {

    let playerObj = localStorage.getItem(key)

    let playerToPush = JSON.parse(playerObj)

    arrayOfPlayers.push(playerToPush)

  });

  return arrayOfPlayers;

}

const allPlayers = getAllPlayers();

// Functions

const showPlayers = (players) => {
  let htmlTxt = "";
  players.forEach((player) => {
    htmlTxt += `
                <div class="players-box">
                <div class="player-image">
                    <img class="img-fluid" src="${player.img}" alt ="player">
                    <h3 class="name">${player.name}</h3>
                </div>
                
                    <ul class="players-box-list">
                        <li>Age: ${player.age}</li>
                        <li>Nation: ${player.nation}</li>
                        <li>Height: ${player.height}</li>
                        <li>Position: ${player.position}</li>
                        <li>Preferred foot: ${player.preferredFoot}</li>
                        <li>Team: ${player.team}</li>
                        <li>Goals: ${player.goals}</li>
                    </ul>
                </div>
                    `;
  });
  outputSection.innerHTML = htmlTxt;
};

/*index html*/

const searchName = () => {
  let name = nameTxt.value;
  let searchedPlayers = allPlayers.filter((player) =>
    player.name.toLowerCase().includes(name)
  );
  showPlayers(searchedPlayers);
  nameTxt.value = "";
};

const searchPosition = () => {
  let position = positionTxt.value;
  let searchedPlayers = allPlayers.filter((player) =>
    player.position.toLowerCase().includes(position)
  );
  showPlayers(searchedPlayers);
  positionTxt.value = "";
};

const searchClub = () => {
  let team = clubSelect.value;
  let searchedPlayers = allPlayers.filter((player) => player.team === team);
  showPlayers(searchedPlayers);
  clubSelect.value = "";
};

searchNameBtn.addEventListener("click", searchName);
positionBtn.addEventListener("click", searchPosition);
clubSelect.addEventListener("change", searchClub);