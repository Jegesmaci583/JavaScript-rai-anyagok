var kepeim = [
  {
    kepEleresiut: "kepek/cyberlany.jpg",
    kepCim: "1. kép címe",
    kepAr: 1111,
  },
  {
    kepEleresiut: "kepek/medve.jpg",
    kepCim: "2. kép címe",
    kepAr: 2222,
  },
  {
    kepEleresiut: "kepek/retro.jpg",
    kepCim: "3. kép címe",
    kepAr: 3333,
  },
  {
    kepEleresiut: "kepek/re8.jpg",
    kepCim: "4. kép címe",
    kepAr: 4444,
  },
];

window.addEventListener("load", init);
function ID(elem) {
  return document.getElementById(elem);
}

function init() {
  ID("uzenet").innerHTML = "<h1>Valami</h1>";
  ID("uzenet").innerHTML = "<h1>Képek</h1>";
  var txt = "";
  for (let index = 0; index < kepeim.length; index++) {
    txt += "<div><img src='" +kepeim[index].kepEleresiut +"' alt='" +kepeim[index].kepCim +"' ></div>";
  }
  console.log(ID("kepek"));
  ID("kepek").innerHTML = txt;

  var txtCimek = "<ul>";
  for (let index = 0; index < kepeim.length; index++) {
    txtCimek += "<li>" + kepeim[index].kepCim + "</li>";
  }
  txtCimek+="</ul>";
  ID("cimek").innerHTML = txtCimek;

  var txtArak = "<ul>";
  for (let index = 0; index < kepeim.length; index++) {
    txtArak += "<li>" + kepeim[index].kepAr + "</li>";
  }
  txtArak+="</ul>";
  ID("arak").innerHTML = txtArak;

}
