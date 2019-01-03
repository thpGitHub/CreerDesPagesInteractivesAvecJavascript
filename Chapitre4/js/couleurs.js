var couleurText=prompt("Veuillez entrer une couleur");
var couleurFond=prompt("Veuillez entrer une couleur de fond");

var divElt=document.getElementsByTagName("div");

for (var i=0; i<divElt.length;i++){
		divElt[i].style.backgroundColor=couleurFond;
		divElt[i].style.color=couleurText;





}