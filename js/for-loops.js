let numbers = [12, 47, 63, 23, 13, 32, 1, 5];

// for (initialisation; condition ; increment/decrement){}

let sum=0;
for(let i=0; i<numbers.length; i++){
    sum = sum + numbers[i];
}

console.log('Sum = ' + sum);

//2. for-in loop

sum=0;
for(let i in numbers){
    sum += numbers[i];
}

console.log('Sum = ' + sum);

//3. for-of loop

sum=0;
for(let number of numbers){
    sum += number;
}

console.log('Sum = ' + sum);