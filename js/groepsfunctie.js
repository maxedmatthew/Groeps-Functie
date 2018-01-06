var groepsfunctie = ( function(){
    
var aantalPersonen = personen.length;
    
var Tabel = document.createElement("TABLE");
     document.body.appendChild(Tabel);

var tabelrij = document.createElement("tr");
Tabel.appendChild(tabelrij);


    

// Tabel kolom namen aanmaken
function KolomnaamToevoeg(kolomaantal ,kn1, kn2, kn3, kn4, kn5, kn6){
   
    
    for (var i = 0; i < kolomaantal; i++){

        var tdHead = document.createElement("th");
        tabelrij.appendChild(tdHead);
        tdHead.innerHTML = "test";
        
    
        if(i == 0){
        
            tdHead.innerHTML = kn1;
        
        } else if(i == 1){
            
                tdHead.innerHTML = kn2;
            
        } else if(i == 2){
    
                tdHead.innerHTML = kn3;
            
        } else if(i == 3){
            
                tdHead.innerHTML = kn4;            
        }
            else if(i == 4){
                
                if (kn5 == undefined){
                    tdHead.innerHTML = "Extra Kolom";
                }
                else{
                    tdHead.innerHTML = kn5;
                }
        }
           else if(i == 5){

                if (kn6 == undefined){
                    tdHead.innerHTML = "Extra Kolom";
                }
                else{
                    tdHead.innerHTML = kn6;
                }
        }
      
   
    }

}
    
  

// Tabel invullen met waardes
function addTabel(n){
    
    
    for (var i = 0; i < aantalPersonen; i++){
    
        var ChangePermissieBtn = document.createElement('BUTTON');
        ChangePermissieBtn.innerText = 'Verwijder';
        ChangePermissieBtn.onclick = function testfunctie(){
            console.log("test");
        };
   
  
        // Alle rijen worden aangemaakt, aantal rijen ligt aan lengte van array.
        var tabelrij = document.createElement("tr");
        Tabel.appendChild(tabelrij);
    
        // Alle kolommen worden aangemaakt
        var tdNaam = document.createElement("td");
        var tdStatus = document.createElement("td");
        var tdPermissie = document.createElement("td");
        var tdChangePermissie = document.createElement("td");
        
        
        // Alle kolommen worden toegevoegd aan HTML
        tabelrij.appendChild(tdNaam);
        tabelrij.appendChild(tdStatus);
        tabelrij.appendChild(tdPermissie);
        tabelrij.appendChild(tdChangePermissie);
        
        if (n >= 5){
        var tdID = document.createElement("td");
        tabelrij.appendChild(tdID);
        tdID.innerHTML = personen[i].code;
        }
    
    
        // Alle kolommen worden gevuld met de juiste informatie
        tdNaam.innerHTML = personen[i].vNaam + " " + personen[i].aNaam;
        tdStatus.innerHTML = personen[i].Status;
        tdPermissie.innerHTML = personen[i].Permissie;
        tdChangePermissie.appendChild(ChangePermissieBtn);
    
    
    }
    
}
    

function makeid(){
  
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
    
}
  
    
function addPersoontoDB(){
    
    name = document.getElementById("newFirstname").value;
    lastname = document.getElementById("newLastname").value;
    permissie = document.getElementById("newPermissie").value;
    
    var nieuwpersoon = {vNaam:name, aNaam:lastname, Status:"Offline", Permissie:permissie, test:"1E2MS"};
    personen.push(nieuwpersoon);
     
    //document.getElementById("nameList").innerHTML = names.toString();   
    console.log(personen);
    

    
    function addNewPerson(n){
        
        var ChangePermissieBtn = document.createElement('BUTTON');
        ChangePermissieBtn.innerText = 'Verwijder';
        ChangePermissieBtn.onclick = function testfunctie(){
            console.log("test");
        };
   
  
        // Alle rijen worden aangemaakt, aantal rijen ligt aan lengte van array.
        var tabelrij = document.createElement("tr");
        Tabel.appendChild(tabelrij);
    
        // Alle kolommen worden aangemaakt
        var tdNaam = document.createElement("td");
        var tdStatus = document.createElement("td");
        var tdPermissie = document.createElement("td");
        var tdChangePermissie = document.createElement("td");
      
    
        // Alle kolommen worden toegevoegd aan HTML
        tabelrij.appendChild(tdNaam);
        tabelrij.appendChild(tdStatus);
        tabelrij.appendChild(tdPermissie);
        tabelrij.appendChild(tdChangePermissie);
        
        if (n >= 5){
        var tdID = document.createElement("td");
        tabelrij.appendChild(tdID);
        tdID.innerHTML = (makeid());
            }
        
        tdNaam.innerHTML = name;
        tdStatus.innerHTML = lastname;
        tdPermissie.innerHTML = permissie;
        tdChangePermissie.appendChild(ChangePermissieBtn);
        
        
    }
    
    new addNewPerson(grootte);
    
   

} 
    
var grootte = 5;
new KolomnaamToevoeg(grootte,'Naam','Status','Permissie','Delete', 'ID','Reginald');
new addTabel(grootte);

    return {
        
        addPersoontoDB: addPersoontoDB,
        KolomnaamToevoeg: KolomnaamToevoeg
        
    }

})()    



    
    
    
