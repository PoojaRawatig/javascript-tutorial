// Comparsion Operators 

// Equality Check 
let num1 = 4;
let num2 = 4;
console.log(num1 == num2);

num1 = '4';
num2 = 4;
console.log(num1 == num2);  //only value check

console.log(num1 === num2); // value and type check

console.log(num1 != num2);  //only value check

console.log(num1 !== num2); //value and type check

// Greater Than

console.log(3 > 5);   //false

// Greater Than Equals to 

console.log(6 >= 6)  //true
console.log(9 >= 6)  //true
console.log(3 >= 6)  //false

// Less Than 
console.log(3 < 5);   //true

// Less Than Equals To 
console.log(6<=8);  //true

//Ternary Operator
let flag = false;
let ans = flag ? "YES" : "NO";
console.log(ans);