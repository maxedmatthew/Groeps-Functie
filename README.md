# Groepsfunctie

Voor mijn Semester 4 DED project heb ik een handige Library gemaakt die een Tabel voor je aanmaakt, waarbij je gemakkelijk iemand kan toevoegen!

## Hoe installeer ik de Groepsfunctie Library?


### 1. Download de Library

Uiteraard is het belangrijk dat je eerst de juiste bestanden hebt voordat je de library gaat gebruiken voor je eigen project.

### 2. Link de JS file

Om de library te kunnen gebruiken moet je de JS file linken in jouw 'index.html' bestand o.i.d. Het is van belang dat je deze linkt onder je eigen gemaakte code (zie voorbeeld), anders zou het niet na behoren werken.

```
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

    <div class="eigen-gemaakte-content">
        <p>Hier staat je eigen gemaakte content</p>
    </div>
    
    <script type="text/javascript" src="js/groepsfunctie.js"></script>

</body>

</html>
```

### 3. Roep de Functies aan om een tabel op je pagina te weergeven

Je hebt nu wel al het juiste bestand gelinkt, maar er wordt nog niets weergeven op je pagina, dit kun je oplossen door de tabel aan te roepen op de volgende manier:

```
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>

<body>

    <div class="eigen-gemaakte-content">
        <p>Hier staat je eigen gemaakte content</p>
    </div>
    
    <script type="text/javascript" src="js/groepsfunctie.js"></script>

</body>

<script> 

    var grootte = 4;
    new groepsfunctie.KolomnaamToevoeg(grootte, 'Kolomnaam1', 'Kolomnaam2', 'Kolomnaam3', 'Kolomnaam4', 'Kolomnaam5', 'Kolomnaam6');
    new groepsfunctie.addTabel(grootte);
    
</script>

</html>
```

Let op: Het is belangrijk dat je hem aanroept onder de file die je hebt gebruikt om het Javascript bestand van de library te linken, anders zou het niet werken.

### 4. Pas de parameters aan

Niet tevreden met de benamingen van jouw tabel? Door eenvoudig de parameters aan te passen kun jij de namen gemakkelijk aanpassen.

```
    <script> 
    
    new groepsfunctie.KolomnaamToevoeg(grootte, 'jouw_kolom_naam1', 'jouw_kolom_naam2', 'jouw_kolom_naam3', 'jouw_kolom_naam4', 'jouw_kolom_naam5', 'jouw_kolom_naam6');
    
    </script> 
```

Niet tevreden met het aantal kolommen, in deze versie heb je tot maximaal 6 kolommen!

```
    <script> 
    
    var grootte = 6;
    
    </script> 
```

## Authors

* **Matthew Kouwenberg** - MaxedMatthew.nl

## Demo

http://i339253.iris.fhict.nl/groepsfunctie/Groeptabel.html




