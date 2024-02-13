///  get the input value function 

function getInput(field){
    const input = document.getElementById(field)
    const inputValueString = input.value;
    const inputValue = parseFloat(inputValueString)
    input.value = '';
    return inputValue
}

function setResult(place,newValue){
    const a = document.getElementById(place)
    a.innerText = newValue;
}

function getText(innerValue){
    const paraText = document.getElementById(innerValue)
    const number = paraText.innerText;
    const s = number.split(' ')
    const sValue = parseFloat(s[2])
    console.log(sValue)
    return sValue
}