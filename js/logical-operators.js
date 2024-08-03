// Logical Operators 
let flag1 = false;
let flag2 = false;

// And Operator 
let flag3 = flag1 && flag2 && 4<5;
console.log(flag3)

// OR Operator 
let flag4 = flag1 || flag2 || 3>2;
console.log(flag4);

// Combination of OR & AND 
let flag5 = ((3>2 && 5<4) || flag1)
console.log(flag5)

// Not Operator 
let flag6 = !flag1;
console.log(flag6);