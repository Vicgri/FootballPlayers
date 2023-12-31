

//let playerToGet = document.getElementById("user-input-textbox").value

let editPlayerBtn = document.getElementById("edit-player-btn");
let deletePlayerBtn = document.getElementById("delete-player-btn");
let outPutDiv = document.getElementById("output-div");



let playerToDisplay = null;

deletePlayerBtn.onclick = () => {
    console.log("Delete player was run")

    let keyToUse = document.getElementById("user-input-delete").value

    if (localStorage.getItem(keyToUse) === null) {
        alert("Player not found")
    } else {

        playerToDisplay = JSON.parse(localStorage.getItem(keyToUse));

        let answer = window.confirm(`Do you wish to delete | ${playerToDisplay.name} | from the database?`)

        if (answer === true) {
            alert("Player Has Been Removed")
            localStorage.removeItem(keyToUse)
        } else {
            alert("Player Was Not Removed")
        }

    }

}


editPlayerBtn.onclick = () => {
    console.log("Edit Player Was Run")

    const playerName = document.getElementById("player-name-input").value
    const playerAge = document.getElementById("player-age-input").value
    const playerNation = document.getElementById("player-nation-input").value
    const playerHeight = document.getElementById("player-height-input").value
    const playerPosition = document.getElementById("player-nation-input").value
    const playerFoot = document.getElementById("player-foot-input").value
    const playerTeam = document.getElementById("player-team-input").value
    const playerGoal = document.getElementById("player-goal-input").value
    const playerImage = document.getElementById("player-image-input").value

    let keyToUse = document.getElementById("user-input-edit").value

    let playerToEdit = JSON.parse(localStorage.getItem(keyToUse));

    const playerToEditVals = [playerToEdit.name, playerToEdit.age, playerToEdit.nation, playerToEdit.height, playerToEdit.position, playerToEdit.preferredFoot, playerToEdit.team, playerToEdit.goals, playerToEdit.img];

    const inputValues = [playerName, playerAge, playerNation, playerHeight, playerPosition, playerFoot, playerTeam, playerGoal, playerImage];

    let dynamicVars = ["", "", "", "", "", "", "", "", ""]

    for (let i = 0; i < inputValues.length; i++) {

        if (inputValues[i] === "") {

            dynamicVars[i] = playerToEditVals[i]
        } else {
            dynamicVars[i] = inputValues[i]
        }

    }

    let updatedPlayer = {

        id: playerToEdit.id,
        name: dynamicVars[0],
        age: dynamicVars[1],
        nation: dynamicVars[2],
        height: dynamicVars[3],
        position: dynamicVars[4],
        preferredFoot: dynamicVars[5],
        team: dynamicVars[6],
        goals: dynamicVars[7],
        img: dynamicVars[8]

    }

    let answer = window.confirm(`Do you wish to update | ${playerToEdit.name} | values in the database?`)

    if (answer === true) {
        localStorage.removeItem(keyToUse)
        localStorage.setItem(JSON.stringify(playerToEdit.id), JSON.stringify(updatedPlayer))
        alert("Player Update Completed")
    } else {
        alert("Player Update Cancelled")
    }


}















