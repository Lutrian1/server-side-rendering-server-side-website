# Milledoni

## Inleiding
Milledoni heeft sinds kort het design aangepast van hun site, De site was in hun worden 'verouderd' en had vernieuwing nodig. Milledoni is een site dat bedoelt is om mensen te helpen uitzoeken bij een cadeau, zelfmakend of gekocht. Het maakt gebruik van een AI chatbot die je vragen stelt, zodat hij je helpt bij het uitzoeken van een perfect cadeau. Alle resulaten die je de AI vraagt worden rechts getoond.
### Doel
Het doel van deze review is om feedback te krijgen op het werk dat is gemaakt, en de opdrachthgever op de hoogte te houden van het werk. 
## Beschrijving
Voor school is het de bedoeling om te leren te werken met notejs, en voornamelijk te werken met app.get/post. Wij krijgen data ui een directus die we in ons werk tonen, een van de belangrijkste dingen waar ik aan heb gewerkt is het maken van een 'opslaan' knop, die data opslaat en toont in een andere tab. Daarnaast vroeg de opdrachtgever ons om ook een mobiel design te maken waaran ik een idee had gebouwd.

## Uitwerking

### Mobile Design.

Omdat ik het nieuwe design van Milledoni al een goed design vond, heb ik niet de kleuren of opbouw van kaartjes veranderd. Ik heb alleen gewerkt aan hoe je op een telefoon scherm resultaten kan tonen terwijl je typt naar de chatbot, dit was namelijk een design challenge.

![Results 45](https://github.com/user-attachments/assets/d5ce3b68-2c0e-4506-9c80-f8b5ce389b02)

Ik koos ervoor om de resultaten dat je naar de chatbot stuurt rechts te tonen, zo kan je volgen wat je vragen waren. In de box kan je scrollen om zo verder terug te gaan. De items worden boven de chatbox getoond, dit kunnen maar 3 zijn. Het belangrijkste is dat de home en andere buttons verwijdert worden. Deze zijn namelijk niet nodig als je aan het typen bent, zodra je de chatbox sluit om de resultaten te tonen, komen deze buttons terug.

### Homepage

Ik heb alleen gewerkt aan de styling van de homepage, en een save button die ik in 'Kenmerken' laat zien. Mijn homepage ziet er nu zo uit:

https://server-side-rendering-server-side-website-56rx.onrender.com

#### Save-Button

Momeenteel is het belangrijkste in mijn site de 'save-button', deze button kan gifts oplsaan en deze tonen in 'jouw gifts' pagina. Dit is hoet het werkt:

https://github.com/user-attachments/assets/cd4ed91e-428a-47ae-b705-9505baed3e39

## Kenmerken

### Liquid Templates

#### For Loop

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/3610cfdfb0eb07aa231b6cdf48787bc3221ecf56/views/index.liquid#L47-L72

In de for loop word voor elke data uit de directus een article gemaakt met daarin specifieke dingen uit de directus, Dingen zoals de gift name of image kan je dan met een server code meegeven in de for loop.

<img width="1217" alt="image" src="https://github.com/user-attachments/assets/aa24dbc7-403c-4114-89a2-4a90344cf7af" />

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/3610cfdfb0eb07aa231b6cdf48787bc3221ecf56/server.js#L40-L49

In regel 59 heb ik voorbeeld een server code met de code:

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/3610cfdfb0eb07aa231b6cdf48787bc3221ecf56/views/index.liquid#L59

de {{ gift.Image }} in de img src "", toont dus de image van de directus voor dat item. Waardoor elke data dynamisch is.


### Specifieke gift page

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/3610cfdfb0eb07aa231b6cdf48787bc3221ecf56/views/index.liquid#L49

In mijn html creeër ik een pagina voor elke specifieke gift.

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/26703c537048c3e73c18ae93ff8a6eb11479e43e/server.js#L51-L59

Nadat je heb geklikt op een gift, fetched hij data uit de directus van die specifieke gift en post dit in de html. De belangrijkste regel is de request.params.id. Dit zorgt ervoor dat de data dynamisch is, en ik voor elke gift dus een andere inhoud op de pagina heb.

### Save Button

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/3610cfdfb0eb07aa231b6cdf48787bc3221ecf56/views/index.liquid#L51-L58

In het kort geeft dit data mee aan een pagina dat niet bestaat. Ik gebruik hiervoor een form met de action /save-gift. Het post het dus naar een link waar je niet naar toe kan. Ik haal data uit deze link en toon het op een pagina waar je wel naar kan navigeren:

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/26703c537048c3e73c18ae93ff8a6eb11479e43e/server.js#L61-L82

In regel 61 maak ik een lege array die dus word gevuld met data uit de save knop. Deze array word meegegeven met een app get naar de /mysavedgift (mygiftpage.liquid) in regel tot 82.

Om de specifieke gift toe te voegen gebruik ik de GiftId variablen. De specifieke gifts worden uiteindelijk gepushed naar de save gifts, en daarna geredirect aan de homepage. 

### Reroute en 404.

#### Reroute: 

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/3610cfdfb0eb07aa231b6cdf48787bc3221ecf56/server.js#L86-L88

Hierin word je terug gestuurd naar de lege pagina als je een verkeerde gift id invoerd. 

#### 404:

https://github.com/Lutrian1/server-side-rendering-server-side-website/blob/3610cfdfb0eb07aa231b6cdf48787bc3221ecf56/server.js#L91-L93

Als je een niet bestaande route invoert, toont hij een 404 page. Ik render een 404 page met specifieke styling. Het belangrijkste is de response staus 404, zodat de browser weet dat dit een 404 is. 

#### Het gebruik van {*splat}

In express 4 kon je gebruik maken van het '*', Dit betekent eigenlijk alles. Dus alles dat verkeerde word ingevoerd na een route (bijvoorbeeld: /oigwogee), word getoond als 404. In express 5 word gebruik gemaakt van de *splat, ik weet niet wat dit inhoud, maar dit is nodig om dezelfde werking te behouden. Zie documentatie van Expressjs: https://expressjs.com/en/guide/migrating-5.html#path-syntax

### Vragen

Veel staat in het Engels, maar de namen en dynamische data is allemaal in het nederlands. Kan dit worden aangepast?

Welke Pagina gaat naar wat?










