var kepEleresiut = [
  "kepek/cyberlany.jpg",
  "kepek/medve.jpg",
  "kepek/retro.jpg",
  "kepek/re8.jpg",
];
var kepCim = [
  "Cyber Lány",
  "Medve",
  "Retro Háttérrrrrrrrrrrrrrrrrr",
  "Resident Evil 8",
];
var kepAr = [125125, 1512, 53153, 44444];

/*var kep = {
  kepEleresiut: "kepek/cyberlany.jpg",
  kepCim: "Cyber Lány",
  kepAr: 1111,
};
var kep2 = {
  kepEleresiut: "kepek/medv .jpg",
  kepCim: "Medve",
  kepAr: 2222,
};
var kep3 = {
  kepEleresiut: "kepek/retro.jpg",
  kepCim: "Retro Háttérrrrrrrrrrr",
  kepAr: 3333,
};
var kep4 = {
  kepEleresiut: "kepek/re8.jpg",
  kepCim: "Resident Evil 8",
  kepAr: 4444,
};
*/

var kepeim = [
  (kep = {
    kepEleresiut: "kepek/cyberlany.jpg",
    kepCim: "Cyber Lány",
    kepAr: 1111,
  }),
  (kep2 = {
    kepEleresiut: "kepek/medve.jpg",
    kepCim: "Medve",
    kepAr: 2222,
  }),
  (kep3 = {
    kepEleresiut: "kepek/retro.jpg",
    kepCim: "Retro Háttérrrrrrrrrrr",
    kepAr: 3333,
  }),
  (kep4 = {
    kepEleresiut: "kepek/re8.jpg",
    kepCim: "Resident Evil 8",
    kepAr: 4444,
  }),
];
console.log(kepeim);

var atlgAr=atlagAr();
console.log(atlgAr);

function atlagAr = 0;
    var osszeg = 0;
    for (let index = 0; index < kepAr.length; index++) {
    atlag = kepAr[index] + atlag;
}

for (let index = 0; index < kepeim.length; index++) {
  if (kepeim[index].kepCim.length >= 20) {
    console.log(kepeim[index]);
  }
}

/*Mennyi a képek átlaga?*/
/*Melyik az a kép, amelyik a címe 20 karakternél nagyobb?*/
/*Van-e 10.000-nél drágább kép?*/

var atlag = 0;
for (let index = 0; index < kepAr.length; index++) {
  atlag = kepAr[index] + atlag;
}
console.log("Átlag:", atlag / kepAr.length);

var i = 0;
while (i < kepAr.length && !(kepAr[i] > 10000)) {
  i++;
}
if (i < kepAr.length) {
  console.log("Van 10.000-nél drágább kép");
} else {
  console.log("Nincsen 10.000-nél drágább kép");
}

for (let index = 0; index < kepCim.length; index++) {
  if (kepCim[index].length >= 20) {
    console.log("Leghoszabb kép címe:", kepCim[index]);
  }
}

/* Objektumok */

var szemely = {
  nev: "Béla",
  kor: 12,
  nem: "férfi",
  szemszin: "kék",
};

var szemely2 = {
  nev: "Bjuci",
  kor: 122,
  nem: "nő",
  szemszin: "szürke",
};

console.log(szemely);
szemely.szemszin = "zöld";
console.log(szemely);
szemely.nem = "nő";
console.log(szemely);
console.log(szemely2);
