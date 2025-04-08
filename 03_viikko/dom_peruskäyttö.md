# DOM:in hyödyntäminen

## Funktioiden käyttö HTML:ssä ja JavaScriptissä

JavaScript-funktioiden integroiminen HTML-elementteihin on oleellinen osa vuorovaikutteista verkkokehitystä.

### Funktion kutsuminen HTML:stä

Voit kutsua JavaScript-funktioita suoraan HTML-elementeistä käyttämällä tapahtumamääritteitä. Tämä lähestymistapa on suoraviivainen ja yleisesti käytetty yksinkertaisissa vuorovaikutustilanteissa.

#### Esimerkki: onClick-tapahtuma

```html
<button onclick="showAlert()">Klikkaa minua</button>

<script>
  function showAlert() {
    alert("Painiketta klikattiin!");
  }
</script>
```

Tämä nappi kutsuu `showAlert` nimistä JavaScript-funktiota, kun sitä klikataan, ja näyttää alert-ruudun.

### Funktion kutsuminen JavaScriptistä

Toinen vaihtoehto on käyttää tapahtumankäsittelijää JavaScriptissä, mikä tarjoaa suuremman joustavuuden ja hallinnan tapahtumakäsittelyssä.

#### Esimerkki: addEventListener-metodi

```javascript
document.getElementById("myButton").addEventListener("click", function () {
  alert("Painiketta klikattiin!");
});
```

Tässä esimerkissä tapahtumankäsittelijä lisätään painikkeelle, jonka tunniste on `myButton`. Kun painiketta klikataan, nimetön funktio näyttää ilmoitusruudun.

### Erot ja best practices

- **Vastuun jakaminen**: `addEventListener`-metodin käyttö JavaScriptissä erottaa HTML-rakenteen käyttäytymisestä, mikä noudattaa verkkokehityksen parhaita käytäntöjä.
- **Joustavuus**: JavaScriptistä kutsutut funktiot mahdollistavat monimutkaisemmat vuorovaikutukset, kuten useiden tapahtumakuuntelijoiden liittämisen samaan elementtiin tai tapahtumakuuntelijoiden dynaaminen lisääminen tai poistaminen.
- **Yhteensopivuus**: Vaikka HTML:n sisäiset tapahtumankäsittelijät (`onclick` HTML:ssä) ovat laajasti tuettuja ja helppokäyttöisiä, ne tarjoavat vähemmän joustavuutta ja voivat johtaa vaikeammin ylläpidettävään ja vianjäljitykseen vaikeasti ylläpidettävään koodiin.
- Eli vaikka funktion kutsuminen HTML:stä on mahdollista ja usein toimivaa, kannattaa suosia tapahtumankäsittelijää JavaScriptin puolella.

## Tapahtumatyypit (eng. _event types_)

Tässä lista yleisimmistä tapahtumatyypeistä, joihin aloittelijoiden tulisi tutustua aloittaessaan JavaScript-tapahtumankäsittelyn.

1. **`click`**: Käynnistyy, kun elementtiä klikataan.
2. **`dblclick`**: Käynnistyy, kun elementtiä kaksoisklikataan.
3. **`mouseover`**: Laukaistaan, kun hiiren osoitin liikkuu elementin päällä.
4. **`mouseout`**: Laukaistaan, kun hiiren osoitin poistuu elementistä.
5. **`mousedown`**: Tapahtuu, kun hiiren painiketta painetaan elementissä.
6. **`mouseup`**: Tapahtuu, kun hiiren painike vapautetaan elementin yli.
7. **`mousemove`**: Käynnistyy, kun hiirtä liikutetaan.
8. **`keydown`**: Laukaistaan, kun näppäintä painetaan alas.
9. **`keyup`**: Taphtuu, kun näppäin vapautetaan.
10. **`keypress`**: Käynnistyy, kun näppäintä painetaan ja vapautetaan.
11. **`change`**: Laukaistaan `<input>`, `<select>` ja `<textarea>` -elementeille, kun käyttäjä tekee muutoksen elementin arvoon.
12. **`submit`**: Tapahtuu, kun lomake lähetetään.
13. **`load`**: Käynnistyy, kun resurssi ja sen riippuvaiset resurssit ovat latautuneet.
14. **`unload`**: Käynnistyy, kun asiakirja tai sen lapsiresurssi puretaan.
15. **`resize`**: Tapahtuu, kun asiakirjanäkymää tai elementtiä on muutettu.
16. **`scroll`**: Laukaistaan, kun asiakirjanäkymä tai elementti vieritetään.
17. **`focus`**: Käynnistyy, kun elementti saa fokuksen.
18. **`blur`**: Laukaistaan, kun elementti menettää fokuksen.

Nämä tapahtumat kattavat laajan valikoiman vuorovaikutuksia, käyttäjän syötteestä hiirellä ja näppäimistöllä sivuston elinkaarensa tapahtumiin. Kiinnittämällä tapahtumakuuntelijoita näihin tapahtumiin voit tehdä verkkosivuistasi dynaamisia ja vuorovaikutteisia käyttäjän toimien perusteella.

## DOM-valitsijat (eng. _dom selector_)

DOM-valitsijat mahdollistavat HTML-elementtien valinnan ja manipuloinnin.

### getElementById

Valitsee yksittäisen elementin sen tunnisteen perusteella.

```js
const elementti = document.getElementById("uniikkiElementti");
```

### getElementsByClassName

Valitsee kaikki elementit, jotka jakavat tietyn luokan nimen.

```js
const elementit = document.getElementsByClassName("jaettuLuokka");
```

### getElementsByTagName

Valitsee kaikki tietyllä tunnisteella varustetut elementit.

```js
const elementit = document.getElementsByTagName("div");
```

### querySelector

Valitsee ensimmäisen elementin, joka vastaa määritettyä CSS-valitsijaa.

```js
const ensimmäinenOsuma = document.querySelector(".luokkavalitsin");
```

### querySelectorAll

Valitsee kaikki elementit, jotka vastaavat määritettyä CSS-valitsijaa.

```js
const kaikkiOsumat = document.querySelectorAll("p.korostus");
```

## Sisällön ja ominaisuuksien muokkaaminen

Kun olet valinnut elementit, voit muokata niiden sisältöä ja ominaisuuksia.

### InnerText vs. TextContent

`innerText` hakee ja asettaa solussa näkyvän tekstin, kun taas `textContent` hakee ja asettaa koko tekstin.

```js
elementti.innerText = "Näkyvä teksti";
elementti.textContent = "Koko teksti, mukaan lukien skripti- ja tyylielementit";
```

### innerHTML

`innerHTML` mahdollistaa elementin HTML-sisällön hakemisen ja asettamisen.

```js
elementti.innerHTML = "<strong>Lihavoitu teksti</strong>";
```

HUOM! Ole varovainen `innerHTML`:n kanssa Cross-Site Scripting (XSS) -hyökkäysten riskin vuoksi. Älä koskaan käytä innerHTML:ää epäluotettavan datan kanssa. Käytä `innerHTML`:ää staattiseen sisältöön tai silloin, kun hallitset HTML-sisältöä täysin varmistaen sen turvallisuuden.
