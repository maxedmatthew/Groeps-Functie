var groepsfunctie = ( function(){
    
var aantalPersonen = personen.length;
    
var Tabel = document.createElement("TABLE");
     document.body.appendChild(Tabel);

var tabelrij = document.createElement("tr");
    Tabel.appendChild(tabelrij);

// Tabel kolom namen aanmaken
var addKolomNaam = ( function(){
    
    for (var i = 0; i < 4; i++){

        var tdHead = document.createElement("th");
        tabelrij.appendChild(tdHead);
        tdHead.innerHTML = "test";
    
        if(i == 0){
            
             tdHead.innerHTML = "Naam";
        } else if(i == 1){
        
            tdHead.innerHTML = "Status";
        } else if(i == 2){
        
             tdHead.innerHTML = "Permissie";
        } else if(i == 3){
        
            tdHead.innerHTML = "Verander Permissie";
        }
   
    }

})();
  
   
    

// Tabel invullen met waardes
var addTabel = ( function(){
    
    for (var i = 0; i < aantalPersonen; i++){
    
         var ChangePermissieBtn = document.createElement('BUTTON');
        ChangePermissieBtn.innerText = 'Klik op mij';
        ChangePermissieBtn.onclick = function testFunctie(){
        
        }
   
  
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
    
    
    
        // Alle kolommen worden gevuld met de juiste informatie
        tdNaam.innerHTML = personen[i].vNaam + " " + personen[i].aNaam;
        tdStatus.innerHTML = personen[i].Status;
        tdPermissie.innerHTML = personen[i].Permissie;
        tdChangePermissie.appendChild(ChangePermissieBtn);
    
    
    }
    
})();
    
    
function addPersoontoDB(){
    
    name = document.getElementById("newFirstname").value;
    lastname = document.getElementById("newLastname").value;
    permissie = document.getElementById("newPermissie").value;
    
    var nieuwpersoon = {vNaam:name, aNaam:lastname, Status:"Offline", Permissie:permissie};
    personen.push(nieuwpersoon);
     
    //document.getElementById("nameList").innerHTML = names.toString();   
    console.log(personen);
    

    
    (function addNewPerson(){
        
         var ChangePermissieBtn = document.createElement('BUTTON');
        ChangePermissieBtn.innerText = 'Klik op mij';
        ChangePermissieBtn.onclick = function testfunctie(){
            
            nieuwpersoon.Permissie == "test";
        };
    
        var tabelrij = document.createElement("tr");
        Tabel.appendChild(tabelrij);
    
        // Alle kolommen worden aangemaakt
        var tdNaam = document.createElement("td");
        var tdStatus = document.createElement("td");
        var tdPermissie = document.createElement("td");
        var tdChangePermissie = document.createElement("td");
        
        tabelrij.appendChild(tdNaam);
        tabelrij.appendChild(tdStatus);
        tabelrij.appendChild(tdPermissie);
        tabelrij.appendChild(tdChangePermissie);
     
        
        tdNaam.innerHTML = name;
        tdStatus.innerHTML = lastname;
        tdPermissie.innerHTML = permissie;
        tdChangePermissie.appendChild(ChangePermissieBtn);
        
        
    })();
    
   

} 

    return {
        
        addPersoontoDB: addPersoontoDB
        
    }

})()    



    
    
    
