// Importeer het npm package Express (uit de door npm aangemaakte node_modules map)
// Deze package is geïnstalleerd via `npm install`, en staat als 'dependency' in package.json
import express from 'express'

// Importeer de Liquid package (ook als dependency via npm geïnstalleerd)
import { Liquid } from 'liquidjs';


console.log('Pages Loaded')

// Doe een fetch naar de data die je nodig hebt
// const apiResponse = await fetch('...')
const milledoniData = await fetch('https://fdnd-agency.directus.app/items/milledoni_products')
// Lees van de response van die fetch het JSON object in, waar we iets mee kunnen doen
// const apiResponseJSON = await apiResponse.json()
const milledoniResponseJSON = await milledoniData.json()
// Controleer eventueel de data in je console
// (Let op: dit is _niet_ de console van je browser, maar van NodeJS, in je terminal)
// console.log(apiResponseJSON)
console.log(milledoniResponseJSON)  


// Maak een nieuwe Express applicatie aan, waarin we de server configureren
const app = express()

// Gebruik de map 'public' voor statische bestanden (resources zoals CSS, JavaScript, afbeeldingen en fonts)
// Bestanden in deze map kunnen dus door de browser gebruikt worden
app.use(express.static('public'))


// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express()); 

// Stel de map met Liquid templates in
// Let op: de browser kan deze bestanden niet rechtstreeks laden (zoals voorheen met HTML bestanden)
app.set('views', './views')

// Maak een GET route voor de index (meestal doe je dit in de root, als /)
app.get('/', async function (request, response) {

  const giftsResponse = await fetch('https://fdnd-agency.directus.app/items/milledoni_products') // Luuk: Pas dit aan naar een filter voor de homepage dus soorteren op saves bijv /)

  // En haal daarvan de JSON op
  const giftsResponseJSON = await giftsResponse.json()
   // Render index.liquid uit de Views map
   // Geef hier eventueel data aan mee
   response.render('index.liquid' , {allData: milledoniResponseJSON.data, giftresult: giftsResponseJSON.data })
})

app.get('/gift/:id', async function (request, response) {

  const specificGiftResponse = await fetch(`https://fdnd-agency.directus.app/items/milledoni_products/${request.params.id}`);

  const specificGiftResponseJSON = await specificGiftResponse.json();

  response.render('specificGift.liquid', { specificGift: specificGiftResponseJSON.data });
});

let savedGifts = [];

// POST route om de gift op te slaan
app.post('/save-gift', express.urlencoded({ extended: true }), async function (request, response) {
    const giftId = request.body.giftId;

    // Fetch gift details van API met giftId
    const giftResponse = await fetch(`https://fdnd-agency.directus.app/items/milledoni_products/${giftId}`);
    const giftData = await giftResponse.json();

    // voeg toe aan de 'savedGifts' array
    savedGifts.push(giftData.data);

    // Redirect naar homepage (Doe dit voor meerdere pages, voor nu alleen index)
    response.redirect('/');
});

// Route om de likes te laten zien
app.get('/mysavedgifts', function (request, response) {
    response.render('mygiftpage.liquid', { savedGifts: savedGifts });
});


// Maak een POST route voor de index; hiermee kun je bijvoorbeeld formulieren afvangen
// Hier doen we nu nog niets mee, maar je kunt er mee spelen als je wilt
app.post('/', async function (request, response) {
  // Je zou hier data kunnen opslaan, of veranderen, of wat je maar wilt
  // Er is nog geen afhandeling van een POST, dus stuur de bezoeker terug naar /
  response.redirect(303, '/')
})

// Stel het poortnummer in waar Express op moet gaan luisteren
// Lokaal is dit poort 8000, als dit ergens gehost wordt, is het waarschijnlijk poort 80
app.set('port', process.env.PORT || 8000)

// Start Express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
})
