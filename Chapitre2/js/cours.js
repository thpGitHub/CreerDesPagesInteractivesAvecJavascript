var titresElts = document.getElementsByTagName("h2"); // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3


// Tous les éléments ayant la classe "merveilles"
var merveillesElts = document.getElementsByClassName("merveilles");
for (var i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Elément portant l'identifiant "nouvelles"

console.log(document.getElementById("nouvelles"));

 var aElts= document.getElementsByClassName("merveilles");
 console.log(aElts[0]);

 console.log(document.getElementsByClassName("existe"));

 console.log(document.querySelectorAll(".existe"));

 console.log(document.querySelectorAll("#antiques > .existe"));