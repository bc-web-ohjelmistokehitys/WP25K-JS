# JavaScriptin kirjoitussäännöt

Puhdas, ylläpidettävä ja virheetön JavaScript-koodi on tärkeää jokaiselle kehittäjälle. Näiden sääntöjen noudattaminen parantaa luettavuutta, vähentää bugeja ja tekee koodistasi helpommin ymmärrettävää ja ylläpidettävää ajan myötä.

## Käytä `"use strict"`

Aloita JavaScript-tiedostosi tai -funktiosi rivillä `"use strict"`. Tämä pakottaa tiukemman virheenkäsittelyn ja auttaa havaitsemaan yleisiä virheitä aikaisessa vaiheessa.

- **Havaitsee hiljaiset virheet**: Virheet, jotka voisivat muuten jäädä huomaamatta (esim. muuttujien käyttäminen ilman määrittelyä), havaitaan tiukassa tilassa.
- **Parantaa suorituskykyä**: Selaimet voivat optimoida tiukkaa koodia tehokkaammin.
- **Valmistaa tulevaisuuteen**: Estää joidenkin ominaisuuksien käytön, jotka voivat aiheuttaa ongelmia tulevissa JavaScript-versioissa.

```javascript
"use strict";
function esimerkkiFunktio() {
  // Tiukka tila on käytössä tässä
}
```

## Käytä johdonmukaista muotoilua

- **Sisennys:** Käytä **2 tai 4 välilyöntiä** johdonmukaisesti. Älä sekoita välilyöntejä ja sarkaimia.
- **Puolipisteet:** **Käytä aina puolipisteitä** lauseiden lopussa virheiden välttämiseksi.
- **Aaltosulkeet:** Käytä aaltosulkeita `{}` kaikissa lohkoissa – myös yksirivisissä `if`, `for` tai `while` -rakenteissa. Tämä estää virheitä, kun koodia muutetaan myöhemmin.

```javascript
if (isActive) {
  console.log("Aktiivinen");
}
```

## Määritä muuttujat oikein

- Käytä `let` ja `const`:

  - `let` muuttujille, joiden arvo voi muuttua.
  - `const` muuttujille, joiden arvo ei saa muuttua.

- Vältä `var`-avainta scope- eli näkyvyysalue-ongelmien vuoksi.

```javascript
const MAKSIMI_KAYTTAJAT = 100;
let nykyinenKayttaja = "Aliisa";
```

## Nimeämiskäytännöt

Selkeiden ja johdonmukaisten nimien käyttäminen muuttujille, funktioille ja luokille tekee koodista helpommin ymmärrettävää.

- **Muuttujat ja funktiot:** Käytä `camelCase`-kirjoitustapaa (esim. `userName`, `getUserInfo`).
- **Luokat:** Käytä `PascalCase`-kirjoitustapaa (esim. `Car`, `UserProfile`).
- **Vakiot:** Käytä `UPPER_CASE`-kirjoitustapaa (esim. `MAX_VALUE`).

```javascript
const MAX_SPEED = 120; // Vakio
function calculateDistance() {
  // camelCase-funktio
  // Funktion logiikka
}
class Vehicle {
  // PascalCase-luokka
  // Luokan logiikka
}
```

## Hyvät käytännöt funktioille

- **Yksi vastuualue:** Funktion tulisi tehdä **vain yhtä asiaa**.
- **Rajoita parametreja:** Jos funktio tarvitsee useita parametreja, harkitse niiden välittämistä oliona.
- **Käytä nuolifunktioita** (`=>`) silloin kun se tekee syntaksista selkeämmän.

```javascript
const getUserInfo = (user) => {
  return `${user.name} is ${user.age} years old.`;
};
```

## Kommentointi ja dokumentointi

- **Kirjoita merkityksellisiä kommentteja:** Vältä turhia kommentteja kuten `// Lisää 1 x:ään` koodirivillä `x += 1;`.
- **Käytä JSDocia** isommissa projekteissa automaattisen dokumentaation luomiseen.

```javascript
/**
 * Laskee suorakulmion pinta-alan.
 * @param {number} width
 * @param {number} height
 * @returns {number} Suorakulmion pinta-ala
 */
function calculateArea(width, height) {
  return width * height;
}
```

## Virheenkäsittely

- **Käytä `try...catch`-rakennetta virheiden hallintaan:** Estä koko sovelluksen kaatuminen.
- **Heitä omia virheitä:** Tarvittaessa käytä mukautettuja virheilmoituksia helpottamaan virheiden etsintää.

```javascript
try {
  let result = riskyOperation();
} catch (error) {
  console.error("Tapahtui virhe:", error.message);
}
```

## Käytä ESLintiä

- **Automaattinen koodin tarkistus:** Käytä ESLintiä tarkistamaan tyylivirheet, syntaksivirheet ja muut virheet automaattisesti.
- **Integroi editoriin:** Useimmat editorit (esim. VSCode) tukevat ESLintiä reaaliaikaiseen palautteeseen.
- Huom! EsLint on hyvä, mutta se menee helposti sotkuun Prettierin kanssa. Tämä on tuttu ongelma, joten netistä löytyy ohjeita tämän ratkaisemiseen.

## Vältä "taikalukuja" ja -merkkijonoja

"Taikaluvut" tai -merkkijonot ovat arvoja, joita ei ole selitetty. Anna niille sen sijaan kuvaavat vakiot.

```javascript
// Huono käytäntö
let discount = total * 0.2; // Mitä 0.2 tarkoittaa?

// Hyvä käytäntö
const DISCOUNT_RATE = 0.2;
let discount = total * DISCOUNT_RATE;
```

## Refaktoroi säännöllisesti ja jatka oppimista

**Refaktorointi** tarkoittaa ohjelmiston lähdekoodin parantamista ja selkeyttämistä muuttamatta sen ulkoista toimintaa. Refaktoroinnin tavoitteena on tehdä koodista helpommin ylläpidettävää, luettavaa ja tehokkaampaa.

- **Refaktoroi usein:** Paranna koodin rakennetta, luettavuutta ja suorituskykyä projektin edetessä.
- **Pysy ajan tasalla:** JavaScript kehittyy nopeasti. Seuraa uusia ominaisuuksia ja parhaita käytäntöjä.

```javascript
// Ennen refaktorointia
function add(a, b) {
  return a + b;
}

// Refaktoroinnin jälkeen (nuolifunktio)
const add = (a, b) => a + b;
```

Näiden parhaiden käytäntöjen noudattaminen auttaa sinua kirjoittamaan **puhdasta, helposti ylläpidettävää JavaScript-koodia**, mikä johtaa vähempiin virheisiin ja parempaan suorituskykyyn!
