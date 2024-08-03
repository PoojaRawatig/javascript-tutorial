function addListItem(){
    let listItem = document.createElement("li");
    let div = document.createElement("div");
    let item = document.getElementById('item');
    let text = document.createTextNode(item.value);
    let span = document.createElement('span');
    let Xtext = document.createTextNode('X');
    span.appendChild(Xtext);
    div.appendChild(text);
    div.appendChild(span);
    listItem.appendChild(div);

    let todoList = document.getElementById('list');
    todoList.appendChild(listItem);
    item.value='';
}

function onItemClick(e){
    let todoList = document.getElementById('list');
    let targetElement = e.target;
    if(targetElement.tagName.toLowerCase() === 'span'){
        let div = targetElement.parentElement;
        let li = div.parentElement;
        li.remove();
    }

}

//Number guessing game
// Calculator using HTML, CSS & JS