# Termejä

Olen kerännyt tänne termejä, jotka tulevat kurssin aikana vastaan ja voivat olla hankalia hahmottaa.

## Iterointi (iteration)

Iterointi tarkoittaa prosessia, jossa käydään läpi sarja elementtejä yksi kerrallaan, yleensä suorittamalla tietty toiminto jokaiselle elementille. Tämä voi tapahtua esimerkiksi taulukossa olevien arvojen läpikäynnissä tai avain-arvo -pareja sisältävässä tietorakenteessa.

## Pistenotaatio (dot notation)

JS-pistenotaatio on tapa viitata tai käyttää objektien ominaisuuksia ja metodeita JavaScriptissä. Se koostuu objektin nimestä, pisteen (.) ja ominaisuuden tai metodin nimestä. Tämä antaa mahdollisuuden suoraan käyttää objektin ominaisuuksia tai kutsua sen metodeita.

Alla esimerkki, jossa numerot-taulukkoon viitataan suoraan pistenotaation avulla ja lisätään uusi elementti pop()-metodilla

```js
let numerot = [1, 3, 5, 7];
numerot.pop(9); //lisää numeron 9 taulukon loppuun
```

Myös vanha tuttumme console.log käyttää _console_-objektiin _log_-metodia.

## Takaisinkutsufunktio (call back function)

Takaisinkutsufunktio on funktio, joka **annetaan toiselle funktiolle parametrina**, ja sitä kutsutaan myöhemmin, yleensä kun tietyt ehdot tai tapahtumat ovat täyttyneet.

Takaisinkutsufunktioita käytetään usein asynkronisten toimintojen, kuten ajastettujen tehtävien tai verkko-pyyntöjen, käsittelyssä. Ne tarjoavat joustavan tavan suorittaa toimintoja eri ajoituksissa tai tapahtumissa.

## Asynkronisuus

Asynkronisuus viittaa ohjelmointitapaan, jossa tietyt tehtävät suoritetaan erillään toisistaan, "epäsynkassa". Sen sijaan, että ohjelma odottaisi yhden tehtävän valmistumista ennen kuin se siirtyy seuraavaan, asynkronisessa ohjelmoinnissa tehtävät voidaan suorittaa samanaikaisesti tai vuorotellen, jolloin ohjelman suoritus ei pysähdy odottamaan yksittäisten tehtävien valmistumista.

Tämä on erityisen hyödyllistä tehtävissä, jotka voivat kestää pitkään, kuten tiedon lataaminen verkosta tai suorittaminen monimutkaisten laskelmien kanssa. Sen sijaan että ohjelma pysähtyisi odottamaan tiedon lataamista tai laskelmien suorittamista, se voi jatkaa muiden tehtävien suorittamista samalla, kun odottaa toisten tehtävien valmistumista. Tämä parantaa ohjelman suorituskykyä ja käytettävyyttä, koska käyttäjä ei joudu odottamaan tehtävien valmistumista ennen kuin voi jatkaa toimintojaan. Näitä ei tehdä vielä tässä vaiheessa.

## Best Practice eli suositellut käytännöt

Koska koodatessa samaan lopputulokseen voi päätyä montaa eri kautta, on hyvä välillä miettiä mikä olisi paras tapa tietyn asian toteuttamiseen. _Best practices_ ovat käyttötapoja, jotka alalla on havaittu parhaiten toimiviksi. Ne eivät ole ainoita vaihtoehtoja, mutta yleensä toimivat paremmin ja varmemmin kuin muut.

## Rajapinta (interface)

Rajapinta on käsitteenä keskeinen ohjelmoinnissa ja tietotekniikassa. Se viittaa tapaan, jolla kaksi erillistä järjestelmää, komponenttia tai ohjelmistoa vuorovaikuttavat keskenään. Rajapinta määrittelee, miten eri osat kommunikoivat toistensa kanssa ilman, että niiden sisäinen toiminta paljastetaan.

**API** (Application Programming Interface) on ohjelmointirajapinta, joka määrittelee joukon sääntöjä ja toimintoja, joiden avulla erilaiset ohjelmistot voivat kommunikoida keskenään. Se tarjoaa tapoja ja rajapintoja, joiden avulla sovellukset voivat käyttää toistensa toiminnallisuutta tai dataa ilman että ne tarvitsevat tuntea tai ymmärtää toistensa sisäistä rakennetta. API voi olla käytettävissä eri muodoissa, kuten verkkopalveluna, kirjastona tai ohjelmointirajapintana, joka sallii sovellusten integroitumisen ja yhteistyön.

## Syntaksi

Ohjelmointikielillä on säännöt siitä, miten juuri sillä kielellä ilmaistaan asiat eli eli ehdot sille, milloin jokin ilmaus on kyseisen kielen ilmaus. Esimerkiksi JavaScriptissä on tietyt käyttötapaukset kaarisuluille (), hakasuluille [] ja aaltosuluille {}. Jos käyttää vääriä sulkeita, ohjelma ei toimi ja kyseessä on silloin syntaksivirhe.

Joissakin ohjelmistokielissä (esim. Python) sisennykset ovat merkityksellisiä, kun monissa niiden käyttö on puhtaasti kosmeettista.

## Null, undefined & nullish

JavaScriptissä **`null`** on erityinen arvo, joka edustaa "ei mitään" tai "tyhjää" tilaa. Se on yksi JavaScriptin perusarvoista, ja sitä käytetään osoittamaan, että muuttujalla ei ole arvoa tai että arvo on tarkoituksellisesti poistettu.**`null`-arvo pitää aina nimenomaisesti asettaa** muuttujalle tai arvolle. Se merkitsee, että muuttujalla ei ole viittausta olioon eikä se osoita mihinkään erityiseen arvoon. Tämä voi tapahtua esimerkiksi silloin, kun halutaan tyhjentää muuttuja tai osoittaa, että tietoa ei ole saatavilla.

On tärkeää huomata, että `null` on erillinen arvo **`undefined`**-arvosta, vaikka ne molemmat edustavat "tyhjää" tilaa. `undefined` tarkoittaa, että **arvoa ei ole määritetty**. Kun muuttujalle ei ole annettu arvoa, sen oletusarvo on `undefined`. Usein määrittelemättä jättäminen tapahtuu vahingossa ja on syynä koodin toimimattomuudelle.

"**Nullish**" viittaa JavaScriptissä arvoihin, jotka ovat joko `null` tai `undefined`. Näitä arvoja pidetään "nollankaltaisina" tai "nullish" arvoina, ja ne ovat toistensa lähellä olevia käsitteitä. Käytännössä nullish-arvot osoittavat "tyhjää" tai "olemattomuutta".

Nullish-arvojen ymmärtäminen on tärkeää, koska niitä käytetään usein ehdollisissa lauseissa tai arvon tarkistamisessa ennen toimintojen suorittamista. Esimerkiksi [valinnaisessa ketjuttamisessa (`?.`)](../08_osa/01_ketjutus.md), jota käytetään nullish-arvojen aiheuttamien virheiden estämiseen, varmistetaan, että arvoa käytetään vain, jos se ei ole `null` tai `undefined`.

**Omarthegeek** on tehnyt tästä erittäin havainnollistavan kuvan: ![null vs undefined](../assets/r_2347874_pNrMx.jpg)
[lähde](https://devrant.com/rants/2347874/null-vs-undefine)

**Nullish** arvoja ovat kuvassa kaksi alempaa kuvaa.
