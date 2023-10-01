import checkLocalStorage from './database.mjs';

checkLocalStorage();

export default function printPlayers(array) {

    let row = document.getElementById("row");

    array.forEach(player => {

        row.innerHTML +=

            `<div class="col-12 col-md-6 col-lg-4 d-flex align-items-stretch">
                <div class="card">
                    <img class="card-img-top" src="${player.img}" alt ="player">
                    <h3 class="player-name">${player.name}</h3>
                    <ul class="players-box-list">
                        <li>Age: ${player.age}</li>
                        <li>Nation: ${player.nation}</li>
                        <li>Height: ${player.height}</li>
                        <li>Position: ${player.position}</li>
                        <li>Preferred foot: ${player.preferredFoot}</li>
                        <li>Team: ${player.team}</li>
                        <li>Goals: ${player.goals}</li>
                    </ul>
                </div class="card-body">
                
                    
                </div>`
    })
};