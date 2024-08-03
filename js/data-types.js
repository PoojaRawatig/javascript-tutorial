// Primitive Data Types 

// string 
let name = 'aman';
console.log(name)
console.log(typeof name)

// number 

// i) without decimal 
let age = 15;
console.log(age)
console.log(typeof age)

// ii) with decimal 
let marks = 87.5
console.log(marks)
console.log(typeof marks)

// BigInt - it is used to store large numbers (greater than 2^53-1)

// 1st way to define big int 
let phoneNumber = 92872233212n

// 2nd way to define BigInt 
phoneNumber = BigInt(92872233212)

console.log(phoneNumber)
console.log(typeof phoneNumber)

// Boolean  - takes true or false values
let flag = true
console.log(flag)
console.log(typeof flag)

//undefined - variable not declared
let xyz;
console.log(xyz);
console.log(typeof xyz)

//null 
let email = null;
console.log(email);
console.log(typeof email)


// Non Primitive 

// arrays 

let array = ['aman', 123, true]
console.log(array)
console.log(typeof array)

//object 

let person = {
    name : 'Aman',
    age : 25,
    email : 'aman@gmail.com',
    married : false
}

console.log(person)
console.log(typeof person)

