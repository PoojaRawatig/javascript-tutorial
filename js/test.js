function addItem(){
    let input = document.getElementById("item");
    let itemName = input.value;
    input.value = '';
    console.log(itemName);

    let todoList = document.getElementById('to-do-list');
    let listItem = document.createElement("li");
    let textNode = document.createTextNode(itemName);
    let span = document.createElement("span");
    span.innerHTML = 'X';
    listItem.appendChild(textNode);
    listItem.appendChild(span)
    todoList.appendChild(listItem);

}

function onItemClick(event){
    let targetElement = event.target;
    
    if(targetElement.tagName == 'SPAN'){
        //remove element
        targetElement.parentElement.remove();
    }else{
        //cross element
        targetElement.style.textDecoration = "line-through";
    }
}