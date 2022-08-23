const selectedPlayersArray = [];
function display(button){ 
    const showplayers = document.getElementById('v-Selected');
    if(selectedPlayersArray.length > 5){
        alert("You Can not Select More Than 5 Players!!!");
        selectedPlayersArray.pop();
        return button.removeAttribute('disabled');      
    }
    showplayers.innerHTML = "";
    for(let i = 0 ; i < selectedPlayersArray.length; i++){
       const playerName = selectedPlayersArray[i].playerName;
       const tr = document.createElement("tr");
        tr.innerHTML = `
        <th> ${i+1}. </th>
        <td> ${playerName} </td>
        `;
        showplayers.appendChild(tr);
    }
}

function selectPlayer(element){
    const button = element;
    button.setAttribute('disabled', 'ture');    
    const selectedPlayerFor = element.parentNode.children[0].innerText;
    const playersObj =
    {
        playerName: selectedPlayerFor
    }   
    selectedPlayersArray.push(playersObj);
    display(button);
}