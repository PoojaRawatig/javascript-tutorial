let isDarkMode = false;

function switchMode(){
    let body = document.body;
    let heading = document.getElementById("heading1");
    let button = document.getElementById("switchModeBtn");

    if(isDarkMode){
        //turn into light mode
        body.style.backgroundColor = "#ffffff";
        heading.style.color = "#000000";
        button.style.backgroundColor = "#d3d3d3";
        heading.innerHTML = "Welcome to Light Mode";
        isDarkMode = false;
    }else{
        //turn into dark mode  
        body.style.backgroundColor = "#000000";
        heading.style.color = "#ffffff";
        button.style.backgroundColor = "#ffffff";
        heading.innerHTML = "Welcome to Dark Mode";
        isDarkMode = true;
    }
    
}