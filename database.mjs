import playerInfoArray from "./playerarr.mjs";
import printPlayers from "./pageOne.mjs";

function pushToStorage() {

    playerInfoArray.forEach( player => {
        
        var entryId = player.id

        var textId = entryId.toString();
        
        if (localStorage.getItem(textId) != textId) {

            localStorage.setItem(textId, JSON.stringify(player));

        } 

    })
    };

    export default function checkLocalStorage() {
    
        localStorage.length > 0 ? createArray() : pushToStorage()

    };

    function createArray() {
        
        let newPlayerArray = []        
          
        Object.keys(localStorage).forEach(function(key){
            
            let playerObj = localStorage.getItem(key)

            let playerToPush = JSON.parse(playerObj)

            newPlayerArray.push(playerToPush)
         
        });

        printPlayers(newPlayerArray)

        

    }


    

    

    
    
