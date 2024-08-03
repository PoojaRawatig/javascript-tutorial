let numbers = [12, 47, 63, 23, 13, 32, 1, 5];
let sum=0;

// while(condition) {}

let i=0;
while(i<numbers.length){
    sum += numbers[i];
    i++;
}

console.log(sum);

//2. do{} while(condition) 
debugger;
i=0;
sum=0;
do {
    sum += numbers[i]
    i++;
}while(i<numbers.length)

console.log(sum);

