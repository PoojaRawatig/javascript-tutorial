// <40 -> fAIL 
// 40 - 60  -> C 
// 60 - 80  -> B 
// 80 - 100 -> A


let marks = 60
let grade;

if(marks <= 40){
    grade = 'FAIL'
} else if(marks > 40 && marks <= 60){
    grade = 'C';
}else if(marks > 60 && marks<= 80){
    grade = 'B';
}else{
    grade = 'A';
}

console.log(grade)