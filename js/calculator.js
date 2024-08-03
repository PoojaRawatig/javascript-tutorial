let expression = '';
let inputScreen = document.getElementById('input-screen');

function appendInput(value){
    expression += value;
    inputScreen.value = expression;
}

function calculate(){
    expression = eval(expression);
    inputScreen.value = expression;
}

function reset(){
    expression = '';
    inputScreen.value = '0'
}