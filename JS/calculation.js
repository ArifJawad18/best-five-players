// function and element from  the input field //
function getInputFieldValueById(elementId) {
    const inputField = document.getElementById(elementId);
    const inputFieldString = inputField.value;
    const inputValue = parseFloat(inputFieldString);
    return inputValue;
  }
//function element value form the innertext
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementString = element.innerText;
    const elementValue = parseFloat(elementString);
    return elementValue;
  }

//set the innertext and element
function setTextaValueById(elementId, value) {
    const textElement = document.getElementById(elementId);
    textElement.innerText = value.toFixed(2);
  }
  //error handling
  function errorCheck(value,field){
    if(value < 0 ||isNaN(value)===true){
        alert("Error!! Input value is not valid !!");
        const empty = '0000';
        setTextaValueById(field,empty);
    }
  }

// getting for the per player
document.getElementById('calculate-btn').addEventListener('click',function(){
    let perPlayerBudget =  getInputFieldValueById('calculate-field');
    //Input Error Check
    errorCheck(perPlayerBudget,'player-expenses-field');
    //player cost calculation
    NewplayerExpenses = perPlayerBudget * selectedPlayersArray.length;

    setTextaValueById('player-expenses-field',NewplayerExpenses);
})


document.getElementById('calculate-total-btn').addEventListener('click',function(){
    let managerCost = getInputFieldValueById('manager-field');
    //Input Error Check
    errorCheck(managerCost,'total-expenses-field');
    let coachCost = getInputFieldValueById('coach-field');   
     //Input Error Check
     errorCheck(coachCost,'total-expenses-field');   
    let totalCost = managerCost + coachCost + NewplayerExpenses;
    setTextaValueById('total-expenses-field',totalCost);
    

})