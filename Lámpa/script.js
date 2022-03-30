var lámpa = document.getElementsByClassName("light");

function allOff() {
  for (var i=0; i<lámpa.length; i = i+1) {
    lámpa[i].classList.remove("on");
  }
}

function switchLight(lightNumber) {
  allOff();
  var light = lámpa[lightNumber];
  light.classList.add("on");
}
