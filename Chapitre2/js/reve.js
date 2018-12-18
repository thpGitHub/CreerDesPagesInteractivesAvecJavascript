// TODO : écrire la fonction compterElements


function compterElements(element) {
	var retour = document.querySelectorAll(element).length;
	return retour;
}

console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements("adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2

