let paragraph = document.getElementById("p1");
let secondParagraph = document.getElementById("p2");

paragraph.addEventListener("click", changeParagraphColor)
function changeParagraphColor(){
    paragraph.style.color = "red";
}

//using arrow function
secondParagraph.addEventListener("click", () => {
    secondParagraph.style.color = "blue";
})


