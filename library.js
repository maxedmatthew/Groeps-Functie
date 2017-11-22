document.getElementById("persons").innerHTML =
personen[0].vNaam;





if(personen[0].Status == "Online" && personen[1].Status == "Online" ){ //checken of persoon 2 online is
        
        document.getElementById("persons").innerHTML =
        personen[0].vNaam + ' is momenteel online en heeft ' + personen[0].Permissie +' toegang tot de omgeving <br><br>' 
        + personen[1].vNaam + ' is momenteel online en heeft ' + personen[1].Permissie +' toegang tot de omgeving' ; 
        
        
}
else if (personen[0].Status == "Online" && personen[1].Status == "Offline") {
        
        document.getElementById("persons").innerHTML =
        personen[1].vNaam +" is helaas niet online ";
        var persoon2 = persoon;
        
        '<br>'
         
}
    
else{
        
        document.getElementById("persons").innerHTML =
        personen[1].vNaam +" is helaas niet online ";
        var persoon2 = persoon;
        
}
    
function myFunction() { //wanneer je op de buton klikt voeg je een gebruiker toe

   
        document.getElementById("persons").innerHTML =
        personen[0].vNaam + 'is momenteel online en heeft ' + personen[0].Permissie +' toegang tot de omgeving <br><br>' 
        + personen[1].vNaam + ' is momenteel online en heeft ' + personen[1].Permissie +' toegang tot de omgeving' +
        '<br><br> je hebt zojuist ' + personen[2].vNaam + personen[2].aNaam + ' toegevoegd aan de gebruikers, hij heeft ' + personen[2].Permissie + ' toestemming voor de omgeving';
    
}

function changeOnline() { // toegevoegde fuctie, online
    
    // for (var i = 0; i <= 2; i++) {
    // console.log('Line ' + i);
    //    if(personen[i].Permissie == 'wel'){
            
    //        console.log('bier'); 
            
    //    }     
    // console.log(personen[i].Permissie);
    //}

    console.log('Functie Change Online');
    
    if(personen[0].Permissie == 'wel'){
        
        document.getElementById("persons").innerHTML =  
        personen[0].vNaam + ' heeft ' + personen[0].Permissie + ' al permissie!'
        
    }
    else if(personen[0].Permissie == 'geen'){
        
        document.getElementById("persons").innerHTML = 
        personen[0].vNaam + ' Heeft nu ' + personen[0].Permissie + ' Permissie!'
        personen[0].Permissie = 'wel';
        
  
    }
    
}

