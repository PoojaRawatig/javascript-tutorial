// object = {key:value} 

let person = {
    firstName : 'Aman',
    lastName : 'Mehta',
    height : 5.7,
    fullName : function getFullName(){
        return this.firstName + " " + this.lastName;
    }
}

// access properties of object 

// 1st way 
let firstName = person.firstName;
console.log(firstName); 

// 2nd way 
let lastName = person["lastName"];
console.log(lastName);

let fullName = person.fullName();
console.log(fullName);