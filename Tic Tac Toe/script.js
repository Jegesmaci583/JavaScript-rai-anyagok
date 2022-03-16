window.addEventListener("load", init);
    
    function $(elem) {
      return document.querySelector(elem);
    }
var lepes = 0;
function init() {
    var txt="";
    for (let index = 0; index < 9; index++) {
        txt+="<div></div>"
    }
    $("section")[0].innerHTML=txt;
    var elem=$("section div");
    for (let index = 0; index < array.length; index++) {
        elem[index].addEventListener("click",kattintas)
    }
    for (let index = 0; index < array.length; index++) {
        elem[index].addEventListener("mouseover",hatterfel)
        elem[index].addEventListener("mouseover",hatterLe)
}

function hatterfel(){
    event.target.className="kiemel";
}
function hatterLe(){
    event.target.className="";
}
function kattintas(){
    if (lepes % 2 == 0) {
        event.target.innerHTML="X";
    } else{
    event.target.innerHTML="O";
    }
    event.target.removeEventListener("click", kattintas);
    event.target.className = "valasztott";
    }
}