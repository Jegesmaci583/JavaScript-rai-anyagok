window.addEventListener("load", init);
var tomb =[];
function ID(elem){
    return document.getElementById(elem);
}

function $(elem){
    return document.querySelectorAll(elem);
}
function init(){
    var foo = $("footer p")[0];
    foo.innerHTML = "Balogh Viktor";
    foo.style.textAlign = "center";
    foo.style.backgroundColor = "lightblue";
    foo.style.fontSize = "20px";

    var kepek = $("#bal img");
    console.log(kepek);
    for (let index = 0; index < kepek.length; index++) {
        kepek[index].addEventListener("click", kattint);
        kepek[index].addEventListener("mouseover", huzfel);
        kepek[index].addEventListener("mouserout", huzle);
    }
}
function huzfel(event){
    event.target.classList.add = "kiemel";
}
function huzle(event){
    event.target.classList.remove="kiemel";
}

function kattint() {
    var eleresiut = event.target.src;
    tomb.push(eleresiut)
var kep=`<img src='${event.target.src}' alt='${event.target.src}' >`
var kep= "<img src='" + event.target.src + "' alt='" + event.target.alt + "'>
    $("article #csonak")[0].innerHTML += kep
}
