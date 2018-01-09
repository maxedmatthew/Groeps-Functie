var groepsfunctie = (function () {

    // Het maken van de tabel + het toevoegen aan de body
    var Tabel = document.createElement("TABLE");
    document.body.appendChild(Tabel);
    var tabelrij = document.createElement("tr");
    Tabel.appendChild(tabelrij);

    // Een array met een test-object erin aanmaken 
    var personen = [
        {
            vNaam: "Erik",
            aNaam: "van Kampen",
            Status: "ADMIN",
            Permissie: "wel",
            code: "21E4D"
        }];

    var aantalPersonen = personen.length;


    // Functie die de namen van de kolommen aanmaakt + invult
    function KolomnaamToevoeg(kolomaantal, kn1, kn2, kn3, kn4, kn5, kn6) {


        for (var i = 0; i < kolomaantal; i++) {

            // Aanmaken van de "th" elementen, ook wel de Tabel Header
            var tdHead = document.createElement("th");
            tabelrij.appendChild(tdHead);
            // De Tabel Header Elementen een standaard waarde geven
            tdHead.innerHTML = "Kolom";


            if (i == 0) {

                // De tabel header met een waarde die je hebt meegegeven
                tdHead.innerHTML = kn1;

            } else if (i == 1) {

                tdHead.innerHTML = kn2;

            } else if (i == 2) {

                tdHead.innerHTML = kn3;

            } else if (i == 3) {

                tdHead.innerHTML = kn4;
            } else if (i == 4) {

                // Kijken of je een waarde hebt meegegeven, mocht dit niet zo zijn wordt hij automatisch "extra kolom" genoemd.
                if (kn5 == undefined) {
                    tdHead.innerHTML = "Extra Kolom";
                } else {
                    tdHead.innerHTML = kn5;
                }
            } else if (i == 5) {

                if (kn6 == undefined) {
                    tdHead.innerHTML = "Extra Kolom";
                } else {
                    tdHead.innerHTML = kn6;
                }
            }


        }

    }



    // Het invullen van de eerder gecreerde tabel met waardes
    function addTabel(n) {


        for (var i = 0; i < aantalPersonen; i++) {

            // Aanmaken van de knoppen in de Tabel
            var ChangePermissieBtn = document.createElement('BUTTON');
            ChangePermissieBtn.innerText = 'Verwijder';
            ChangePermissieBtn.onclick = function testfunctie() {
                alert("Deze functie werkt niet aangezien dat niet het meest belangrijke was!");
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

            // Als je de grootte van de tabel hoger hebt gezet dan vier, voegt hij een 'ID' kolom toe
            if (n >= 5) {
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


    // Functie die een random ID aanmaakt voor de gebruiker
    function makeid() {

        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

        for (var i = 0; i < 5; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));

        return text;

    }

    // Functie die ervoor zorgt dat de gebruiker ook personen kan toevoegen via een invulveld
    function addPersoontoDB() {

        // Ophalen van de data die de gebruiker heeft ingevuld
        name = document.getElementById("newFirstname").value;
        lastname = document.getElementById("newLastname").value;
        permissie = document.getElementById("newPermissie").value;

        // Aanmaken van de nieuwe gebruiker
        var nieuwpersoon = {
            vNaam: name,
            aNaam: lastname,
            Status: "Offline",
            Permissie: permissie,
            test: "1E2MS"
        };

        // Toevoegen van de gebruiker aan de 'personen'-array
        personen.push(nieuwpersoon);

        console.log(personen);


        // Functie die ervoor zorgt dat de tabel zichzelf update met de door gebruiker toegevoegde persoon
        function addNewPerson(n) {

            var ChangePermissieBtn = document.createElement('BUTTON');
            ChangePermissieBtn.innerText = 'Verwijder';
            ChangePermissieBtn.onclick = function testfunctie() {
                alert("Deze functie werkt niet aangezien dat niet het meest belangrijke was!");
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

            // Als je de grootte van de tabel hoger hebt gezet dan vier, voegt hij een 'ID' kolom toe
            if (n >= 5) {
                var tdID = document.createElement("td");
                tabelrij.appendChild(tdID);
                tdID.innerHTML = (makeid());
            }

            // Alle kolommen worden gevuld met de juiste informatie
            tdNaam.innerHTML = name;
            tdStatus.innerHTML = lastname;
            tdPermissie.innerHTML = permissie;
            tdChangePermissie.appendChild(ChangePermissieBtn);


        }

        // Hier voer je de functie uit, omdat je dit alleen wilt wanneer je hem in je code hebt aangeroepen
        new addNewPerson(grootte);



    }




    // Functies die je van buiten de Library kan aanroepen
    return {

        addPersoontoDB: addPersoontoDB,
        KolomnaamToevoeg: KolomnaamToevoeg,
        addTabel: addTabel

    }

})()
