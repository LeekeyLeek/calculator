const liveDisplay = document.querySelector('.display')

const storedVariables = {
    Number1: '',
    Number2: '',
};

//Functions
function add(x, y) {
    x = parseInt(storedVariables.Number1)
    y = parseInt(storedVariables.Number2)
    console.log(x + y)
    return x + y;
};

function subtract(x, y) {
    x = parseInt(storedVariables.Number1)
    y = parseInt(storedVariables.Number2)
    console.log(x - y)
    return x - y;
};

function multiply(x, y) {
    x = parseInt(storedVariables.Number1)
    y = parseInt(storedVariables.Number2)
    console.log(x * y)
    return x * y;
};

function divide(x, y) {
    x = parseInt(storedVariables.Number1)
    y = parseInt(storedVariables.Number2)
    console.log(x / y)
    return x / y;
};

function operate(choice) {

    switch(choice){
        case '+':
            console.log(`Evaluating the sum of ${storedVariables.Number1} and 
${storedVariables.Number2} now.`)
            add()
            return
        case '-':
            console.log(`Evaluating the difference between
            ${storedVariables.Number1} and ${storedVariables.Number2} now.`)
            subtract()
            return
        case '*':
            console.log(`Evaluating the sum of ${storedVariables.Number1} and 
${storedVariables.Number2} now.`)
            multiply()
            return
        case '/':
            console.log(`Dividing between ${storedVariables.Number1} and 
${storedVariables.Number2} now.`)
            divide()
            return
    };

};

let choice = false
function receiveInput(buttonClick) {
    console.log(typeof(choice))
    switch(buttonClick) {
        // Numbers
        case '0':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '0'
            } else {storedVariables.Number2 += '0'}

            return liveDisplay.innerHTML += '0'

        case '1':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '1'
            } else {storedVariables.Number2 += '1'}

            return liveDisplay.innerHTML += '1'

        case '2':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '2'
            } else {storedVariables.Number2 += '2'}

            return liveDisplay.innerHTML += '2'

        case '3':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '3'
            } else {storedVariables.Number2 += '3'}

            return liveDisplay.innerHTML += '3'

        case '4':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '4'
            } else {storedVariables.Number2 += '4'}

            return liveDisplay.innerHTML += '4'

        case '5':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '5'
            } else {storedVariables.Number2 += '5'}

            return liveDisplay.innerHTML += '5'

        case '6':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '6'
            } else {storedVariables.Number2 += '6'}
            
            return liveDisplay.innerHTML += '6'

        case '7':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '7'
            } else {storedVariables.Number2 += '7'}

            return liveDisplay.innerHTML += '7'

        case '8':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '8'
            } else {storedVariables.Number2 += '8'}

            return liveDisplay.innerHTML += '8'

        case '9':
            console.log(typeof(choice))

            if (choice == false) {
                storedVariables.Number1 += '9'
            } else {storedVariables.Number2 += '9'}

            return liveDisplay.innerHTML += '9'

        case '.':
            return liveDisplay.innerHTML += '.'

        
        // Operators     
        case '+':
            choice = '+'
            liveDisplay.innerHTML += '+'
            return 
        case '-':
            choice = '-'
            liveDisplay.innerHTML += '-'
            return 
        case '*':
            choice = '*'
            liveDisplay.innerHTML += '*'
            return 
        case '/':
            choice = '/'
            liveDisplay.innerHTML += '/'
            return 
        case '=':
            operate(choice)
            return
    };
};

// Buttons
let numberButtons = Array.from(document.getElementsByClassName('numbers'))
for (let i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', function(e) {
        let buttonClick = this.id
        receiveInput(buttonClick)
    });
};

let operatorButtons = Array.from(document.getElementsByClassName('operations'))
for (let i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', function(e) {
        let buttonClick = this.id
        receiveInput(buttonClick)
    });
};