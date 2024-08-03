// function functionName() { code } 

function printHello(){
    console.log("Hello World");
}

printHello();  //function call

function sum(num1, num2){
    let sum = num1+num2;
    console.log("Sum = " + sum);
}

sum(3, 5);

//function with return values

function multiply(num1,num2){
    let product = num1*num2;
    return product;
}

let multiplication = multiply(2,5);
console.log(multiplication);

// arrow functions 
multiplyFunction = (num1,num2) => num1*num2;


multiplication = multiplyFunction(3,6);
console.log(multiplication)