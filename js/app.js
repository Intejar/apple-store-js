function getPin(){
    let pin = generatePin();
    pin = pin + '';
    if(pin.length == 4){
        return pin;
    }
    else{
        return getPin();
    }
}
function generatePin (){
    const pinNumber = Math.round(Math.random()*10000);
    return pinNumber;
}


const generateButton = document.getElementById('btn-generate');
generateButton.addEventListener('click',function(){
    const pinNumber = getPin();
    const displayPin = document.getElementById('generate-display');
    displayPin.value = pinNumber; 
})

// document.getElementById('ac-button').addEventListener('click', function () {
//     const displayNumber = document.getElementById('number-display');
//     displayNumber.value = " ";

// })
function showNumber(number) {
    const displayPrev = document.getElementById('number-display');
    const inputNumber = document.getElementById(number);
    inputNumber.addEventListener('click', function () {
        const prevNumber = displayPrev.value
        const newNuber =prevNumber + inputNumber.innerText;
        displayPrev.value = newNuber;
    })
}
showNumber('number-0');
showNumber('number-1');
showNumber('number-2');
showNumber('number-3');
showNumber('number-4');
showNumber('number-5');
showNumber('number-6');
showNumber('number-7');
showNumber('number-8');
showNumber('number-9');

const backCut = document.getElementById('back-btn');
backCut.addEventListener('click',function(){
    const showNumberDisplay = document.getElementById('number-display');
    const showCutDisplay = showNumberDisplay.value.slice(0,-1);
    showNumberDisplay.value = showCutDisplay;
})

const submitButton = document.getElementById('submit-btn');
submitButton.addEventListener('click', function(){
    const showDisplay = document.getElementById('number-display');
    const pinDisplay = document.getElementById('generate-display');
    if(showDisplay.value == pinDisplay.value){
         return window.location.href = 'apple.html';
    }
    else{
        const showMistake = document.getElementById('correction');
        showMistake.style.display = 'block';
    }
})