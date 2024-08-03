// 2 ways to declare array 

let array = ['aman', 'abhishek','pooja','ajay','akash','umesh']
array = new Array('aman', 'abhishek','pooja','ajay','akash','umesh')

console.log(array);

console.log(array[0]);  // 0 index value

console.log(array[3]);  //3rd index value

array[0] = 'Hello';
console.log(array);

console.log(array[7]);

// find length of an array 
console.log(array.length);

//convert array to string
let names = array.toString();
console.log(names);

names = array.join("-")
console.log(names);

//get subarray from an array
let smallArray = array.slice(2,4);
console.log(smallArray);

// add new value in end of array 
array.push(123);
console.log(array);

// remove value from end of an array 
let removedValue = array.pop();
console.log('removed value = ' + removedValue);
console.log(array)

// add new value in start of an array 
array.unshift(123);
console.log(array);

//remove value from start of an array
removedValue = array.shift();
console.log('removed value = ' + removedValue);
console.log(array)

//sort the array values
array.sort();
console.log(array);

//reverse the array
array.reverse();
console.log(array);