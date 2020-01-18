const liveDisplay = document.querySelector('.display')

function add(x, y) {
    return x + y;
};

function subtract(x, y) {
    return x - y;
};

function multiply(x, y) {
    return x * y;
};

function divide(x, y) {
    return x / y;
};

function operate(x, y) {

    switch(input){
        case '+':
            return add(x,y)
        case '-':
            return subtract(x, y)
        case '*':
            return multiply(x,y)
        case '/':
            return divide(x, y)
    };

};

function receiveInput(buttonClick) {

    switch(buttonClick) {
        case '0':
            return liveDisplay.innerHTML += '0'
        case '1':
            return liveDisplay.innerHTML += '1'
        case '2':
            return liveDisplay.innerHTML += '2'
        case '3':
            return liveDisplay.innerHTML += '3'
        case '4':
            return liveDisplay.innerHTML += '4'
        case '5':
            return liveDisplay.innerHTML += '5'
        case '6':
            return liveDisplay.innerHTML += '6'
        case '7':
            return liveDisplay.innerHTML += '7'
        case '8':
            return liveDisplay.innerHTML += '8'
        case '9':
            return liveDisplay.innerHTML += '9'
    };
};

let numberButtons = Array.from(document.getElementsByClassName('numbers'))
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(e) {
        let buttonClick = this.id
        receiveInput(buttonClick)
    });
};