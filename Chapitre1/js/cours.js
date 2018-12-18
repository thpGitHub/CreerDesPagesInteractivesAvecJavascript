let h = document.head;
console.log(h);

let b = document.body;
console.log(b);

if (document.body.nodeType === document.ELEMENT_NODE) {
	console.log("body est un noeud élément");
}else{console.log("body est un noeud texte");
}

console.log(document.body.childNodes[1]);
