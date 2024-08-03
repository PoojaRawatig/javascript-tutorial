//get current date time
let date = new Date();
console.log(date);

//get custom date
let customDate = new Date("2023-01-01")
console.log(customDate);

// new Date(year,month,day,hour,minutes,second,millisecond) 
customDate = new Date(2020,3,14,9,30,45,23)
console.log(customDate);

//get date
let datePart = customDate.getDate();
console.log(datePart)

//get month
let month = customDate.getMonth();
console.log(month);

//get year
let year = customDate.getFullYear();
console.log(year);

//change year
customDate.setFullYear(2019);
console.log(customDate);

console.log(typeof customDate)

//convert date to string
console.log(typeof customDate.toDateString())