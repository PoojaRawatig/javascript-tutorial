let newPara = document.createElement("p");
let text = document.createTextNode("New Created Paragraph");
newPara.appendChild(text);

let body = document.body;
body.appendChild(newPara);  