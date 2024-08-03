let p1 = document.getElementById("p1");
let parent = p1.parentNode;
console.log(parent);

let allParas = parent.children;
console.log(allParas);

for(let p  of allParas){
    console.log(p.innerHTML);
}

console.log(parent.firstChild);