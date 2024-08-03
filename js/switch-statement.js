// <40 -> fAIL 
// 41 - 60  -> C 
// 61 - 80  -> B 
// 81 - 100 -> A

let marks = 50;
let grade;

switch (true) {
    case marks < 40 :
        grade='D'
        break;
    case marks >= 40 && marks < 60 :
        grade = 'C'
        break;
    case marks >= 61 && marks < 80 : 
        grade = 'B'
        break;
    default : 
        grade = 'A'
        break;
}

console.log(grade);

let day;
switch(new Date().getDay()){
    case 0 : 
        day = 'SUNDAY';
        break;
    case 1 : 
        day = 'MONDAY';
        break;
    case 2 : 
        day = 'TUESDAY';
        break;
    case 3 : 
        day = 'WEDNESDAY';
        break;
    case 4 : 
        day = 'THURSDAY';
        break;
    case 5 : 
        day = 'FRIDAY';
        break;
    case 6 : 
        day = 'SATURDAY';
        break;
}

console.log(day);