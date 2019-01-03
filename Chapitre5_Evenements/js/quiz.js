// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse

//
//
//
// PAS TERMINER CELA NE FONCTIONNE PAS QUAND ON CLICK C4EST SEULEMENT LA DERNIERE REPONSE QUI S EFFACE !!!!!
//
//
//


var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

for (var i=0;i<questions.length;i++){

      var pElt      = document.createElement("p");
      var bElt      = document.createElement("b");
      var iElt      = document.createElement("i");

      var zoneDeReponseElt = document.createElement("div");
      var buttonElt = document.createElement("button");

      pElt.appendChild(bElt);
      pElt.appendChild(iElt);
      zoneDeReponseElt.appendChild(buttonElt);

      bElt.textContent      = "Question " + (i+1) + " : ";
      iElt.textContent      = questions[i].enonce;
      buttonElt.textContent = "Afficher la réponse";

      buttonElt.addEventListener("click", function(){
              zoneDeReponseElt.innerHTML ="";

        });

      document.getElementById("contenu").appendChild(pElt);
      //document.getElementById("contenu").appendChild(buttonElt);
      document.getElementById("contenu").appendChild(zoneDeReponseElt);




        /*
        var quizElt = document.createElement("i");
        var boltElt = document.createElement("b");
        boltElt.textContent = "Question " + (i+1) + " : ";
        quizElt.appendChild(boltElt);

        quizElt.textContent = questions[i].enonce;
        document.getElementById("contenu").appendChild(boltElt);
        document.getElementById("contenu").appendChild(quizElt);
        */
        //console.log("Question " + (i+1) + " : " + questions[i].enonce);


}
