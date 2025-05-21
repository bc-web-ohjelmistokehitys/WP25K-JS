# Pannukakkutilauksen muokkaussovellus

## Vaihe 2: Asiakastiedot ja toimitusvaihtoehdot

Tämä on sovelluksesi toinen vaihe, jossa parannat pannukakun räätälöintisovellusta lisäämällä asiakastiedot ja toimitusvaihtoehdot.

Tulet palauttamaan tämän projektin myöhemmin, joten seuraa ohjeita huolellisesti ja pidä koodi siistinä ja rakenteellisena.

Tässä vaiheessa myös tapahtumien käsittely uudistetaan: useiden tapahtumakuuntelijoiden sijaan käytetään yhtä lomakkeen `change`-kuuntelijaa. Vaiheen painopiste on taulukoissa — talletat täytteet ja lisukkeet taulukoihin ja näytät ne oikein tilausyhteenvedossa.

## Mitä on muuttunut

- HTML on jo refaktoroitu, sinun ei tarvitse muokata sitä.
- Kaikki syötteet ovat `<form>`-elementin sisällä, joten yksi kuuntelija riittää.
- Hinnat tallennetaan `data-price`-attribuutilla `value`:n sijaan.
- Valinnat tulee hakea `.textContent`:illa näyttöä varten ja `data-price`:lla hintalaskentaan.
- Tilausyhteenveto-osio on lisätty lopullisten tietojen näyttämistä varten.

Sinun tulee nyt päivittää JavaScript vastaamaan näitä muutoksia.

## JavaScriptin päivityksen vaiheet

### Refaktoroi tapahtumakuuntelijat

- Älä käytä useita `addEventListener()`-kutsuja, vaan lisää yksi `change`-kuuntelija `<form>`-elementtiin.
- Tarkista tapahtumankäsittelijässä, mikä kenttä muuttui, ja päivitä tila sen mukaan.

### Tallenna täytteet ja lisukkeet taulukoihin

- Käytä taulukoita tallentaaksesi valitut täytteet ja lisukkeet.
- Kun täyte tai lisuke valitaan, lisää se taulukkoon.
- Kun se poistetaan, poista se taulukosta.

### Päivitä hinnan laskenta

- Aloita valitun pannukakun perushinnasta käyttäen `data-price`:a.
- Lisää 1 € jokaisesta täytteestä käymällä toppings-taulukko läpi.
- Lisää lisukkeiden tarkat hinnat käymällä extras-taulukko läpi.
- Jos "Toimitus" on valittu, lisää 5 € `data-price`:n perusteella.
- Varmista, että hinta päivittyy heti, kun jokin valinta muuttuu.

### Näytä tilausyhteenveto

- Hae asiakkaan nimi.
- Hae valittu pannukakkutyyppi.
- Hae valitut täytteet ja lisukkeet taulukoista ja näytä ne.
- Hae valittu toimitustapa.
- Näytä koko tilauksen tiedot, kun käyttäjä klikkaa "Näytä tilaus" -painiketta.
