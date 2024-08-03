function clickHandler(){
    console.log("click event occured");
    let paragraph = document.getElementById("p1");
    paragraph.innerHTML = "Thanks for clicking";
}

function onMouseOverHandler(){
    let paragraph = document.getElementById("p2");
    paragraph.innerHTML = "Mouse Over Occured";
}

function onMouseOutHandler(){
    let paragraph = document.getElementById("p2");
    paragraph.innerHTML = "Mouse Out Occured";
}