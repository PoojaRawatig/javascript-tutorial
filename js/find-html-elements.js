let heading = document.getElementById("heading");
console.log(heading.innerHTML);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);

for(let paragraph of paragraphs){
    console.log(paragraph.innerHTML);
}

let selectedParagraphs = document.getElementsByClassName("para");
console.log(selectedParagraphs);