var buttonIdElt = document.getElementsByTagName("button");
buttonIdElt[0].id="button";

var buttonElt = document.getElementById("button");
buttonElt.addEventListener("click",ajouterDessert);

function ajouterDessert(){
          //console.log("It works !");
          var dessertElt=document.createElement("li");
          var nouveauDessert=prompt("please enter a new dessert");
          dessertElt.textContent=nouveauDessert;
          document.getElementById("desserts").appendChild(dessertElt);

          dessertElt.addEventListener("click", function(event){
                var newName=prompt("Please enter new name of desserts : "+ event.target.textContent);
                dessertElt.textContent=newName;
    })
};




//console.log(buttonElt);
