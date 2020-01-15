function add(x, y) {
    return x + y
}

function subtract(x, y) {
    return x - y
}

function multiply(x, y) {
    return x * y
}

function divide(x, y) {
    return x / y
}


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

    }
}