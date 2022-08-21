function makeInteger(element) {
    const stringNumber = document.getElementById(element);
    const integerNumber = parseFloat(stringNumber.innerText);
    return integerNumber;
}
function plusButton(btn) {
    const getButton = document.getElementById(btn);
    getButton.addEventListener('click', function () {
        const displayNumberString = document.getElementById('btn-display');
        const prevNumber = parseFloat(displayNumberString.innerText);
        const newNumber = prevNumber + 1;
        displayNumberString.innerText = newNumber;
        const DisplayPrice = document.getElementById('display-price');
        const newPrice = newNumber * 1200;
        DisplayPrice.innerText = newPrice;
        calculation();
    })
}
function minusButton(btn) {
    const getButton = document.getElementById(btn);
    getButton.addEventListener('click', function () {
        const displayNumberString = document.getElementById('btn-display');
        const prevNumber = parseFloat(displayNumberString.innerText);
        if (displayNumberString.innerText > 0) {
            const newNumber = prevNumber - 1;
            displayNumberString.innerText = newNumber;
            const DisplayPrice = document.getElementById('display-price');
            const newPrice = newNumber * 1200;
            DisplayPrice.innerText = newPrice;
        }
        else {
            displayNumberString.innerText = 0;
        }
        calculation();
        
    })
}
function plusButtonCover(btn) {
    const getButton = document.getElementById(btn);
    getButton.addEventListener('click', function () {
        const displayNumberString = document.getElementById('btn-display-cover');
        const prevNumber = parseFloat(displayNumberString.innerText);
        const newNumber = prevNumber + 1;
        displayNumberString.innerText = newNumber;
        const DisplayPrice = document.getElementById('display-price-cover');
        const newPrice = newNumber * 250;
        DisplayPrice.innerText = newPrice;
        calculation();
    })
}
function minusButtonCover(btn) {
    const getButton = document.getElementById(btn);
    getButton.addEventListener('click', function () {
        const displayNumberString = document.getElementById('btn-display-cover');
        const prevNumber = parseFloat(displayNumberString.innerText);
        if (displayNumberString.innerText > 0) {
            const newNumber = prevNumber - 1;
            displayNumberString.innerText = newNumber;
            const DisplayPrice = document.getElementById('display-price-cover');
            const newPrice = newNumber * 250;
            DisplayPrice.innerText = newPrice;
        }
        else {
            displayNumberString.innerText = 0;
        }
        calculation();
    })
}
function calculation() {
    const getPhoneTotal = makeInteger('display-price');
    const getCaseTotal = makeInteger('display-price-cover');
    const getSubtotal = getPhoneTotal + getCaseTotal;
    const prevSubtotal = document.getElementById('display-subtotal');
    prevSubtotal.innerText = getSubtotal;
    const taxTotal = document.getElementById('display-tax');
    const taxSubtotal = makeInteger('display-subtotal');
    const newTax = taxSubtotal * 0.1;
    taxTotal.innerText = newTax;
    const total = document.getElementById('display-total');
    const totalSub = makeInteger('display-subtotal');
    const totalTax = makeInteger('display-tax');
    const newTotal = totalSub + totalTax;
    total.innerText = newTotal; 
}
plusButton('btn-plus');
minusButton('btn-minus');
plusButtonCover('btn-plus-cover');
minusButtonCover('btn-minus-cover');


