
var counter = 0;

function clic(){
            counter++;
            document.getElementById("compteurClics").textContent = counter;
}

document.getElementById("clic").addEventListener("click",clic);

document.getElementById("desactiver").addEventListener("click",function(){
            document.getElementById("clic").removeEventListener("click",clic)

  });
