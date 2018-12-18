document.getElementById("langages").innerHTML += '<li id="c">C</li>';

//document.getElementById('langages').innerHTML = '';

document.querySelector("h1").textContent += " de programmation";

document.querySelector("h1").id = "titre";


var titreElt = document.querySelector("h1"); // Accès au premier titre h1
titreElt.classList.remove("debut");// Suppression de la classe "debut"
titreElt.classList.add("titre");// Ajout de la classe "titre"
console.log(titreElt);

// commentaire pour github
