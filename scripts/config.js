function openPlayerConfig(event) {
 
    editedPlayer = + event.target.dataset.playerid; // +'1' =>1
    playerConfigOverlayElement.style.display='block';
    backdropElement.style.display='block';
}

function closePlayerConfig() {
    playerConfigOverlayElement.style.display='none';
    backdropElement.style.display='none';
    formElement.firstElementChild.classList.remove('error');
    errorsOutputElement.textContent =" "
    formElement.firstElementChild.lastElementChild.value ='';

}

function savePlayerConfig(event) {
    event.preventDefault();
    // console.log(event);
    const formData =new FormData(event.target);
    const enteredPlayername = formData.get("username").trim(); //"   urim " =>"urim"

    if (!enteredPlayername) { //enterePlayername === ''
        event.target.firstElementChild.classList.add("error");
        errorsOutputElement.textContent = "Please enter a valid name!";
        return;
    }

    //<article id="player-1-data">
    //<h2>Player 1</h2> << child[0]
    //<h3>PLAYER NAME</h3> << child[1]
    const updatedPlayerDataElement = document.getElementById('player-' + editedPlayer + '-data');
    updatedPlayerDataElement.children[1].textContent = enteredPlayername;

    players[editedPlayer -1].name= enteredPlayername;
    
    closePlayerConfig()
}




