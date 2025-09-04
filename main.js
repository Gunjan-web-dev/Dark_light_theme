const btn = document.getElementById("btn");

function changeBackground(){
    if(document.body.style.background === "white" || document.body.style.background === ""){
        document.body.style.background = "black";
        btn.innerHTML = "Light Mode";
        btn.style.background = "white";
        btn.style.color = "black";
    }else if(document.body.style.background === "black"){
        document.body.style.background = "white";
        btn.innerHTML = "Dark Mode";
        btn.style.background = "black";
        btn.style.color = "white";
    }
}