
document.addEventListener("keypress", function(e){
          var key = String.fromCharCode(e.charCode);
          key=key.toUpperCase();
          //console.log(key);
          var color = "";

          switch (key){
                      case "R":
                              color="red";
                              break;
                      case "Y":
                              color="yellow";
                              break;
                      case "G":
                              color="green";
                              break;
                      case "B":
                              color="blue";
                              break;
                      default :
                              console.log(`${key} It's not an authorized key (R,Y,G,B)`);
                        }

          var divElt=document.getElementsByTagName("div");
              for(var i=0;i<divElt.length;i++){
                      divElt[i].style.backgroundColor=color;


          }


  })
