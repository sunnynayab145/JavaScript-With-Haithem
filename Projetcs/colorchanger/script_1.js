const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function(button) {
    console.log(button);
button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);
    // For Grey color
    if(e.target.id === "grey"){
        body.style.backgroundColor = e.target.id;
    }
    //For white Color
    if(e.target.id === "white"){
        body.style.backgroundColor = e.target.id;
    }
    //For blue Color
    if(e.target.id === "blue"){
        body.style.backgroundColor = e.target.id;
    }
    //For yellow Color
    if(e.target.id === "yellow"){
        body.style.backgroundColor = e.target.id;
    }
    })
});