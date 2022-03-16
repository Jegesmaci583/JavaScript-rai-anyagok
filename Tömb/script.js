var TTT = [{auto:"Opel" ,ar:"1265839"},
        {auto:"Pagani" ,ar:"135124"}, 
        {auto:"Suzuki" ,ar:"412561"},
        {auto:"Honda" ,ar:"1351234"}
    ]

    window.addEventListener("load", init);
    function ID(elem) {
      return document.getElementById(elem);
    }
    function $(elem) {
      return document.querySelector(elem);
    }

    
function init() {
    var txt = "<table>";
    txt += "<tr><th>Autó típusa</th><th>Ár</th></tr>";
    for (let index = 0; index < TTT.length; index++) {
        txt += "<tr>";
        txt += "<td>" + TTT[index].auto+"</td>";
        txt += "<td>" + TTT[index].ar+"</td>";
        txt += "</tr>";      
    }
    txt += "</table>";

    ID("autok").innerHTML = txt;

    /*Fozmázás Js-sel*/
    /*inline stilusok használatával*/


    ID("autok").style.color="red";
    var tdTomb=document.querySelectorAll("td")
    for (let index = 0; index < TTT.length*2; index++) {
    tdTomb[index].style.backgroundColor="yellow";    
    }
    //document.querySelector("#autok").style.backgroundColor="yellow";
    
    //tdTomb[2].style.color="green";

    document.querySelectorAll("td:nth-child(2)").styleColor="green";
    
    /*Eseménykezelők*/
    /*ha a tr tagek vülé viszem az egeret, akkor változzon meg a háttérszín*/
    document.querySelector("tr").addEventListener("mouseover", hatterszinAllitas);
    document.querySelector("tr").addEventListener("mouseout", hatterszinLeAllitas);
    

function hatterszinAllitas(index){
    document.querySelector("tr").style.backgroundColor="grey";
    document.querySelector("tr").className="formazas";
}

function hatterszinLeAllitas(index){
    document.querySelector("tr").style.backgroundColor="white";
    document.querySelector("tr").className="";
    }
}