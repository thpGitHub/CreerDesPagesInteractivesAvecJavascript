var essaiElt = getComputedStyle(document.getElementById('infos'));
//var hauteurElt=essaiElt.height;
//console.log(hauteurElt);
console.log(essaiElt.height);
console.log(essaiElt.width);

var paragraphe = document.createElement("p");
paragraphe.textContent = "Information sur l'élément";

var vu = document.createElement("ul");
var liHauteur = document.createElement("li");
liHauteur.textContent = "Hauteur : " + essaiElt.height;
var liLargeur = document.createElement("li");
liLargeur.textContent = "Largeur : "+ essaiElt.width;

vu.appendChild(liHauteur);
vu.appendChild(liLargeur);
document.getElementById("infos").appendChild(paragraphe);
document.getElementById("infos").appendChild(vu);


