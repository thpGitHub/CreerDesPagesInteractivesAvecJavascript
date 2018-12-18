function infosliens (){

	var totalElts = document.getElementsByTagName("a");

	var nbElts = totalElts.length;

	console.log(nbElts);

	console.log(totalElts[0].getAttribute("href"));
	console.log(totalElts[nbElts -1].getAttribute("href"));


}

infosliens();